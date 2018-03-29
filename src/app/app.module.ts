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

const routes = [
    {
        path:'',
        component: HomepageComponent
    },{
        path: 'kings',
        component: KingspageComponent
    },{
        path: 'cities',
        component: CitiespageComponent
    },{
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
    HoverDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
