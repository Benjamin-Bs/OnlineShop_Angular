import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsCardsComponent } from './goods-cards.component';

describe('GoodsCardsComponent', () => {
  let component: GoodsCardsComponent;
  let fixture: ComponentFixture<GoodsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoodsCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
