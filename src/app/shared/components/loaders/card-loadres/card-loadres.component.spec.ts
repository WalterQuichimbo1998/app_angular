import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLoadresComponent } from './card-loadres.component';

describe('CardLoadresComponent', () => {
  let component: CardLoadresComponent;
  let fixture: ComponentFixture<CardLoadresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLoadresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLoadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
