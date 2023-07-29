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
  haMaisPensamentos: boolean = true;
  paginaAtual: number = 1;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu mural';

  constructor(private Service: PensamentoService) {}

  carregarMaisPensamentos() {
    this.Service.listar(
      ++this.paginaAtual,
      this.filtro,
      this.favoritos
    ).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos);
      if (!listaPensamentos.length) this.haMaisPensamentos = false;
    });
  }

  ngOnInit(): void {
    this.Service.listar(
      this.paginaAtual,
      this.filtro,
      this.favoritos
    ).subscribe(
      (listaPensamentos) => (this.listaPensamentos = listaPensamentos)
    );
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.Service.listar(
      this.paginaAtual,
      this.filtro,
      this.favoritos
    ).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  ListarFavoritos() {
    this.titulo = 'Meus Favoritos';
    this.haMaisPensamentos = true;
    this.favoritos = true;
    this.paginaAtual = 1;
    this.Service.listar(
      this.paginaAtual,
      this.filtro,
      this.favoritos
    ).subscribe((listaPensamentoFav) => {
      this.listaPensamentos = listaPensamentoFav;
      this.listaFavoritos = listaPensamentoFav;
    });
  }

  recarregarComponente() {
    this.titulo = 'Meu Mural';
    this.haMaisPensamentos = true;
    this.favoritos = false;
    this.paginaAtual = 1;
    this.Service.listar(
      this.paginaAtual,
      this.filtro,
      this.favoritos
    ).subscribe((listaPensamentoFav) => {
      this.listaPensamentos = listaPensamentoFav;
    });
  }
}
