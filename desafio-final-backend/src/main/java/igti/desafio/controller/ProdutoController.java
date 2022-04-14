package igti.desafio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import igti.desafio.modelo.Produto;
import igti.desafio.repository.ProdutoRepository;

@RestController
@Transactional
public class ProdutoController {

	@Autowired
	private ProdutoRepository produtoRepository;
	
	@GetMapping("/cardapio")
	public List<Produto> listaProdutos() {
		return produtoRepository.findAll();
	}
}
