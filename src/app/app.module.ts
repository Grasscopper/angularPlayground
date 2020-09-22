import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards.component'
import { PostsComponent } from './components/posts.component'
import { VideoComponent } from './components/video.component'
import { CharacterTileComponent } from './components/characterTile.component'

import { PostService } from './services/post.service'
import { CharacterService } from './services/character.service'

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    PostsComponent,
    VideoComponent,
    CharacterTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [PostService, CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
