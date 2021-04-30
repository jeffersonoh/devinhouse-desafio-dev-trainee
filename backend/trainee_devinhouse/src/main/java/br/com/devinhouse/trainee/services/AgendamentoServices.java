package br.com.devinhouse.trainee.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.devinhouse.trainee.entities.Agendamento;
import br.com.devinhouse.trainee.entities.Exame;
import br.com.devinhouse.trainee.entities.Cliente;

import br.com.devinhouse.trainee.repositories.AgendamentoRepository;
import br.com.devinhouse.trainee.repositories.ClienteRepository;
import br.com.devinhouse.trainee.repositories.ExameRepository;

import br.com.devinhouse.trainee.services.ClienteServices;
import br.com.devinhouse.trainee.services.ExameServices;

@SuppressWarnings("unused")
@Service
public class AgendamentoServices {
	
	@Autowired
	protected AgendamentoRepository service;

//	@Autowired
//	private ClienteRepository clienteRepository;
	
	@Autowired
	protected ClienteServices clienteServices;
	
//	@Autowired
//	private ExameRepository exameRepository;
	
	@Autowired
	protected ExameServices exameServices;
	
	// FUNCOES
	// create
	public ResponseEntity<?> create(Agendamento obj) {
		Cliente client = clienteServices.getByCPFKey(obj.getCliente().getCpf());
		obj.setCliente(client);
		
		Exame exam = exameServices.findByName(obj.getExame().getNome());
		obj.setExame(exam);
		
		service.save(obj);
		return new ResponseEntity<>("Agendamento realizado com sucesso", HttpStatus.CREATED);
	}
	
	// getAll
	public List<Agendamento> getAll() {
		return service.findAll();
	}
	
	// update
	public ResponseEntity<?> update(Integer id, Agendamento obj) {
		Agendamento filteredSchedule = service.findById(id).get();
	
		if(obj.getDataAgendamento() != null) {
			filteredSchedule.setDataAgendamento(obj.getDataAgendamento());
			service.save(filteredSchedule);
		}
		
		return new ResponseEntity<>("{\n Agendamento editado com sucesso \n}", HttpStatus.OK);
	}
	
	
	// delete
	public ResponseEntity<?> delete(Integer id) {
		Agendamento filteredSchedule = service.findById(id).get();
		service.delete(filteredSchedule);
		
		return new ResponseEntity<>("{\n Agendamento removido com sucesso \n}", HttpStatus.OK);
	}
}
