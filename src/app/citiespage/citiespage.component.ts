import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {CityItemComponent} from './city-item/city-item.component';

@Component({
  selector: 'app-citiespage',
  templateUrl: './citiespage.component.html',
  styleUrls: ['./citiespage.component.css']
})
export class CitiespageComponent {

  objectKeys = Object.keys;

  constructor(public dialog: MatDialog) { }

  public citiesList = {
    Galicia: {
      Halych: {
        name: 'Halych',
        found: 9
      },
      Lviv: {
        name: 'Lviv',
        found: 13
      },
      Peremyshyl: {
        name: 'Peremyshyl',
        found: 9
      },
    },
    Volyn: {
      Volodymyr: {
        name: 'Volodymyr',
        found: 10
      },
      Lutsk: {
        name: 'Lutsk',
        found: 11
      }
    },
    Kyiv: {
      Kyiv: {
        name: 'Kyiv',
        found: 5
      },
      Istkorosten: {
        name: 'Istkorosten',
        found: 8
      }
    },
    Turov: {
      Turov: {
        name: 'Turov',
        found: 10
      },
      Pinsk: {
        name: 'Pinsk',
        found: 8
      }
    }
  };

  openCity(town, key): void {
    const dialogRef = this.dialog.open(CityItemComponent, {
      width: '400px',
      height: '400px',
      data: { city: town, key: key, info: this.citiesList }
    });
  }

}
