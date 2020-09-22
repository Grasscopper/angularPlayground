import { Component, EventEmitter, Output } from '@angular/core'
import { Post } from '../models/post.model'
import { NgForm } from '@angular/forms'
import { PostService } from '../services/post.service'

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ['./cards.component.css']
})

export class CardsComponent {
  constructor(public postService: PostService) {}

  characters = []
  getCharacters() {
    fetch('/api/characters')
    .then(response => response.json())
    .then(characters => this.characters = characters)
    .catch(error => console.error(error))
  }

  postCharacters(form: NgForm) {
    if (form.invalid) return
    fetch('/api/characters', {
      method: "POST",
      body: JSON.stringify(form.value),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(newCharacter => this.characters.push(newCharacter))
    .catch(error => console.error(error))
    form.resetForm()
  }

  pokemon = []

  ngOnInit() {
    this.getCharacters()
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(pokemon => {
      pokemon.results.forEach(poke => {
        fetch(poke.url)
        .then(response => response.json())
        .then(poke => {
          let newName = poke.name.charAt(0).toUpperCase()
          let endName = poke.name.substring(1)
          newName += endName
          poke.name = newName
          this.pokemon.push(poke)
        })
      })
    })
  }

  sort() {
    this.pokemon.sort(function(a, b) {
      return a.id - b.id
    })
  }

  name = ""
  hp = ""
  atk = ""
  def = ""
  moveOne = ""
  moveTwo = ""

  postName = "Name";
  postHp = "XX";
  postAtk = "XX";
  postDef = "XX";
  postMoveOne = "Special Move 1";
  postMoveTwo = "Special Move 2";

  createCard() {
    this.postName = this.name;
    this.postHp = this.hp;
    this.postAtk = this.atk;
    this.postDef = this.def;
    this.postMoveOne = this.moveOne;
    this.postMoveTwo = this.moveTwo;

    this.name = ""
    this.hp = ""
    this.atk = ""
    this.def = ""
    this.moveOne = ""
    this.moveTwo = ""
  }

  createHero(form: NgForm) {
    if (form.invalid) {
      return
    }
    const post = {
      hero: form.value.hero
    }
    this.postService.addPost(post)
    form.resetForm()
  }

}
