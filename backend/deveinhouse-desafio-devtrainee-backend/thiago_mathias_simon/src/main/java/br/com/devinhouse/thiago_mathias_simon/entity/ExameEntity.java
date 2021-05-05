package br.com.devinhouse.thiago_mathias_simon.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;

@Entity(name = "EXAME")
public class ExameEntity {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private long id;
    private String examName;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getExamName() {
        return examName;
    }

    public void setExamName(String examName) {
        this.examName = examName;
    }
}
