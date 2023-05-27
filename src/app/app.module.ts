import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardContentHeaderComponent } from './card-content-header/card-content-header.component';
import { CardsComponent } from './cards/cards.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardContentComponent,
    CardContentHeaderComponent,
    CardsComponent,
    CardHeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
