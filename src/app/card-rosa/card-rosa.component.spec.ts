import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRosaComponent } from './card-rosa.component';

describe('CardRosaComponent', () => {
  let component: CardRosaComponent;
  let fixture: ComponentFixture<CardRosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardRosaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardRosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
