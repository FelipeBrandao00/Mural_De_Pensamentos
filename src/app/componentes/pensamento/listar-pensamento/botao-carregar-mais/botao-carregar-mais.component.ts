import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.css'],
})
export class BotaoCarregarMaisComponent {
  @Input() haMaisPensamentos: boolean = false;
  constructor() {}
  ngOnInit(): void {}
}
