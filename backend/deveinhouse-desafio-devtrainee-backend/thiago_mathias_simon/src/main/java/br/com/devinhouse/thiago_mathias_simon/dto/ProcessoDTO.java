package br.com.devinhouse.thiago_mathias_simon.dto;

import java.io.Serializable;

public class ProcessoDTO implements Serializable {

	private static final long serialVersionUID = 7887343820631112092L;

	private Integer id;
	private Integer nuProcesso;
	private String chaveProcesso;
	private String sgOrgaoProcesso;
	private String nuAnoProcesso;
	private String descricao;
	private Integer cdAssunto;
	private String descricaoAssunto;
	private Integer cdInteressado;
	private String nmInteressado;

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getNuProcesso() {
		return this.nuProcesso;
	}

	public void setNuProcesso(Integer nuProcesso) {
		this.nuProcesso = nuProcesso;
	}

	public String getChaveProcesso() {
		return this.chaveProcesso;
	}

	public void setChaveProcesso(String chaveProcesso) {
		this.chaveProcesso = chaveProcesso;
	}

	public String getSgOrgaoProcesso() {
		return this.sgOrgaoProcesso;
	}

	public void setSgOrgaoProcesso(String sgOrgaoProcesso) {
		this.sgOrgaoProcesso = sgOrgaoProcesso;
	}

	public String getNuAnoProcesso() {
		return this.nuAnoProcesso;
	}

	public void setNuAnoProcesso(String nuAnoProcesso) {
		this.nuAnoProcesso = nuAnoProcesso;
	}

	public String getDescricao() {
		return this.descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Integer getCdAssunto() {
		return this.cdAssunto;
	}

	public void setCdAssunto(Integer cdAssunto) {
		this.cdAssunto = cdAssunto;
	}

	public String getDescricaoAssunto() {
		return this.descricaoAssunto;
	}

	public void setDescricaoAssunto(String descricaoAssunto) {
		this.descricaoAssunto = descricaoAssunto;
	}

	public Integer getCdInteressado() {
		return this.cdInteressado;
	}

	public void setCdInteressado(Integer cdInteressado) {
		this.cdInteressado = cdInteressado;
	}

	public String getNmInteressado() {
		return this.nmInteressado;
	}

	public void setNmInteressado(String nmInteressado) {
		this.nmInteressado = nmInteressado;
	}

}
