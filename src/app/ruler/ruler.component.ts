import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ruler',
  templateUrl: './ruler.component.html',
  styleUrls: ['./ruler.component.css']
})
export class RulerComponent implements OnInit {   
  @Input() ruler
    
  constructor() { }

  ngOnInit() {
  }

}
