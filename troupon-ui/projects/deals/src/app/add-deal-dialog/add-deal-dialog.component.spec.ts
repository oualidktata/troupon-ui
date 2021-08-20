import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDealDialogComponent } from './add-deal-dialog.component';

describe('AddDealDialogComponent', () => {
  let component: AddDealDialogComponent;
  let fixture: ComponentFixture<AddDealDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDealDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDealDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
