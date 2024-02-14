import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRosaButtonComponent } from './card-rosa-button.component';

describe('CardRosaButtonComponent', () => {
  let component: CardRosaButtonComponent;
  let fixture: ComponentFixture<CardRosaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardRosaButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardRosaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
