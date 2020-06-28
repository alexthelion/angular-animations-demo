import {Component, Input, OnInit} from '@angular/core';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  animations: [
    trigger('slideRight', [
      transition('* => slideRight', animate(100, keyframes([
          style({ left: '*', offset: 0 }),
          style({ left: '0', offset: 1 }),
        ])
      ))
    ])
  ]
})
export class ListItemComponent implements OnInit {

  @Input() value: string;
  swipeRight = false;

  constructor() { }

  ngOnInit(): void {
  }

}
