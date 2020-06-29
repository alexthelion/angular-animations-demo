import {Component, Input, OnInit} from '@angular/core';
import {animate, keyframes, query, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  animations: [
    trigger('changeState', [
      state('swipeRight', style({
        transform: 'translateX(50px)'
      })),
      state('swipeLeft', style({
        transform: 'translateX(0)'
      })),
      transition('*=>swipeRight', animate('200ms')),
      transition('*=>swipeLeft', animate('400ms'))
    ])
  ]
})
export class ListItemComponent implements OnInit {

  @Input() value: string;
  swipeDirection: string;

  constructor() { }

  ngOnInit(): void {
  }

  changeState(state: string): void {
    this.swipeDirection = state;
  }

}
