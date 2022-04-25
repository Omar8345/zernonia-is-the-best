import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() game: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  get tags() {
    return this.game.tags.join(', ');
  }

  get hasWindows() {
    return (this.game.platforms as any[]).includes('Windows');
  }

  get hasLinux() {
    return (this.game.platforms as any[]).includes('Linux');
  }

  get hasMac() {
    return (this.game.platforms as any[]).includes('Mac');
  }
}
