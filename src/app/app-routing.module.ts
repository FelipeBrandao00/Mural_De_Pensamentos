import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamento/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamento/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamento/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamento/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full',
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent,
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent,
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent,
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
