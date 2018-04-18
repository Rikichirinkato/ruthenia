import {Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {

  objectKeys = Object.keys;

  constructor(
    public dialogRef: MatDialogRef<CityItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    const found = this.objectKeys(this.data.info[this.data.key][this.data.city])[1];
    const whenFound = this.data.info[this.data.key][this.data.city][found];
    return whenFound;
  }

  close(): void {
    this.dialogRef.close();
  }

}
