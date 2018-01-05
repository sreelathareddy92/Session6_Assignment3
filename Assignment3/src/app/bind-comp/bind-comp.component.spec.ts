import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindCompComponent } from './bind-comp.component';

describe('BindCompComponent', () => {
  let component: BindCompComponent;
  let fixture: ComponentFixture<BindCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
