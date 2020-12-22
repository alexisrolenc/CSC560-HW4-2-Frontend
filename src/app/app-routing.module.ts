import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './pages/players/players.component';
import { PlayerDetailsComponent } from './pages/player-details/player-details.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MostHomeRunsComponent } from './pages/most-home-runs/most-home-runs.component';
import { MostStrikesComponent } from './pages/most-strikes/most-strikes.component';
import { LowestOutsComponent } from './pages/lowest-outs/lowest-outs.component';
import { AvgBatSpeedDesComponent } from './pages/avg-bat-speed-des/avg-bat-speed-des.component';
import { LteWalksComponent } from './pages/lte-walks/lte-walks.component';

const routes: Routes = [
  { path: '',  component: MainLayoutComponent, children: [
    { path: '',  component: PlayersComponent },
    { path: 'mosthomeruns',  component: MostHomeRunsComponent },
    { path: 'lte5walks',  component: LteWalksComponent },
    { path: 'avgbatspeeddes',  component: AvgBatSpeedDesComponent },
    { path: 'lowestouts2',  component: LowestOutsComponent },
    { path: 'moststrikes',  component: MostStrikesComponent },
    {path: 'player', component: PlayerDetailsComponent },
    {path: 'player/:_id', component: PlayerDetailsComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
