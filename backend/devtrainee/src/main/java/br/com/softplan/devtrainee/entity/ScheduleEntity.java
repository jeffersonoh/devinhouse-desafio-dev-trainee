package br.com.softplan.devtrainee.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.softplan.devtrainee.dto.ScheduleDto;

@Entity(name = "Schedule")
@Table(name = "SCHEDULE", uniqueConstraints = @UniqueConstraint(columnNames = { "id" }))

public class ScheduleEntity implements Serializable {

	private static final long serialVersionUID = -2442767014117319199L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(optional = false)
	@JoinColumn(name = "client", referencedColumnName = "cpf")
	private ClientEntity client;

	@ManyToOne(optional = false)
	@JoinColumn(name = "medicalExam", referencedColumnName = "typeOfExam")
	private MedicalExamEntity exam;

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat(iso = ISO.DATE_TIME)
	private LocalDateTime scheduledDateTime;

	public ScheduleEntity() {
	}

	public ScheduleEntity(Long id, ClientEntity client, MedicalExamEntity exam, LocalDateTime scheduledDateTime) {
		super();
		this.id = id;
		this.client = client;
		this.exam = exam;
		this.scheduledDateTime = scheduledDateTime;
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

	public MedicalExamEntity getExam() {
		return exam;
	}

	public void setExam(MedicalExamEntity exam) {
		this.exam = exam;
	}

	public ScheduleEntity converterDto(ScheduleDto schedule) {
		ScheduleEntity result = new ScheduleEntity(schedule.getId(), schedule.getClient(), schedule.getMedicalExam(),
				schedule.getScheduledDateTime());

		return result;
	}

}
