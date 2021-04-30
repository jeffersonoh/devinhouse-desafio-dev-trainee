package br.com.avaliacao.softplan.backend.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.avaliacao.softplan.backend.entity.Agendamento;
import br.com.avaliacao.softplan.backend.entity.Cliente;
import br.com.avaliacao.softplan.backend.entity.Exame;
import br.com.avaliacao.softplan.backend.repository.RepositoryAgendamento;
import br.com.avaliacao.softplan.backend.repository.RepositoryCliente;
import br.com.avaliacao.softplan.backend.repository.RepositoryExame;

@Service
@Transactional
public class ServiceAgendamento {

	@Autowired
	private RepositoryAgendamento repositoryAgendamento;

	@Autowired
	private RepositoryCliente repositoryCliente;

	@Autowired
	private RepositoryExame repositoryExame;

	public ResponseEntity<?> agendarAtendimento(Agendamento agendamento) {
		Optional<Cliente> clienteBanco = repositoryCliente.findByCpf(agendamento.getCliente().getCpf());
		Cliente clienteAgendamento = clienteBanco.get();
		agendamento.setCliente(clienteAgendamento);

		Optional<Exame> exameBanco = repositoryExame.findByNome(agendamento.getExame().getNome());
		Exame exameAgendamento = exameBanco.get();
		agendamento.setExame(exameAgendamento);
		
		repositoryAgendamento.save(agendamento);
		return new ResponseEntity<>("{\n Agendamento realizado com sucesso \n}", HttpStatus.OK);
	}
	
	public ResponseEntity<?> atualizarAgendamento(Long id, Agendamento agendamento) {
		repositoryAgendamento.atualizarAgendamento(agendamento.getData(), agendamento.getHorario(), id);
		return new ResponseEntity<>("{\n   Agendamento atualizado com sucesso\n}", HttpStatus.OK);
	}
	
	public ResponseEntity<?> deletarAgendamento(Long id) {
		if(repositoryAgendamento.findById(id).isPresent()) {
			repositoryAgendamento.deleteById(id);
			return new ResponseEntity<>("{\n   Agendamento deletedado com sucesso \n}", HttpStatus.OK);
		}
		return new ResponseEntity<>("{\n   Agendamento não encontrado\n}", HttpStatus.BAD_REQUEST);
	}
	
	public List<String> listarExamesIndisponíveis(String nomeExame, String data) {
		return repositoryAgendamento.horariosDisponiveis(nomeExame, data);
	}
}
