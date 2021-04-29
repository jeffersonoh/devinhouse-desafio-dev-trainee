package br.com.softplan.desafio.devtrainee.dto;

import br.com.softplan.desafio.devtrainee.entity.Cliente;


import java.time.LocalDate;


public class ClienteDTO {

    private Long id;
    private String nome;
    private String CPF;
    private LocalDate dataDeNascimento;


    public ClienteDTO() {
    }

    public ClienteDTO(Cliente cliente) {
        this.id = cliente.getId();
        this.nome = cliente.getNome();
        this.CPF = cliente.getCPF();
        this.dataDeNascimento = cliente.getDataDeNascimento();
    }

    public ClienteDTO(String nome, String CPF, LocalDate dataDeNascimento) {
        this.nome = nome;
        this.CPF = CPF;
        this.dataDeNascimento = dataDeNascimento;
    }

    public ClienteDTO(Long id, String nome, String CPF, LocalDate dataDeNascimento) {
        this.id = id;
        this.nome = nome;
        this.CPF = CPF;
        this.dataDeNascimento = dataDeNascimento;
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

    public String getCPF() {
        return CPF;
    }

    public void setCPF(String CPF) {
        this.CPF = CPF;
    }

    public LocalDate getDataDeNascimento() {
        return dataDeNascimento;
    }

    public void setDataDeNascimento(LocalDate dataDeNascimento) {
        this.dataDeNascimento = dataDeNascimento;
    }

    @Override
    public String
    toString() {
        return "Cliente{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", CPF='" + CPF + '\'' +
                ", dataDeNascimento=" + dataDeNascimento +
                '}';
    }
}
