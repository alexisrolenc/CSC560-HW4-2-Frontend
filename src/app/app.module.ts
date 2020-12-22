import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { PlayersComponent } from './pages/players/players.component';
import { PlayerCardComponent } from './cards/player-card/player-card.component';
import { PlayerDetailsComponent } from './pages/player-details/player-details.component';
import { MostHomeRunsComponent } from './pages/most-home-runs/most-home-runs.component';
import { LteWalksComponent } from './pages/lte-walks/lte-walks.component';
import { AvgBatSpeedDesComponent } from './pages/avg-bat-speed-des/avg-bat-speed-des.component';
import { LowestOutsComponent } from './pages/lowest-outs/lowest-outs.component';
import { MostStrikesComponent } from './pages/most-strikes/most-strikes.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PlayersComponent,
    PlayerCardComponent,
    PlayerDetailsComponent,
    MostHomeRunsComponent,
    LteWalksComponent,
    AvgBatSpeedDesComponent,
    LowestOutsComponent,
    MostStrikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
