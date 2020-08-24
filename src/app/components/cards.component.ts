import { Component, EventEmitter, Output } from '@angular/core'
import { Post } from '../models/post.model'

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ['./cards.component.css']
})

export class CardsComponent {
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

  hero = ""
  @Output() heroCreated = new EventEmitter<Post>()

  createHero() {
    this.heroCreated.emit(this.hero)
    this.hero = ""
  }
}
