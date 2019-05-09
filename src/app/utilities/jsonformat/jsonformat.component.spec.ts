import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonformatComponent } from './jsonformat.component';

describe('JsonformatComponent', () => {
  let component: JsonformatComponent;
  let fixture: ComponentFixture<JsonformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
