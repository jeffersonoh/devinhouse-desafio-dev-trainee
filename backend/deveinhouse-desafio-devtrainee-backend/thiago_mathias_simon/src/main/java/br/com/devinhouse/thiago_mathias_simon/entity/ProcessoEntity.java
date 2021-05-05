package br.com.devinhouse.thiago_mathias_simon.entity;

import org.springframework.context.annotation.Primary;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name = "PROCESSO")
public class ProcessoEntity {

	@Id
	@GeneratedValue(strategy = IDENTITY)
	private long id;
	private Integer nuProcesso;
	private String chaveProcesso;
	private String sgOrgaoProcesso;
	private String nuAnoProcesso;
	private String descricao;
	private Integer cdAssunto;
	private String descricaoAssunto;
	private Integer cdInteressado;
	private String nmInteressado;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Integer getNuProcesso() {
		return nuProcesso;
	}

	public void setNuProcesso(Integer nuProcesso) {
		this.nuProcesso = nuProcesso;
	}

	public String getChaveProcesso() {
		return chaveProcesso;
	}

	public void setChaveProcesso(String chaveProcesso) {
		this.chaveProcesso = chaveProcesso;
	}

	public String getSgOrgaoProcesso() {
		return sgOrgaoProcesso;
	}

	public void setSgOrgaoProcesso(String sgOrgaoProcesso) {
		this.sgOrgaoProcesso = sgOrgaoProcesso;
	}

	public String getNuAnoProcesso() {
		return nuAnoProcesso;
	}

	public void setNuAnoProcesso(String nuAnoProcesso) {
		this.nuAnoProcesso = nuAnoProcesso;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Integer getCdAssunto() {
		return cdAssunto;
	}

	public void setCdAssunto(Integer cdAssunto) {
		this.cdAssunto = cdAssunto;
	}

	public String getDescricaoAssunto() {
		return descricaoAssunto;
	}

	public void setDescricaoAssunto(String descricaoAssunto) {
		this.descricaoAssunto = descricaoAssunto;
	}

	public Integer getCdInteressado() {
		return cdInteressado;
	}

	public void setCdInteressado(Integer cdInteressado) {
		this.cdInteressado = cdInteressado;
	}

	public String getNmInteressado() {
		return nmInteressado;
	}

	public void setNmInteressado(String nmInteressado) {
		this.nmInteressado = nmInteressado;
	}

}