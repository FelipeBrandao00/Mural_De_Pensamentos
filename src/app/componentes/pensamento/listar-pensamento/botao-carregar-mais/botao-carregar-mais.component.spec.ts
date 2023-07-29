import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCarregarMaisComponent } from './botao-carregar-mais.component';

describe('BotaoCarregarMaisComponent', () => {
  let component: BotaoCarregarMaisComponent;
  let fixture: ComponentFixture<BotaoCarregarMaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoCarregarMaisComponent]
    });
    fixture = TestBed.createComponent(BotaoCarregarMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
