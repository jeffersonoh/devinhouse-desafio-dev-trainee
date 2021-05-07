package br.com.devinhouse.trainee.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devinhouse.trainee.entities.Agendamento;
import br.com.devinhouse.trainee.entities.Exame;
import br.com.devinhouse.trainee.entities.Cliente;

import br.com.devinhouse.trainee.repositories.AgendamentoRepository;

@Service
public class AgendamentoServices {
	
	@Autowired
	protected AgendamentoRepository agendamentoRepository;

	@Autowired
	protected ClienteServices clienteServices;
	
	@Autowired
	protected ExameServices exameServices;
	
	// Encontrar o agendamento
	protected Agendamento findScheduleById(Integer id) {
		List<Agendamento> allSchedules = agendamentoRepository.findAll();
		Agendamento foundSchedule = new Agendamento();
		
		for(Agendamento each : allSchedules) {
			if(id.equals(each.getId())) {
				foundSchedule = each;
			}
		}
		
		return foundSchedule;
	}
	
	// Verificar se o agendamento existe
	protected boolean verifyExistSchedule(Integer id) {
		List<Agendamento> allSchedules = agendamentoRepository.findAll();
		boolean status = false;
		
		for(Agendamento each : allSchedules) {
			if(id.equals(each.getId())) {
				status = true;
			}
		}
		
		return status;
	}
	
	// Criar agendamento
	public Agendamento create(Agendamento obj) {
		Cliente client = clienteServices.getByCPFKey(obj.getCliente().getCpf());
		obj.setCliente(client);
		
		Exame exam = exameServices.findByNome(obj.getExame().getNome());
		obj.setExame(exam);
		
		return agendamentoRepository.save(obj);
	}
	
	// Pesquisar todos os agendamentos
	public List<Agendamento> searchAllSchedules() {
		return agendamentoRepository.findAll();
	}
	
	public Agendamento searchScheduleById(Integer id) {
		return agendamentoRepository.findById(id).get();
	}
	
	// Atualizar um agendamento
	public Agendamento updateSchedule(Integer id, Agendamento novoAgendamento) {
		if(verifyExistSchedule(id)) {
			Agendamento foundSchedule = agendamentoRepository.findById(id).get();
			
			if(novoAgendamento.getDataAgendamento() != null) {
				foundSchedule.setDataAgendamento(novoAgendamento.getDataAgendamento());
			}
			
			return agendamentoRepository.save(foundSchedule);
		}
		 throw new RuntimeException("Nao foi possivel encontrar o agendamento");
	}	
		
	// Deletar um agendamento
	public void delete(Integer id) {
		Agendamento filteredSchedule = agendamentoRepository.findById(id).get();
		agendamentoRepository.delete(filteredSchedule);
	}
}
