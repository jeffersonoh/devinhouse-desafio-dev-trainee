package br.devin.devtrainee.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import br.devin.devtrainee.backend.model.Agendamento;
import br.devin.devtrainee.backend.model.Cliente;
import br.devin.devtrainee.backend.repository.ClienteRepository;

@Service
@Transactional
public class ClienteService {

	@Autowired
	private ClienteRepository clienteRep;
	
	@Autowired
	private AgendamentoService agendamentoService;
	
	public Cliente cadastrarCliente(Cliente cliente) {
		return this.clienteRep.save(cliente);
	}
	
	public List<Cliente> buscarTodosClientes() {
		return this.clienteRep.findAll();
	}
	
	public Cliente buscarClientePorID(Long id) {
		return this.clienteRep.findById(id)
				.orElseThrow(
				() -> new ResponseStatusException(
						HttpStatus.BAD_REQUEST, 
						"Não foi encontrado clientes com o ID: "+ id+". \nInforme um novo ID.")
				);
	}
	
	public Cliente buscarClientePorCPF(String cPF) {
		return this.clienteRep.findBycPF(cPF)
				.orElseThrow(
				() -> new ResponseStatusException(
						HttpStatus.BAD_REQUEST, 
						"Não foi encontrado clientes com o CPF: "+ cPF +" \nInforme um novo CPF.")
				);
	}
	
	public ResponseEntity<?> atualizarCliente(Long id, Cliente novoCliente) {
		if(this.clienteRep.existsById(id)) {
			novoCliente.setIdCliente(id);
			this.clienteRep.save(novoCliente);
			return  ResponseEntity.noContent()
					.build();
		}
		return  ResponseEntity.badRequest()
				.build();
	}
	
	public ResponseEntity<?> deletarCliente(Long id) {
		if(this.clienteRep.existsById(id)) {
			List<Agendamento> lista = this.agendamentoService.buscarTodosAgendamentoPorCliente(clienteRep.findById(id).get());
			for(Agendamento agendamento : lista) {
				this.agendamentoService.deletarAgendamento(agendamento.getIdAgendamento());
			}
			this.clienteRep.deleteById(id);
			return  ResponseEntity.noContent()
					.build();
		}
		return  ResponseEntity.badRequest()
				.build();
	}
	
}
