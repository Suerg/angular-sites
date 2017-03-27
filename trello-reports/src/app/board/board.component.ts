import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public name: string = 'Board 1';

  constructor() { }

  ngOnInit() {
  }

}
