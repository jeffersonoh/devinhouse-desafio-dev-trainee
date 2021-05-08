package br.com.softplan.desafiotreinee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.softplan.desafiotreinee.dto.AgendaDTO;

import br.com.softplan.desafiotreinee.repository.AgendaRepository;

@Service
public class AgendaService {

	@Autowired
	private AgendaRepository repository;

	private List<AgendaDTO> recuperarAgendamentos() {
		return repository.findAllAgenda();
	}

	public List<AgendaDTO> recuperarAgendamentosMocados() {
		return recuperarAgendamentos();
	}

	public AgendaDTO editarAgendamento(Integer id, AgendaDTO newAgendamento) {
		List<AgendaDTO> todosAgendamentos = recuperarAgendamentos();
		AgendaDTO agendamentoAtualizado = null;

		for (int i = 0; i < todosAgendamentos.size(); i++) {

			if (id == todosAgendamentos.get(i).getId()) {
				if (todosAgendamentos.get(i).getId() != 0) {
					todosAgendamentos.get(i).setId(todosAgendamentos.get(i).getId());
				}
				if (todosAgendamentos.get(i).getDataAgendada() != null) {
					todosAgendamentos.get(i).setDataAgendada(newAgendamento.getDataAgendada());
				}
				if (todosAgendamentos.get(i).getHoraAgendada() != null) {
					todosAgendamentos.get(i).setHoraAgendada(newAgendamento.getHoraAgendada());
				}
				agendamentoAtualizado = todosAgendamentos.get(i);
			}

		}
		return agendamentoAtualizado;
	}

	public List<AgendaDTO> apagarAgendamento(Integer id) {
		List<AgendaDTO> todosAgendamentos = recuperarAgendamentos();

		for (int i = 0; i < todosAgendamentos.size(); i++) {
			if (id == todosAgendamentos.get(i).getId()) {
				todosAgendamentos.remove(i);
			}
		}
		return todosAgendamentos;
	}
}