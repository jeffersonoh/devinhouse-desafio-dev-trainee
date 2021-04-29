package br.com.avaliacao.softplan.backend.service;

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

	@Autowired
	ServiceExame serviceExame;

	@Autowired
	ServiceCliente serviceCliente;

	public boolean horarioEstaDiponivel(String horario) {
		return repositoryAgendamento.findByHorario(horario).isPresent();
	}

	public boolean dataEstaDisponivel(String data) {
		return repositoryAgendamento.findByData(data).isPresent();
	}

	public boolean agendamentoEstaDisponivel(Agendamento agendamento) {
		return repositoryAgendamento.findById(agendamento.getIdAgendamento()).isPresent();
	}

	// {
	// "idAgendamento": null,
	// "clienteTable": null,
	// "exameTable": null,
	// "dia": null,
	// "hora": null
	// }
	public ResponseEntity<?> agendarAtendimento(Agendamento agendamento) {
		// checar se cpf esta cadastrado
		if (!serviceCliente.cpfEstaCadastrado(agendamento.getClienteTable().getCpf())) {
			return new ResponseEntity<>("{\n Cliente não cadastrado \n}", HttpStatus.BAD_REQUEST);
		}

		Optional<Cliente> clienteBanco = repositoryCliente.findByCpf(agendamento.getClienteTable().getCpf());

		Cliente clienteAgendamento = clienteBanco.get();
		agendamento.getClienteTable().setNome(clienteAgendamento.getNome());
		agendamento.getClienteTable().setDataNascimento(clienteAgendamento.getDataNascimento());

		// checar se o exame esta cadastrado
		if (!serviceExame.exameEstaCadastrado(agendamento.getExameTable())) {
			return new ResponseEntity<>("{\n Exame incorreto \n}", HttpStatus.BAD_REQUEST);
		}

		Optional<Exame> exameBanco = repositoryExame.findByNome(agendamento.getExameTable().getNome());
		Exame exameAgendamento = exameBanco.get();
		agendamento.getExameTable().setNome(exameAgendamento.getNome());

		// checar se existe disponibilidade de hora
		if (horarioEstaDiponivel(agendamento.getHora())) {
			return new ResponseEntity<>("{\n Horário não disponível \n}", HttpStatus.BAD_REQUEST);
		}

		// checar se existe disponibilidade de data
		if (dataEstaDisponivel(agendamento.getDia())) {
			return new ResponseEntity<>("{\n Data não está disponível \n}", HttpStatus.BAD_REQUEST);
		}

		repositoryAgendamento.save(agendamento);
		return new ResponseEntity<>("{\n Agendamento realizado com sucesso \n}", HttpStatus.OK);
	}

}
