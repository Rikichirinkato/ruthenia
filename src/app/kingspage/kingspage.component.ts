import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kingspage',
  templateUrl: './kingspage.component.html',
  styleUrls: ['./kingspage.component.css']
})
export class KingspageComponent implements OnInit {
  princes = [];

  ngOnInit() {
    fetch('../assets/data.json')
      .then( response => response.json())
      .then( response => response.rulers.forEach( item => this.princes.push(item)));
  }

  constructor() { }

}
