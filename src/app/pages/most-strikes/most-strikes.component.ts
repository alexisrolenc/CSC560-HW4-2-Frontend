import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/player.model';
import { PlayersService } from 'src/app/shared/players.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-most-strikes',
  templateUrl: './most-strikes.component.html',
  styleUrls: ['./most-strikes.component.scss']
})
export class MostStrikesComponent implements OnInit {

  players: Player[];

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe((players: any) => {
      const mostStrikes = players.sort((a,b) => b.numOfStrikes-a.numOfStrikes)[0];
      this.players = [mostStrikes];
    })
  }

  deletePlayer(id: string) {
    this.playersService.deletePlayer(id).subscribe((player: Player) => {
      this.ngOnInit(); //have to force reload to make deleted object no longer render
      console.log(player);
    });
  }
}
