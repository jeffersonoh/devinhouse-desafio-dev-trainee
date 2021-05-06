package br.com.devinhouse.thiago_mathias_simon.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;

@Entity(name = "PACIENTE")
public class PacienteEntity {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private long id;
    private String patientName;
    private String patientCpf;
    private String password;
    private String patientBornDate;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getPatientCpf() {
        return patientCpf;
    }

    public void setPatientCpf(String patientCpf) {
        this.patientCpf = patientCpf;
    }

    public String getPatientBornDate() {
        return patientBornDate;
    }

    public void setPatientBornDate(String patientBornDate) {
        this.patientBornDate = patientBornDate;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
