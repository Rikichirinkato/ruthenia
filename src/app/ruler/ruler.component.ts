import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material';
import {RulerItemComponent} from './ruler-item/ruler-item.component';

@Component({
  selector: 'app-ruler',
  templateUrl: './ruler.component.html',
  styleUrls: ['./ruler.component.css']
})
export class RulerComponent {
  @Input() ruler: any;

  constructor(public dialog: MatDialog) {}

  rulerItem(): void{
    const dialogRef = this.dialog.open(RulerItemComponent, {
      width: '500px',
      height: '850px',
      data: { ruler: this.ruler}
    });
  }

}
