import { Injectable } from '@angular/core';
import { Player } from './player.model'
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private webReqService: WebRequestService) { }


  getPlayers() {
    return this.webReqService.get('players');
  }

  getOnePlayer(id: string){
    return this.webReqService.get(`players/${id}`)
  }

  addPlayer(player: Player) {
    return this.webReqService.post('players', player);
  }

  updatePlayer(id: string, firstName: string, lastName: string, numOfOuts: number, numOfWalks: number, numOfHomeRuns: number, numOfStrikes: number, avgBatSpeed: number) {
    let player = {
      firstName,
      lastName,
      numOfOuts,
      numOfWalks,
      numOfHomeRuns,
      numOfStrikes,
      avgBatSpeed
    }
    return this.webReqService.patch(`players/${id}`, player);
  }

  deletePlayer(id: string) {
    return this.webReqService.delete(`players/${id}`);
  }
}
