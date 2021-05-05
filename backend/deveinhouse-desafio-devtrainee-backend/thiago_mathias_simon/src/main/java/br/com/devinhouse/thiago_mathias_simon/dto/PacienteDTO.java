package br.com.devinhouse.thiago_mathias_simon.dto;

import java.time.Instant;

public class PacienteDTO {

    private long id;
    private String patientName;
    private String patientCpf;
    private String patientBornDate;
    private Instant timestamp = Instant.now();

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

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }
}
