package br.com.devtrainee.desafiodev.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.devtrainee.desafiodev.DTO.AppointmentInDTO;
import br.com.devtrainee.desafiodev.DTO.AppointmentOutDTO;
import br.com.devtrainee.desafiodev.service.AppointmentService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("v1" + "/agendamentos")
public class AppointmentController {
  
  @Autowired
  AppointmentService appointmentService;

  //   // Deverá haver um endpoint para edição de um agendamento realizado, apenas dia e hora poderão ser editados;
  //   @PutMapping("/{id}")
  //   public ResponseEntity<AppointmentOutDTO> updateAppointment(@PathVariable("id") Long id, @RequestBody AppointmentInDTO updatedAppointment) {
  //     return appointmentService.updateAnAppointment(id, updatedAppointment);
  //   }
  //   // Deverá haver um endpoint para exclusão de um agendamento realizado;
  //   @DeleteMapping("/{id}")
  //   public ResponseEntity<AppointmentOutDTO> deleteAppointment(@PathVariable("id") Long id) {
  //     return appointmentService.deleteAnAppointment(id);
  //   }
  //   //faltante: endpoint para busca de um agendamento
  //   @GetMapping("/{id}")
  //   public ResponseEntity<AppointmentOutDTO> obtainAppointment(@PathVariable("id") Long id) {
  //       return appointmentService.obtainAnAppointment(id);
  //   }
  //   //faltante: endpoint pra criar agendamento
    // @PostMapping("")
    // public ResponseEntity<AppointmentOutDTO> createAppointment(@RequestBody AppointmentInDTO newAppointment) {
    //   return appointmentService.createAnAppointment(newAppointment);
    // }
    @PostMapping("")
    public void createFakeAppointment() {
      appointmentService.vai();
    }
  //   //faltante: endpoint para mostrar todos agendamentos
    @GetMapping("")
    public List<AppointmentOutDTO> obtainAllAppointments() {
        return appointmentService.obtainAllAppointments();
    }
    
}
