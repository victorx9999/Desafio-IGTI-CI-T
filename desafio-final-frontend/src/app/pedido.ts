import { Produto } from "./produto";

export interface Pedido {
  id: number,
  dataHora: string,
  situacao: string,
  itens: ItemPedido[]
}

export interface ItemPedido {
  produto: Produto;
  quantidade: number;
}
