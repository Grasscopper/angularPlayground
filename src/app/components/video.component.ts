import { Component } from '@angular/core'

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.css"]
})

export class VideoComponent {
  listening = false

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

  controlRadio(radio) {
    if (this.listening == false) {
      this.listening = true
      document.getElementsByClassName("lofi")[0].classList.remove("hide")
      document.getElementsByClassName("dubstep")[0].classList.remove("hide")
      document.getElementsByClassName("gaming")[0].classList.remove("hide")
      document.getElementsByClassName("stop")[0].classList.remove("hide")
    }
    else if (this.listening) {
      this.listening = false
      this.stop(radio)
      document.getElementsByClassName("lofi")[0].classList.add("hide")
      document.getElementsByClassName("dubstep")[0].classList.add("hide")
      document.getElementsByClassName("gaming")[0].classList.add("hide")
      document.getElementsByClassName("stop")[0].classList.add("hide")
    }
  }
}
