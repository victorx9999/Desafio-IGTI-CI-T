import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido/pedido.service';

@Component({
  selector: 'app-acompanhar-pedido',
  templateUrl: './acompanhar-pedido.component.html',
  styles: [
  ]
})
export class AcompanharPedidoComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router,
    private route: ActivatedRoute, private pedidoService: PedidoService) { }

  id!: number;
  dataHora!: string;
  pedidos: any;
  selected!: string;
  situacao = [
    { situacao: 'Aguardando' },
    { situacao: 'Em preparação' },
    { situacao: 'Saiu para entrega' },
    { situacao: 'Entregue' },
  ];


  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.id = this.route.snapshot.params.id;

      this.pedidoService.findByID(this.route.snapshot.params.id).subscribe(response => {
        this.pedidos = response
        this.dataHora = this.pedidos.dataHora;
        this.selected = this.pedidos.situacao;
      })
    })
  }

  atualizarPedido(): void {
    console.log(this.selected)
    const body = {
      "id": this.id,
      "dataHora": this.dataHora,
      "situacao": this.selected,
      "itens": this.pedidos.itens
    }
    this.pedidoService.atualizarPedido(body).subscribe(() => {

      this.router.navigate(['/gerenciar_pedido'])
    })
  }

}
