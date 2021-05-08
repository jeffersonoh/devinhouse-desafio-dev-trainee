package br.com.devtrainee.desafiodev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devtrainee.desafiodev.model.Exam;
import br.com.devtrainee.desafiodev.model.ExamEnum;

public interface ExamRepository extends JpaRepository<Exam, Long>{
  
  Exam findByName(ExamEnum name);
}
