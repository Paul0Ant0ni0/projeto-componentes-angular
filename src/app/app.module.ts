import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardbolosComponent } from './cardbolos/cardbolos.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardbolosComponent,
    CardListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
