package br.com.devtrainee.desafiodev.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import br.com.devtrainee.desafiodev.service.AppointmentService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("v1" + "/agendamentos")
public class AppointmentController {
  
  @Autowired
  AppointmentService appointmentService;

    // Deverá haver um endpoint para edição de um agendamento realizado, apenas dia e hora poderão ser editados;
    @PutMapping("/{id}")
    public ResponseEntity<String> updateAppointment(@PathVariable("id") Long id) {
      return ResponseEntity.status(201).build();
    }
    // Deverá haver um endpoint para exclusão de um agendamento realizado;
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAppointment(@PathVariable("id") Long id) {
      return ResponseEntity.status(201).build();
    }
    //faltante: endpoint pra criar agendamento
    @PostMapping("/teste")
    public ResponseEntity<String> createAppointment() {
      appointmentService.vai();
      return ResponseEntity.status(201).build();
    }
    //faltante: endpoint para mostrar todos agendamentos
    @GetMapping("")
    public ResponseEntity<String> obtainAllAppointments() {
        return ResponseEntity.status(200).build();
    }
    
}
