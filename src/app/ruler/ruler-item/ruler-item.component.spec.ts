import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulerItemComponent } from './ruler-item.component';

describe('RulerItemComponent', () => {
  let component: RulerItemComponent;
  let fixture: ComponentFixture<RulerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
