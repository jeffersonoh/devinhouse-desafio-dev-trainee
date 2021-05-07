package br.com.softplan.devtrainee.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.softplan.devtrainee.dto.ClientDto;
import br.com.softplan.devtrainee.dto.MedicalExamDto;
import br.com.softplan.devtrainee.dto.ScheduleDto;
import br.com.softplan.devtrainee.entity.ClientEntity;
import br.com.softplan.devtrainee.entity.MedicalExamEntity;
import br.com.softplan.devtrainee.service.ClinicalPlannerService;

//TODO pesquisar se é possível e melhor prática um controller e service para cada entidade
@RestController
@RequestMapping(value = "/agendasoft-api")
public class ClinicalPlannerController {

	@Autowired
	private ClinicalPlannerService service;

//	Deverá haver um endpoint para listagem de todos os clientes cadastrados;
	@RequestMapping(headers = "api-version=v1", value = "/clientes", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<ClientDto> recoverClients() {
		List<ClientEntity> clients = service.findAllClients();
		List<ClientDto> clientsViewer = new ArrayList<ClientDto>();

		for (ClientEntity client : clients) {
			clientsViewer.add(new ClientDto(client));
		}
		return clientsViewer;
	}

//	Deverá haver um endpoint para busca de um cliente baseado no seu cpf;
	@RequestMapping(headers = "api-version=v1", value = "/clientes/{cpf}", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<ClientDto> recoverClientsCpf(@PathVariable String cpf) {
		ClientDto client = service.findClientsByCpf(cpf);
		if (client == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(client);
	}

//	Deverá haver um endpoint para criação de um cliente;
	@RequestMapping(headers = "api-version=v1", value = "/clientes", consumes = APPLICATION_JSON_VALUE, method = POST, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<ClientDto> newClient(@RequestBody ClientDto client) {
//		TODO saveAndFlush faz a operação de insert e update, verificar uso do mesmo método/action pois uso cpf como id
//		Não poderá ser cadastrado mais de um cliente para o mesmo CPF;
		if (service.findCpf(client)) {
			return ResponseEntity.badRequest().build();
		}

		service.registerClient(client);
		return ResponseEntity.ok(client);
	}

	// Deverá haver um endpoint para atualização de um cliente;
	@RequestMapping(headers = "api-version=v1", value = "/clientes/{cpf}", method = PUT, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<ClientDto> updateClientBody(@PathVariable String cpf, @RequestBody ClientDto newClient) {
		ClientDto client = service.updateClient(cpf, newClient);
		if (client == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(client);
	}

//	Deverá haver um endpoint para exclusão de um cliente;
//	TODO tratar a exceção no banco para cliente vinculado a consulta:
	@RequestMapping(headers = "api-version=v1", value = "/clientes", method = DELETE, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<ClientDto> deleteClientByBody(@RequestBody ClientDto client) {
		if (!(service.findCpf(client))) {
			return ResponseEntity.badRequest().build();
		}
		service.deleteClient(client);
		return ResponseEntity.ok(client);
	}

//	 Deverá haver um endpoint para listagem dos exames disponíveis para
//	 agendamento, exibindo apenas nome do exame e id;
	@RequestMapping(headers = "api-version=v1", value = "/exames", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<MedicalExamDto> recoverExams() {
		List<MedicalExamEntity> exams = service.findAllExams();

		List<MedicalExamDto> examsViewer = new ArrayList<MedicalExamDto>();

		for (MedicalExamEntity exam : exams) {
			examsViewer.add(new MedicalExamDto(exam));
		}
		return examsViewer;
	}

//	Deverá haver um endpoint para edição de um agendamento realizado, apenas dia e hora poderão ser editados;

	@RequestMapping(headers = "api-version=v1", value = "/agendamentos/{id}", method = PUT, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public ScheduleDto updateScheduleBody(@PathVariable Long id, @RequestBody ScheduleDto scheduledDateTime) {
		return service.updateSchedule(id, scheduledDateTime);
	}

//	Deverá haver um endpoint para exclusão de um agendamento realizado;
	@RequestMapping(headers = "api-version=v1", value = "/agendamentos/{id}", method = DELETE, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public void deleteScheduleById(@PathVariable Long id) {
		service.deleteSchedule(id);
	}
}
