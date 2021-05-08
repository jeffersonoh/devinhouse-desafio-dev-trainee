package br.com.softplan.desafio.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

//@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id")
@Entity
public class Consulta implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate data;

    private LocalTime hora;

    // Owner da relação
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_cliente")
    private Cliente cliente;

    // Owner da relação
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_exame")
    private Exame exame;

    public Consulta() {}

    public Consulta(String data, String hora, Exame exame) {
        this.data = LocalDate.parse(data);
        this.hora = LocalTime.parse(hora);
        this.exame = exame;
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

    public LocalTime getHora() {
        return hora;
    }

    public void setHora(LocalTime hora) {
        this.hora = hora;
    }

    @JsonIgnore
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

    public void atualizarDados(Consulta dadosNovos) {
        if (dadosNovos.getData() != null) setData(dadosNovos.getData());
        if (dadosNovos.getHora() != null) setHora(dadosNovos.getHora());
    }

    @Override
    public String toString() {
        return "Consulta{" + "id=" + id + ", data=" + data + ", hora=" + hora + ", cliente=" + cliente.getId() + ", exame=" + exame + '}';
//        return "Consulta{" + "id=" + id + ", data=" + data + ", hora=" + hora + ", cliente=" + cliente + ", exame=" + exame + '}';
    }

}
