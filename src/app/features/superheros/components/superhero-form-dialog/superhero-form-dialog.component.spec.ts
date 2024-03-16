import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroFormDialogComponent } from './superhero-form-dialog.component';

describe('SuperheroFormDialogComponent', () => {
  let component: SuperheroFormDialogComponent;
  let fixture: ComponentFixture<SuperheroFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroFormDialogComponent]
    });
    fixture = TestBed.createComponent(SuperheroFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
