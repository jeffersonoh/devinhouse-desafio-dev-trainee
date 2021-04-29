package br.com.devtrainee.desafiodev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devtrainee.desafiodev.model.Exam;

public interface ExamRepository extends JpaRepository<Exam, Long>{
  
}
