package br.com.devtrainee.desafiodev.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.devtrainee.desafiodev.DTO.ExamOutDTO;
import br.com.devtrainee.desafiodev.model.Exam;
import br.com.devtrainee.desafiodev.service.ExamService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("v1" + "/exames")
public class ExamController {

  @Autowired
  private ExamService examService;

  // Deverá haver um endpoint para listagem dos exames disponíveis para
  // agendamento, exibindo apenas nome do exame e id;
  @GetMapping("")
  public List<ExamOutDTO> obtainExams() {
    return examService.obtainAllExams();
  }

  // @PostMapping("")
  // public ResponseEntity<String> createExam(@RequestBody ExamInDTO entity) {
  //   return examService.createAnExam();
  // }

  // @GetMapping("/{id}")
  // public ResponseEntity<String> obtainExam(@PathVariable Long id) {
  //   return examService.obtainAnExam();
  // }

  // @PutMapping("/{id}")
  // public ResponseEntity<String> updateExam(@PathVariable Long id, @RequestBody ExamInDTO entity) {
  //   return examService.updateAnExam();
  // }

  // @DeleteMapping("/{id}")
  // public ResponseEntity<String> deleteExam(@PathVariable Long id) {
  //   return examService.deleteAnExam();
  // }

}
