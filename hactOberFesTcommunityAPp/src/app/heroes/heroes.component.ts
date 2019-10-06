import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  listedTitle = "Names Of Hero's";
  items = ['Batman', 'Robin', 'Iron Man', 'Green Lantern',
   'Wonder Woman', 'Captain America'];
  constructor() { }

  ngOnInit() {
  }
}
