import { Component, Inject } from '@angular/core';
import{MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-ruler-item',
  templateUrl: './ruler-item.component.html',
  styleUrls: ['./ruler-item.component.css']
})
export class RulerItemComponent {

  constructor(
    public dialogRef: MatDialogRef<RulerItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  close(){
    this.dialogRef.close();
  }

}
