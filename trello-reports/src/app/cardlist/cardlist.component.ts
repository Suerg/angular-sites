import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  public name: string = 'List 1';

  constructor() {
  }

  ngOnInit() {
  }

}
