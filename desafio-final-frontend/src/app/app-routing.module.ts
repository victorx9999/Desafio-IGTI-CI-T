import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcompanharPedidoComponent } from './acompanhar-pedido/acompanhar-pedido.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { GerenciarPedidoComponent } from './gerenciar-pedido/gerenciar-pedido.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
  { path: "cardapio", component: CardapioComponent },
  { path: "pedido", component: PedidoComponent },
  { path: "pedidos/:id", component: AcompanharPedidoComponent },
  { path: "gerenciar_pedido", component: GerenciarPedidoComponent},
  { path: "", redirectTo: "cardapio", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
