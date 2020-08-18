import { Component } from '@angular/core'

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ['./cards.component.css']
})

export class CardsComponent {
  name = "Thor"
  naruto() {
    this.name = "Widow"
  }
}
