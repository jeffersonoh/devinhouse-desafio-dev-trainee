package br.com.avaliacao.softplan.backend.service;

import java.util.Optional;

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
	
	public ResponseEntity<?> atualizarExame(String nome, Exame exame) {
		if (nomeEstaCadastrado(nome)) {
			Optional<Exame> exameCadastradoValue = repository.findByNome(nome);
			Exame exameCadastrado = exameCadastradoValue.get();
			exame.setIdExame(exameCadastrado.getIdExame());
			repository.save(exame);
			return new ResponseEntity<>("{\n   Exame atualizado com sucesso\n}", HttpStatus.OK);
		}
		return new ResponseEntity<>("{\n   Exame não encontrado, por favor, digite um exame cadastrado\n}", HttpStatus.BAD_REQUEST);
	}
}
