import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido/pedido.service';

@Component({
  selector: 'app-gerenciar-pedido',
  templateUrl: './gerenciar-pedido.component.html',
  styles: [
  ]
})
export class GerenciarPedidoComponent implements OnInit {

  constructor(private httpClient: HttpClient, private pedidoServico: PedidoService, private router: Router,
    private route: ActivatedRoute) { }

  pedidos: any;
  ngOnInit(): void {
    this.httpClient.get<Pedido>("http://localhost:8080/pedidos").subscribe(pedido => {
      this.pedidos = pedido
      console.log(pedido)
    })
  }

  


}
