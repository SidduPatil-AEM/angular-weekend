import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalapiComponent } from './localapi.component';

describe('LocalapiComponent', () => {
  let component: LocalapiComponent;
  let fixture: ComponentFixture<LocalapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
