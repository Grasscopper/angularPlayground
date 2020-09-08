import { Component } from '@angular/core'

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.css"]
})

export class VideoComponent {
  lofi() {
    document.getElementById("radioVideo").src = "https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"
    document.getElementById("radioVideo").style.visibility = "hidden"
  }

  dubstep() {
    document.getElementById("radioVideo").src = "https://www.youtube.com/embed/Oxj2EAr256Y?autoplay=1"
    document.getElementById("radioVideo").style.visibility = "hidden"
  }

  gaming() {
    document.getElementById("radioVideo").src = "https://www.youtube.com/embed/P1k4jGwhKF0?autoplay=1"
    document.getElementById("radioVideo").style.visibility = "hidden"
  }

  stop() {
    console.log("stop")
    document.getElementById("radioVideo").src = ""
    document.getElementById("radioVideo").style.visibility = "hidden"
  }
}
// document.getElementById("radioVideo").style.visibility = "hidden"
