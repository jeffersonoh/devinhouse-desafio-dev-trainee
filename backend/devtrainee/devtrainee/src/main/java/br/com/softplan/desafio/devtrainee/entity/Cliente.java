package br.com.softplan.desafio.devtrainee.entity;

import br.com.softplan.desafio.devtrainee.dto.ClienteDTO;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "cliente")
public class Cliente implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;
    @Column(nullable = false)
    private String nome;
    @Column(nullable = false, unique = true)
    private String CPF;
    @JsonFormat(pattern = "dd/MM/yyyy")
    @Column(nullable = false)
    private LocalDate dataDeNascimento;

    public Cliente() {
    }

    public Cliente(String nome, String CPF, LocalDate dataDeNascimento) {
        this.nome = nome;
        this.CPF = CPF;
        this.dataDeNascimento = dataDeNascimento;
    }

    public Cliente(Long id, String nome, String CPF, LocalDate dataDeNascimento) {
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

    public Cliente toDTO(ClienteDTO clienteDTO) {
        Cliente res = new Cliente(clienteDTO.getId(), clienteDTO.getNome(), clienteDTO.getCPF(), clienteDTO.getDataDeNascimento());
        return res;
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