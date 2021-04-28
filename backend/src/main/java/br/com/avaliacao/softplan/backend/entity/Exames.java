package br.com.avaliacao.softplan.backend.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Exames {
	
	@Id
	private Long idExame;
	private String nome;
}
