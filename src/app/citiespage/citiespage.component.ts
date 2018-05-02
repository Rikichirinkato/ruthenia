import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {CityItemComponent} from './city-item/city-item.component';

@Component({
  selector: 'app-citiespage',
  templateUrl: './citiespage.component.html',
  styleUrls: ['./citiespage.component.css']
})
export class CitiespageComponent implements OnInit {

  objectKeys = Object.keys;

  constructor(public dialog: MatDialog) { }

  public cities: Object;
  ngOnInit () {
    fetch('../assets/data.json')
      .then( response => response.json())
      .then( response => this.cities = Object.assign({}, response.citiesList));
  }

  openCity(town, key): void {
    const dialogRef = this.dialog.open(CityItemComponent, {
      width: '400px',
      height: '400px',
      data: { city: town, key: key, info: this.cities }
    });
  }

}
