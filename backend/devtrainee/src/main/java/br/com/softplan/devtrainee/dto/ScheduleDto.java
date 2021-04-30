package br.com.softplan.devtrainee.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.softplan.devtrainee.entity.ClientEntity;
import br.com.softplan.devtrainee.entity.MedicalExamEntity;

public class ScheduleDto implements Serializable {

	private static final long serialVersionUID = 5845175717988871532L;
	Long id;
	ClientEntity client;
	MedicalExamEntity medicalExam;
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate scheduledDate;
	@JsonFormat(pattern = "hh:mm:ss a")
	private LocalTime scheduleTime;

	public ScheduleDto() {

	}

	public ScheduleDto(Long id, ClientEntity client,
			MedicalExamEntity medicalExam, LocalDate scheduledDate, LocalTime scheduleTime) {
		super();
		this.id = id;
		this.client = client;
		this.medicalExam = medicalExam;
		this.scheduledDate = scheduledDate;
		this.scheduleTime = scheduleTime;
	}

	public LocalDate getScheduledDate() {
		return scheduledDate;
	}

	public void setScheduledDate(LocalDate scheduledDate) {
		this.scheduledDate = scheduledDate;
	}

	public LocalTime getScheduleTime() {
		return scheduleTime;
	}

	public void setScheduleTime(LocalTime scheduleTime) {
		this.scheduleTime = scheduleTime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ClientEntity getClient() {
		return client;
	}

	public void setClient(ClientEntity client) {
		this.client = client;
	}

	public MedicalExamEntity getMedicalExam() {
		return medicalExam;
	}

	public void setMedicalExam(MedicalExamEntity medicalExam) {
		this.medicalExam = medicalExam;
	}

}
