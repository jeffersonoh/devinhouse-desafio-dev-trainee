package br.com.softplan.desafio.devtrainee.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public class AgendamentoDTO{
    private Long id;
    private Long cliente_id;
    private Long exame_id;
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private LocalDateTime dataEHoraDoAgendamento;

    public AgendamentoDTO() {
    }

    public AgendamentoDTO(Long cliente_id, Long exame_id, LocalDateTime dataEHoraDoAgendamento) {
        this.cliente_id = cliente_id;
        this.exame_id = exame_id;
        this.dataEHoraDoAgendamento = dataEHoraDoAgendamento;
    }

    public AgendamentoDTO(Long id, Long cliente_id, Long exame_id, LocalDateTime dataEHoraDoAgendamento) {
        this.id = id;
        this.cliente_id = cliente_id;
        this.exame_id = exame_id;
        this.dataEHoraDoAgendamento = dataEHoraDoAgendamento;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCliente_id() {
        return cliente_id;
    }

    public void setCliente_id(Long cliente_id) {
        this.cliente_id = cliente_id;
    }

    public Long getExame_id() {
        return exame_id;
    }

    public void setExame_id(Long exame_id) {
        this.exame_id = exame_id;
    }

    public LocalDateTime getDataEHoraDoAgendamento() {
        return dataEHoraDoAgendamento;
    }

    public void setDataEHoraDoAgendamento(LocalDateTime dataEHoraDoAgendamento) {
        this.dataEHoraDoAgendamento = dataEHoraDoAgendamento;
    }
}
