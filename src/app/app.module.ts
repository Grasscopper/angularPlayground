import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvengersComponent } from './components/avengers.component'
import { MegaManComponent } from './components/mega-man.component'

@NgModule({
  declarations: [
    AppComponent,
    AvengersComponent,
    MegaManComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
