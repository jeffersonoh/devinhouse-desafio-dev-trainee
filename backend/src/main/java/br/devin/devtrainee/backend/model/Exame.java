package br.devin.devtrainee.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="exame_table")
public class Exame {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Getter @Setter private Long idExame;
	@Getter @Setter private String nome;
	
	public Exame() {
	}
	
	public Exame(String nome) {
		this.nome=nome;
	}
}
