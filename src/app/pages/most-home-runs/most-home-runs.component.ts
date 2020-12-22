import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/player.model';
import { PlayersService } from 'src/app/shared/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-most-home-runs',
  templateUrl: './most-home-runs.component.html',
  styleUrls: ['./most-home-runs.component.scss']
})
export class MostHomeRunsComponent implements OnInit {

  players: Player[];

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe((players: any) => {
      const mostHomeRuns = players.sort((a,b) => b.numOfHomeRuns-a.numOfHomeRuns)[0];
      this.players = [mostHomeRuns];
    })
  }

  deletePlayer(id: string) {
    this.playersService.deletePlayer(id).subscribe((player: Player) => {
      this.ngOnInit(); //have to force reload to make deleted object no longer render
      console.log(player);
    });
  }
}
