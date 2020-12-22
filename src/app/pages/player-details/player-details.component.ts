import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Player } from 'src/app/shared/player.model';
import { PlayersService } from 'src/app/shared/players.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  player: Player;
  playerId: string;
  new: boolean;

  constructor(private playersService: PlayersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.player = new Player();
        if (params._id) {
          this.playerId = params._id;
          this.getOnePlayer(this.playerId);
          this.new = false;
      } else {
          this.new = true;
      }
    });
  }

  onSubmit(form: NgForm) {
    if(this.new){
      this.addPlayer(form.value);
    } else {
      this.updatePlayer(this.playerId, form.value.firstName, form.value.lastName, form.value.numOfOuts, form.value.numOfWalks, form.value.numOfHomeRuns, form.value.numOfStrikes, form.value.avgBatSpeed);
    }
    this.router.navigateByUrl('/');
  }

  addPlayer(newPlayer) {
    this.playersService.addPlayer(newPlayer).subscribe((player: Player) => {
      console.log(player);
    });
  }

  updatePlayer(id, firstName, lastName, numOfOuts, numOfWalks, numOfHomeRuns, numOfStrikes, avgBatSpeed) {
    this.playersService.updatePlayer(id, firstName, lastName, numOfOuts, numOfWalks, numOfHomeRuns, numOfStrikes, avgBatSpeed).subscribe((player: any) => {
      console.log(player);
    });
  }

  getOnePlayer(id) {
    this.playersService.getOnePlayer(id).subscribe((player: Player) => {
      this.player = player;
      console.log(player);
    });
  }

  cancel(){
    this.router.navigateByUrl('/');
  }
}
