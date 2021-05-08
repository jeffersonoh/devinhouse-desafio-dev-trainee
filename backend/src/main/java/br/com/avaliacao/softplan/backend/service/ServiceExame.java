package br.com.avaliacao.softplan.backend.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.avaliacao.softplan.backend.entity.Exame;
import br.com.avaliacao.softplan.backend.repository.RepositoryExame;

@Service
@Transactional
public class ServiceExame {
	
	@Autowired
	private RepositoryExame repository;
	
	public boolean nomeEstaCadastrado(String nome) {
		return repository.findByNome(nome).isPresent();
	}
	
	public boolean exameEstaCadastrado(Exame exame) {
		return repository.findByNome(exame.getNome()).isPresent();
	}
	
	public ResponseEntity<?> cadastrarExame(Exame exame) {
		if(exameEstaCadastrado(exame)) {
			return new ResponseEntity<>("{\n   Exame já cadastrado\n}", HttpStatus.BAD_REQUEST);
		}
		repository.save(exame);
		return new ResponseEntity<>("{\n   Exame cadastrado com sucesso\n}", HttpStatus.OK);
	}
	
	public ResponseEntity<?> buscarTodosOsExames() {
		if (repository.findAll().isEmpty()) {
			return new ResponseEntity<>("{\n   Nenhum exame cadastrado\n}", HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
	}
	
	public ResponseEntity<?> buscarExamePorNome(String nome) {
		if (nomeEstaCadastrado(nome)) {
			return new ResponseEntity<>(repository.findByNome(nome), HttpStatus.OK);
		}
		return new ResponseEntity<>("Exame não encontrado", HttpStatus.BAD_REQUEST);
	}
	
	public ResponseEntity<?> deletarExame(String nome) {
		if (nomeEstaCadastrado(nome)) {
			repository.deleteByNome(nome);
			return new ResponseEntity<>("{\n   Exame deletado com sucesso \n}", HttpStatus.OK);
		}
		return new ResponseEntity<>("{\n   Exame não cadastrado \n}", HttpStatus.BAD_REQUEST);
	}
	
	public ResponseEntity<?> atualizarExame(String nomeSalvo, Exame exame) {
		if (nomeEstaCadastrado(nomeSalvo)) {
			repository.atualizarExame(exame.getNome(), nomeSalvo);
			return new ResponseEntity<>("Atualizado com sucesso", HttpStatus.OK);
		}
		return new ResponseEntity<>("Não atualizado", HttpStatus.BAD_REQUEST);
	}
}
