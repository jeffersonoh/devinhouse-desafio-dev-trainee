package br.com.softplan.desafio.devtrainee.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public class AgendamentoDTO{
    private Long id;
    private String clienteCPF;
    private String exameNome;
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private LocalDateTime dataEHoraDoAgendamento;

    public AgendamentoDTO() {
    }

    public AgendamentoDTO(String clienteCPF, String exameNome, LocalDateTime dataEHoraDoAgendamento) {
        this.clienteCPF = clienteCPF;
        this.exameNome = exameNome;
        this.dataEHoraDoAgendamento = dataEHoraDoAgendamento;
    }

    public AgendamentoDTO(Long id, String clienteCPF, String exameNome, LocalDateTime dataEHoraDoAgendamento) {
        this.id = id;
        this.clienteCPF = clienteCPF;
        this.exameNome = exameNome;
        this.dataEHoraDoAgendamento = dataEHoraDoAgendamento;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getClienteCPF() {
        return clienteCPF;
    }

    public void setCliente_id(String clienteCPF) {
        this.clienteCPF = clienteCPF;
    }

    public String getExameNome() {
        return exameNome;
    }

    public void setExame(String exameNome) {
        this.exameNome = exameNome;
    }

    public LocalDateTime getDataEHoraDoAgendamento() {
        return dataEHoraDoAgendamento;
    }

    public void setDataEHoraDoAgendamento(LocalDateTime dataEHoraDoAgendamento) {
        this.dataEHoraDoAgendamento = dataEHoraDoAgendamento;
    }
}
