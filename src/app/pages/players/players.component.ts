import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/player.model';
import { PlayersService } from 'src/app/shared/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players!: Player[];

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe((players: any) => {
      this.players = players;
    })
  }

  deletePlayer(id: string) {
    this.playersService.deletePlayer(id).subscribe((player: Player) => {
      this.ngOnInit(); //have to force reload to make deleted object no longer render
      console.log(player);
    });
  }
}
