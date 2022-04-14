package igti.desafio.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import igti.desafio.modelo.Pedido;
import igti.desafio.repository.PedidoRepository;

@RestController
@Transactional
public class PedidoController {

	@Autowired
	private PedidoRepository pedidoRepository;
	
	@PostMapping("/pedidos")
	public Pedido realizaPedido(@RequestBody PedidoDto dadosPedido) {
		Pedido pedido = new Pedido();
		pedido.setDataHora(LocalDateTime.now());
		pedido.setSituacao(Pedido.SITUACAO_AGUARDANDO);
		pedido.setItens(dadosPedido.getItens());
		return pedidoRepository.save(pedido);
	}
	
	@GetMapping("/pedidos")
	public List<Pedido> listaProdutos() {
		return pedidoRepository.findAll();
	}

	@GetMapping(value = "pedidos/{id}")
	public Optional<Pedido> listByID(@PathVariable int id) {
		Optional<Pedido> pedido = pedidoRepository.findById(id);

		return pedido;
	}

	@PutMapping(value = "pedidos/{id}")
	public ResponseEntity<Object> atualizarPedido(@PathVariable int id, @RequestBody Pedido pedido){
		Optional<Pedido> pedidoDados = pedidoRepository.findById(id);

		if(!pedidoDados.isPresent())
				return ResponseEntity.notFound().build();
		pedido.setSituacao(pedido.getSituacao());

		pedidoRepository.save(pedido);

		return ResponseEntity.noContent().build();
	}

}
