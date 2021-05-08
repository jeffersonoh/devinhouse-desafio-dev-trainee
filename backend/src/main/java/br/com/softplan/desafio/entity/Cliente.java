package br.com.softplan.desafio.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Cliente implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Column(unique = true)
    private String cpf;

    private LocalDate dataNascimento;

    // Non-Owner da relação
    @OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Consulta> consultasAgendadas;

    public Cliente() { }

    public Cliente(String nome, String cpf, String dataNascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = LocalDate.parse(dataNascimento);
        this.consultasAgendadas = new ArrayList<Consulta>();
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

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public List<Consulta> getConsultasAgendadas() {
        return consultasAgendadas;
    }

    public void setConsultasAgendadas(List<Consulta> consultasAgendadas) {
        this.consultasAgendadas = consultasAgendadas;
    }

    public Consulta buscarConsultaPeloID(Long id) {
        return this.consultasAgendadas.stream().filter(c -> c.getId().equals(id)).findFirst().orElse(null);
    }

    public void adicionarConsulta(Consulta consulta) {
        consulta.setCliente(this);
        this.consultasAgendadas.add(consulta);
    }

    public void removerConsulta(Consulta consulta) {
        this.consultasAgendadas.remove(consulta);
    }

    public void atualizarConsulta(Consulta consulta, Consulta dadosNovos) {
        consulta.atualizarDados(dadosNovos);
    }

    @Override
    public String toString() {
        return "Cliente{" + "id=" + id + ", nome='" + nome + '\'' + ", cpf='" + cpf + '\'' + ", dataNascimento=" + dataNascimento + ", consultasAgendadas=" + consultasAgendadas + '}';
    }

}
