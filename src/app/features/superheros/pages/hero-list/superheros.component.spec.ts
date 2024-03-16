import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperherosComponent } from './superheros.component';

describe('SuperherosComponent', () => {
  let component: SuperherosComponent;
  let fixture: ComponentFixture<SuperherosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperherosComponent]
    });
    fixture = TestBed.createComponent(SuperherosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
