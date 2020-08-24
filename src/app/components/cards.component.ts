import { Component, EventEmitter, Output } from '@angular/core'

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

  postName = "Captain America";
  postHp = "200";
  postAtk = "30";
  postDef = "15";
  postMoveOne = "Brute Takedown";
  postMoveTwo = "Shield Throw";

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
  @Output() heroCreated = new EventEmitter()

  createHero() {
    this.heroCreated.emit(this.hero)
    this.hero = ""
  }
}
