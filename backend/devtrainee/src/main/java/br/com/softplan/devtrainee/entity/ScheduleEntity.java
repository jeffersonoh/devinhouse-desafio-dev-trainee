package br.com.softplan.devtrainee.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.softplan.devtrainee.dto.ScheduleDto;

//import br.com.softplan.devtrainee.dto.ScheduleDto;

@Entity(name = "Schedule")
@Table(
		name="SCHEDULE", 
	    uniqueConstraints=
	        @UniqueConstraint(columnNames={"id"})
	)

public class ScheduleEntity implements Serializable{

	private static final long serialVersionUID = -2442767014117319199L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne(optional = false)
    @JoinColumn(name = "client", referencedColumnName = "cpf")
    private ClientEntity client;
	@OneToOne(optional = false)
    @JoinColumn(name = "medicalExam", referencedColumnName = "typeOfExam")
    private MedicalExamEntity exam;
	
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate scheduledDate;
	@JsonFormat(pattern = "hh:mm:ss a")
	private LocalTime scheduleTime;

	public ScheduleEntity() {
	}
	
	
	public ScheduleEntity(Long id, ClientEntity client, MedicalExamEntity exam, LocalDate scheduledDate,
			LocalTime scheduleTime) {
		super();
		this.id = id;
		this.client = client;
		this.exam = exam;
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
	public MedicalExamEntity getExam() {
		return exam;
	}
	public void setExam(MedicalExamEntity exam) {
		this.exam = exam;
	}
	
	public ScheduleEntity converterDto(ScheduleDto schedule) {
		ScheduleEntity result = new ScheduleEntity(schedule.getId(),schedule.getClient(), schedule.getMedicalExam(), schedule.getScheduledDate(), schedule.getScheduleTime()); 
		
		return result;
	}
	
	
}
