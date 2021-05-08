package br.com.softplan.desafio.devtrainee.dto;

import br.com.softplan.desafio.devtrainee.entity.Exame;

public class ExameDTO {
    private Long id;
    private String nomeDoExame;

    public ExameDTO() {
    }

    public ExameDTO(Exame exame) {
        this.id = exame.getId();
        this.nomeDoExame = exame.getNomeDoExame();
    }

    public ExameDTO(String nomeDoExame) {
        this.nomeDoExame = nomeDoExame;
    }

    public ExameDTO(Long id, String nomeDoExame) {
        this.id = id;
        this.nomeDoExame = nomeDoExame;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeDoExame() {
        return nomeDoExame;
    }

    public void setNomeDoExame(String nomeDoExame) {
        this.nomeDoExame = nomeDoExame;
    }

    @Override
    public String toString() {
        return "ExameDTO{" +
                "id=" + id +
                ", nomeDoExame='" + nomeDoExame + '\'' +
                '}';
    }
}
