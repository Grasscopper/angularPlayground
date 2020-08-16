import { Component } from '@angular/core'
@Component({
  selector: "app-avengers",
  templateUrl: "./avengers.component.html",
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent {
  post = ""
  savedPost = ""
  banner = "Bruce Banner"
  color = "purple"
  savePost() {
    this.savedPost = this.post
  }
  hulk() {
    if (this.color == "green") {
      this.color = "purple"
      this.banner = "Bruce Banner"
    } else {
      this.color ="green"
      this.banner = "Incredible Hulk"
    }
  }
}
