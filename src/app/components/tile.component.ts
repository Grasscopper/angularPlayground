import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Character } from '../models/character.model'

@Component({
  selector: "app-tile",
  templateUrl: "./tile.component.html",
  styleUrls: ["./tile.component.css"]
})

export class TileComponent {
  @Input() character: Character
  @Output() sendDeleteCharacter = new EventEmitter()
  delete() {
    this.sendDeleteCharacter.emit(this.character._id)
  }
}
