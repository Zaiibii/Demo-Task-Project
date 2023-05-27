import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContentHeaderComponent } from './card-content-header.component';

describe('CardContentHeaderComponent', () => {
  let component: CardContentHeaderComponent;
  let fixture: ComponentFixture<CardContentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardContentHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
