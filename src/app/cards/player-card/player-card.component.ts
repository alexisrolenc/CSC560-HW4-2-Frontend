import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() numOfOuts: number;
  @Input() numOfWalks: number;
  @Input() numOfHomeRuns: number;
  @Input() numOfStrikes: number;
  @Input() avgBatSpeed: number;
  @Input() link: string;

  
  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onXButtonClick(){
    this.deleteEvent.emit();
  }

}
