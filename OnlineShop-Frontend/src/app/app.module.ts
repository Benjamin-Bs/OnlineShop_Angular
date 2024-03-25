import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import axios from 'axios';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { GoodsCardsComponent } from './goods-cards/goods-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCardComponent,
    GoodsCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
