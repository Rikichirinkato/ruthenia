import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { KingspageComponent } from './kingspage/kingspage.component';
import { CitiespageComponent } from './citiespage/citiespage.component';
import { HistorypageComponent } from './historypage/historypage.component';
import { RouterModule } from '@angular/router';
import { RulerComponent } from './ruler/ruler.component';
import { HoverDirective } from './hover.directive';
import { RulerItemComponent } from './ruler/ruler-item/ruler-item.component';
import {MatDialog, MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { CityItemComponent } from './citiespage/city-item/city-item.component';

const routes = [
    {
        path: '',
        component: HomepageComponent
    }, {
        path: 'kings',
        component: KingspageComponent
    }, {
        path: 'cities',
        component: CitiespageComponent
    }, {
        path: 'history',
        component: HistorypageComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    KingspageComponent,
    CitiespageComponent,
    HistorypageComponent,
    RulerComponent,
    HoverDirective,
    RulerItemComponent,
    CityItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RulerItemComponent, CityItemComponent ]
})
export class AppModule { }
