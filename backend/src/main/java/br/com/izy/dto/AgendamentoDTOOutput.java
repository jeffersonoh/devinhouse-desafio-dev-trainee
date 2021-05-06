package br.com.izy.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;

import br.com.izy.entity.Agendamento;
import br.com.izy.entity.Cliente;
import br.com.izy.entity.Exame;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class AgendamentoDTOOutput implements Serializable {

	private static final long serialVersionUID = -1365481708890266372L;

	private Long id;
	@JsonFormat(pattern="dd/MM/yyyy")
	private LocalDate data;
	@JsonFormat(pattern="HH:mm")
	private LocalTime horario;
	private Long clienteId;
	private Long exameId;
	private Cliente cliente;
	private Exame exame;
	
	public AgendamentoDTOOutput() {
		
	}
		
	public AgendamentoDTOOutput(Long id, LocalDate data, LocalTime horario, Long clienteId, Long exameId) {
		this.id = id;
		this.data = data;
		this.horario = horario;
		this.clienteId = clienteId;
		this.exameId = exameId;
	}
	
	public AgendamentoDTOOutput(Agendamento agendamento) {
		this.id = agendamento.getId();
		this.data = agendamento.getData();
		this.horario = agendamento.getHorario();
		this.cliente = agendamento.getCliente();
		this.exame = agendamento.getExame();
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public LocalDate getData() {
		return data;
	}
	public void setData(LocalDate data) {
		this.data = data;
	}
	public LocalTime getHorario() {
		return horario;
	}
	public void setHorario(LocalTime horario) {
		this.horario = horario;
	}
	public Long getClienteId() {
		return clienteId;
	}
	public void setClienteId(Long clienteId) {
		this.clienteId = clienteId;
	}
	public Long getExameId() {
		return exameId;
	}
	public void setExameId(Long exameId) {
		this.exameId = exameId;
	}
	public Cliente getCliente() {
		return cliente;
	}
	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	public Exame getExame() {
		return exame;
	}
	public void setExame(Exame exame) {
		this.exame = exame;
	}
	
}
