import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  title = 'hactOberFesT communityAPp';
  myName = 'Ramone Hamlett';
  hero = 'Windstorm';

  constructor() { }

  ngOnInit() {
  }

}
