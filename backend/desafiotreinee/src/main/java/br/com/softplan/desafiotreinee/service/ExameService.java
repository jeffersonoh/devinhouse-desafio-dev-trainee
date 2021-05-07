package br.com.softplan.desafiotreinee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.softplan.desafiotreinee.dto.ExameDTO;
import br.com.softplan.desafiotreinee.repository.ExameRepository;

@Service
public class ExameService {

	@Autowired
	private ExameRepository repository;

	private List<ExameDTO> recuperarTodosExames() {
		return repository.findAllExames();
	}

	public List<ExameDTO> recuperarExamesMocados() {
		return recuperarTodosExames();
	}

}