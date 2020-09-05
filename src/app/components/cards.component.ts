import { Component, EventEmitter, Output } from '@angular/core'
import { Post } from '../models/post.model'

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ['./cards.component.css']
})

export class CardsComponent {
  pokemon = []

  ngOnInit() {
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

  hero: string
  @Output() heroCreated = new EventEmitter<Post>()

  createHero() {
    const post = {
      hero: this.hero
    }
    this.heroCreated.emit(post)
    this.hero = ""
  }
}
