import { Component, Input } from '@angular/core'
import { Post } from '../models/post.model'
import { PostService } from '../services/post.service'

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})

export class PostsComponent {
  @Input() posts: Post[] = []

  constructor(public postService: PostService) {}
  //the public keyword is a shortcut for
  //making postService accessible in this component
}
