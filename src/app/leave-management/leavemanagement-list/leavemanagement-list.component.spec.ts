import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavemanagementListComponent } from './leavemanagement-list.component';

describe('LeavemanagementListComponent', () => {
  let component: LeavemanagementListComponent;
  let fixture: ComponentFixture<LeavemanagementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavemanagementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavemanagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
