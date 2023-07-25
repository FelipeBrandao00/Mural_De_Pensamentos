import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [];

  constructor(private Service: PensamentoService) {}

  ngOnInit(): void {
    this.Service.listar().subscribe(
      (listaPensamentos) => (this.listaPensamentos = listaPensamentos)
    );
  }
}
