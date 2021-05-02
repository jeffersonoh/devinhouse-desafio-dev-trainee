package br.com.devtrainee.desafiodev.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.devtrainee.desafiodev.model.Exam;
import br.com.devtrainee.desafiodev.service.ExamService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("v1" + "/exames")
public class ExamController {

  @Autowired
  private ExamService examService;

  // Deverá haver um endpoint para listagem dos exames disponíveis para
  // agendamento, exibindo apenas nome do exame e id;
  @GetMapping(value = "")
  public ResponseEntity<String> obtainAllExams() {
    return examService.obtainExams();
  }

  @PostMapping("")
  public ResponseEntity<String> createExam(@RequestBody Exam entity) {
    return examService.createAnExam();
  }

  @GetMapping("/{id}")
  public ResponseEntity<String> obtainExam(@PathVariable Long id) {
    return examService.obtainAnExam();
  }

  @PutMapping("/{id}")
  public ResponseEntity<String> updateExam(@PathVariable Long id, @RequestBody Exam entity) {
    return examService.updateAnExam();
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteExam(@PathVariable Long id) {
    return examService.deleteAnExam();
  }

}
