import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingspageComponent } from './kingspage.component';

describe('KingspageComponent', () => {
  let component: KingspageComponent;
  let fixture: ComponentFixture<KingspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
