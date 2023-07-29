import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamento/criar-pensamento/criar-pensamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from './componentes/pensamento/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './componentes/pensamento/pensamento/pensamento.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirPensamentoComponent } from './componentes/pensamento/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamento/editar-pensamento/editar-pensamento.component';
import { BotaoCarregarMaisComponent } from './componentes/pensamento/listar-pensamento/botao-carregar-mais/botao-carregar-mais.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamentoComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent,
    BotaoCarregarMaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
