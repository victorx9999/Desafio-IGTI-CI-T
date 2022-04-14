import { Pedido } from './../pedido';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../produto';
import { ItemPedido } from '../pedido';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  itens: ItemPedido[] = [];
  id!: number;
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { }

  adicionaProduto(produto: Produto) {
    let item = this.itens.find(item => item.produto.descricao === produto.descricao);
    if (item) {
      item.quantidade++;
    } else {
      this.itens.push({ produto, quantidade: 1 });
    }
  }

  limpaPedido() {
    this.itens = [];
  }

  realizaPedido() {
    this.httpClient.post<Pedido>("http://localhost:8080/pedidos", {
      itens: this.itens
    }).subscribe(pedido => {
      this.router.navigate(['/gerenciar_pedido'])
      this.limpaPedido()
    })
  }

  findByID(id: number) {
    const url = `http://localhost:8080/pedidos/${id}`
    return this.httpClient.get<[]>(url)
  }

  atualizarPedido(pedido: Pedido): Observable<Pedido> {
    const url = `http://localhost:8080/pedidos/${pedido.id}`
    return this.httpClient.put<Pedido>(url, pedido);
  }

  get valorTotal() {
    let valor = 0;
    for (const item of this.itens) {
      valor += item.produto.preco * item.quantidade;
    }
    return valor;
  }

  get quantidadeTotal() {
    let quantidade = 0;
    for (const item of this.itens) {
      quantidade += item.quantidade;
    }
    return quantidade;
  }


}
