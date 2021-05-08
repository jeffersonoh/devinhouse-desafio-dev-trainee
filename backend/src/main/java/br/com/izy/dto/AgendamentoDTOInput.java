package br.com.izy.dto;

import java.io.Serializable;
import java.time.LocalTime;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class AgendamentoDTOInput implements Serializable {

	private static final long serialVersionUID = -1365481708890266372L;

	@Pattern(regexp = "^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$",
      message = "Data precisa seguir o padrão dd/MM/yyyy")
	@NotNull
	private String data;
	@NotNull
	@JsonFormat(pattern="HH:mm")
	private LocalTime horario;
	@NotNull
	private Long clienteId;
	@NotNull
	private Long exameId;
	
	public AgendamentoDTOInput() {	
	}
	
	public String getData() {
		return data;
	}
	public void setData(String data) {
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
	
}
