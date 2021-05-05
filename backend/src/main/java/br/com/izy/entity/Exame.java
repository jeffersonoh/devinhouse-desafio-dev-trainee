package br.com.izy.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import br.com.izy.dto.ExameDTOInput;

@Entity
@Table(name = "exames")
public class Exame implements Serializable {
	
	private static final long serialVersionUID = -5794741417693198243L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	
	public Exame() {
		
	}
	
	public Exame(String nome) {
		super();
		this.nome = nome;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public Exame converteExameDTO(ExameDTOInput exameDTO) {
		Exame result = new Exame(exameDTO.getNome());
		
		return result;
	}
	
}
