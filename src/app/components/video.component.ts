import { Component } from '@angular/core'

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.css"]
})

export class VideoComponent {
  lofi(radio) {
    radio.src = "https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"
    radio.style.visibility = "hidden"
  }

  dubstep(radio) {
    radio.src = "https://www.youtube.com/embed/Oxj2EAr256Y?autoplay=1"
    radio.style.visibility = "hidden"
  }

  gaming(radio) {
    radio.src = "https://www.youtube.com/embed/P1k4jGwhKF0?autoplay=1"
    radio.style.visibility = "hidden"
  }

  stop(radio) {
    radio.src = ""
    radio.style.visibility = "hidden"
  }
}
