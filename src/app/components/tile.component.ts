import { Component, Input } from '@angular/core'
import { Character } from '../models/character.model'

@Component({
  selector: "app-tile",
  templateUrl: "./tile.component.html",
  styleUrls: ["./tile.component.css"]
})

export class TileComponent {
  @Input() character: any
  toad() {
    debugger
  }
}
