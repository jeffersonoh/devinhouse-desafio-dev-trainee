package br.com.softplan.devtrainee.entity;

import static javax.persistence.CascadeType.ALL;

import java.io.Serializable;
import java.util.List;

//import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import br.com.softplan.devtrainee.dto.MedicalExamDto;


@Entity(name = "MedicalExams")
@Table(
		name="MEDICALEXAMS", 
	    uniqueConstraints=
	        @UniqueConstraint(columnNames={"id"})
	)

public class MedicalExamEntity implements Serializable {

	private static final long serialVersionUID = 5757458562206267232L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String typeOfExam;
	
//	@OneToMany(cascade = ALL, mappedBy = "medicalExam")
//	private List<ScheduleEntity> schedule;
	
	public MedicalExamEntity() {
		}
	
	public MedicalExamEntity(Long id, String typeOfExam) {
		super();
		this.id = id;
		this.typeOfExam = typeOfExam;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTypeOfExam() {
		return typeOfExam;
	}
	public void setTypeOfExam(String typeOfExam) {
		this.typeOfExam = typeOfExam;
	}
	
	public MedicalExamEntity converterExamDto(MedicalExamDto exam) {
		MedicalExamEntity result = new MedicalExamEntity(exam.getId(), exam.getTypeOfExam());
		
		return result;
	}
	

}
