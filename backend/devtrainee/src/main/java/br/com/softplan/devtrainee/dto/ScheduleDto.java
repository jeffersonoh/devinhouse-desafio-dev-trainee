package br.com.softplan.devtrainee.dto;

import java.io.Serializable;
import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.softplan.devtrainee.entity.ClientEntity;
import br.com.softplan.devtrainee.entity.MedicalExamEntity;
import br.com.softplan.devtrainee.entity.ScheduleEntity;

public class ScheduleDto implements Serializable {

	private static final long serialVersionUID = 5845175717988871532L;
	Long id;
	ClientEntity client;
	MedicalExamEntity medicalExam;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat(iso = ISO.DATE_TIME)
	private LocalDateTime scheduledDateTime;

	public ScheduleDto() {

	}

	public ScheduleDto(Long id, ClientEntity client, MedicalExamEntity medicalExam, LocalDateTime scheduledDateTime) {
		super();
		this.id = id;
		this.client = client;
		this.medicalExam = medicalExam;
		this.scheduledDateTime = scheduledDateTime;
	}

	public ScheduleDto(ScheduleEntity schedule) {
		this.id = schedule.getId();
		this.client = schedule.getClient();
		this.medicalExam = schedule.getExam();
		this.scheduledDateTime = schedule.getScheduledDateTime();

	}

	public LocalDateTime getScheduledDateTime() {
		return scheduledDateTime;
	}

	public void setScheduledDateTime(LocalDateTime scheduledDateTime) {
		this.scheduledDateTime = scheduledDateTime;
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
