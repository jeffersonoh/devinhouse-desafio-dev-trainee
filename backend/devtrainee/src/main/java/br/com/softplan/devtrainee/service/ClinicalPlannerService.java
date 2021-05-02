package br.com.softplan.devtrainee.service;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.softplan.devtrainee.dto.ClientDto;
import br.com.softplan.devtrainee.dto.ScheduleDto;
import br.com.softplan.devtrainee.entity.ClientEntity;
import br.com.softplan.devtrainee.entity.MedicalExamEntity;
import br.com.softplan.devtrainee.entity.ScheduleEntity;
import br.com.softplan.devtrainee.repository.ClientRepository;
import br.com.softplan.devtrainee.repository.MedicalExamRepository;
import br.com.softplan.devtrainee.repository.ScheduleRepository;

@Service
public class ClinicalPlannerService {
	@Autowired
	private ClientRepository repository;
	@Autowired
	private MedicalExamRepository repositoryExam;
	@Autowired 
	ScheduleRepository repositorySchedule;
	

	public void registerClient(ClientDto client) {
		repository.saveAndFlush(new ClientEntity(client));
		
	}

	public List<ClientEntity> findAllClients() {
		List<ClientEntity> clients = new ArrayList<ClientEntity>();
		Iterable<ClientEntity> allClients = repository.findAll();
		for (ClientEntity client : allClients) {
			clients.add(client);
		}
		return clients;
	}
	
	public ClientDto findClientsByCpf(String cpf) {
		ClientEntity clientCpf = null ;
		Iterable<ClientEntity> allClients = repository.findAll();
		for (ClientEntity client : allClients) {
			if (client.getCpf().equals(cpf)) {
				clientCpf = client;
			}
		}
		ClientDto clientViewer = new ClientDto(clientCpf);
		return clientViewer;
	}
	
	public boolean findCpf(ClientDto newClient) {
		//ClientEntity clientCpf = null ;
		
		Iterable<ClientEntity> allClients = repository.findAll();
		for (ClientEntity client : allClients) {
			if (client.getCpf().equals(newClient.getCpf())) {
				return true;
			}
		}
		
		return false;
	}

	public void deleteClient(ClientDto clientToDelete) {
		Iterable<ClientEntity> allClients = repository.findAll();
		for (ClientEntity client : allClients) {
		
			if (client.getCpf().equals(clientToDelete.getCpf())) {
				repository.delete(client);
			}
		}
		
	}


	public ClientDto updateClient(String cpf, ClientDto newClient) {
		//ClientDto clientDb = findClientsByCpf(cpf);//		List<ProcessoDTO> todosProcessos = recuperarListaProcessos();
		ClientDto clientUpdate = null ;
		Iterable<ClientEntity> allClients = repository.findAll();
		for (ClientEntity client : allClients) {
		
			if (client.getCpf().equals(cpf)) {

			
				if (newClient.getName() != null) {
					client.setName(newClient.getName());
				}
				if (newClient.getBirth() != null) {
					client.setBirth(newClient.getBirth());
				}
						
				repository.saveAndFlush(client);
				clientUpdate = new ClientDto(client);

			}

		}
		return clientUpdate;

	}

	public List<MedicalExamEntity> findAllExams() {
		List<MedicalExamEntity> examsList = new ArrayList<MedicalExamEntity>();
		Iterable<MedicalExamEntity> allExams = repositoryExam.findAll();
		for (MedicalExamEntity exam : allExams) {
			examsList.add(exam);
		}
		return examsList;
		
	}

	public ScheduleDto updateSchedule(Long id, ScheduleDto scheduledDatetime) {
		ScheduleEntity scheduleToUpdate = repositorySchedule.getOne(id);
		scheduleToUpdate.setScheduledDateTime(scheduledDatetime.getScheduledDateTime());
		this.repositorySchedule.saveAndFlush(scheduleToUpdate);

		return new ScheduleDto(scheduleToUpdate);
	}

	public void deleteSchedule(Long id) {
		repositorySchedule.deleteById(id);
		
		// TODO Auto-generated method stub
		
	}
	
	
	
	


}
