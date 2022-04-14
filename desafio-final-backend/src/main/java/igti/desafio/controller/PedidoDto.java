package igti.desafio.controller;

import java.util.ArrayList;
import java.util.List;

import igti.desafio.modelo.ItemPedido;

public class PedidoDto {

	private List<ItemPedido> itens = new ArrayList<>();

	public List<ItemPedido> getItens() {
		return itens;
	}

	public void setItens(List<ItemPedido> itens) {
		this.itens = itens;
	}
	
}
