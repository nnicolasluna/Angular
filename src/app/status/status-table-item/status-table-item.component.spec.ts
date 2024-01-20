import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTableItemComponent } from './status-table-item.component';

describe('StatusTableItemComponent', () => {
  let component: StatusTableItemComponent;
  let fixture: ComponentFixture<StatusTableItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusTableItemComponent]
    });
    fixture = TestBed.createComponent(StatusTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
