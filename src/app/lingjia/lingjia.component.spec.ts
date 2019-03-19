import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LingjiaComponent } from './lingjia.component';

describe('LingjiaComponent', () => {
  let component: LingjiaComponent;
  let fixture: ComponentFixture<LingjiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LingjiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LingjiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
