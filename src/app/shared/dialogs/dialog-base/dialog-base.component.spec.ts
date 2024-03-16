import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBaseComponent } from './dialog-base.component';

describe('DialogBaseComponent', () => {
  let component: DialogBaseComponent;
  let fixture: ComponentFixture<DialogBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogBaseComponent]
    });
    fixture = TestBed.createComponent(DialogBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
