import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IccListComponent } from './icc-list.component';

describe('IccListComponent', () => {
  let component: IccListComponent;
  let fixture: ComponentFixture<IccListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IccListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IccListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
