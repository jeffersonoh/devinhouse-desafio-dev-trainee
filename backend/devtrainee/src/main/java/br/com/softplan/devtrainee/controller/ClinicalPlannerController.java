package br.com.softplan.devtrainee.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

import java.util.ArrayList;
import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.softplan.devtrainee.dto.ClientDto;
import br.com.softplan.devtrainee.dto.MedicalExamDto;
import br.com.softplan.devtrainee.entity.ClientEntity;
import br.com.softplan.devtrainee.entity.MedicalExamEntity;
import br.com.softplan.devtrainee.service.ClinicalPlannerService;

@RestController
@RequestMapping(value = "/agendamento")
public class ClinicalPlannerController {

	@Autowired
	private ClinicalPlannerService service;
//	Deverá haver um endpoint para edição de um agendamento realizado, apenas dia e hora poderão ser editados;
//	Deverá haver um endpoint para exclusão de um agendamento realizado;

	// Deverá haver um endpoint para listagem de todos os clientes cadastrados;
	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/consulta", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<ClientDto> recoverClients() {
		List<ClientEntity> clients = service.findAllClients();

		List<ClientDto> clientsViewer = new ArrayList<ClientDto>();

		for (ClientEntity client : clients) {
			clientsViewer.add(new ClientDto(client));
		}

		return clientsViewer;
//		return service.findAllClients();
	}

//	Deverá haver um endpoint para busca de um cliente baseado no seu cpf;

	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/consultacpf/{cpf}", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public ClientDto recoverClientsCpf(@PathVariable String cpf) {
		return service.findClientsByCpf(cpf);
	}

//	Deverá haver um endpoint para criação de um cliente;
	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/cadastro", consumes = APPLICATION_JSON_VALUE, method = POST, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<ClientDto> newClient(@RequestBody ClientDto client) {
		if (service.findCpf(client)) {
			return ResponseEntity.badRequest().build();
		}
		
		service.registerClient(client);
		// ClientDto clientResponse = new ClientDto(clientCreated);
		return ResponseEntity.ok(client);

//		ClientEntity clientCreated = service.registerClient(client);
//		return new ClientDto(clientCreated);
	}

	//Deverá haver um endpoint para atualização de um cliente;
	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/update/client/{cpf}", method = PUT, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	 public ClientDto atualizarInfoClient(@PathVariable String cpf, @RequestBody
	 ClientDto newClient) {
		
		return service.updateClient(cpf, newClient);
	}

//	Deverá haver um endpoint para exclusão de um cliente;
	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/excluir/cliente", method = DELETE, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<ClientDto> exclusaoProcesso(@RequestBody ClientDto client) {
		if (!(service.findCpf(client))) {
			return ResponseEntity.badRequest().build();
		}
		service.deleteClient(client);
		return ResponseEntity.ok(client);
	}

//	 Deverá haver um endpoint para listagem dos exames disponíveis para
//	 agendamento, exibindo apenas nome do exame e id;
	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/consulta/exames", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<MedicalExamDto> recoverExams() {
		List<MedicalExamEntity> exams = service.findAllExams();
		
		List<MedicalExamDto> examsViewer = new ArrayList<MedicalExamDto>();
		
		for (MedicalExamEntity exam : exams) {
			examsViewer.add(new MedicalExamDto(exam));
		}
		
		return examsViewer;
	}

}
