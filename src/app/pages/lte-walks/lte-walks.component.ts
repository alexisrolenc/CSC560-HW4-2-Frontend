import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/player.model';
import { PlayersService } from 'src/app/shared/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lte-walks',
  templateUrl: './lte-walks.component.html',
  styleUrls: ['./lte-walks.component.scss']
})
export class LteWalksComponent implements OnInit {

  players: Player[];

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe((players: any) => {
      const lte5Walks = players.filter(player => player.numOfWalks <= 5);
      this.players = lte5Walks;
    })
  }

  deletePlayer(id: string) {
    this.playersService.deletePlayer(id).subscribe((player: Player) => {
      this.ngOnInit(); //have to force reload to make deleted object no longer render
      console.log(player);
    });
  }
}
