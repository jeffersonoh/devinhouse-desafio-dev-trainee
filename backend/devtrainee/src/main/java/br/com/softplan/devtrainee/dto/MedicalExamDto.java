package br.com.softplan.devtrainee.dto;

import java.io.Serializable;

import br.com.softplan.devtrainee.entity.MedicalExamEntity;

public class MedicalExamDto implements Serializable {

	private static final long serialVersionUID = -6928285853790474720L;
	private Long id;
	private String typeOfExam;

	public MedicalExamDto() {
	}

	public MedicalExamDto(Long id, String typeOfExam) {
		super();
		this.id = id;
		this.typeOfExam = typeOfExam;
	}

	public MedicalExamDto(MedicalExamEntity exam) {
		this.id = exam.getId();
		this.typeOfExam = exam.getTypeOfExam();
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

}
