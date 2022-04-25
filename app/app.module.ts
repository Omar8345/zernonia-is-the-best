import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './sections/banner/banner.component';
import { TrendingComponent } from './sections/trending/trending.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import {NgxFlickingModule} from "@egjs/ngx-flicking";
import {ReactiveFormsModule} from "@angular/forms";
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    TrendingComponent,
    GameCardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxFlickingModule,
        ReactiveFormsModule,
        InfiniteScrollModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
