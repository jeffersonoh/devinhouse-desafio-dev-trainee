package br.com.izy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.izy.dto.AgendamentoDTO;
import br.com.izy.entity.Agendamento;
import br.com.izy.entity.Cliente;
import br.com.izy.entity.Exame;
import br.com.izy.exception.AgendamentoNotFoundException;
import br.com.izy.repository.AgendamentoRepository;
import br.com.izy.util.AtualizaColunasUtil;

@Service
public class AgendamentoService {
	@Autowired
	AgendamentoRepository repository;
	
	@Autowired
	private ClienteService clienteService;
	
	@Autowired
	private ExameService exameService;
	
	public List<Agendamento> findAll() {
		return (List<Agendamento>) repository.findAll();
	}
	
	public Agendamento find(Long id) {
		Optional<Agendamento> result = repository.findById(id);
		
		return result.orElseThrow(() -> new AgendamentoNotFoundException("Nenhum agendamento encontrado"));
	}
	
	public Agendamento create(AgendamentoDTO agendamentoDTO, Long clienteId, Long exameId) {
		Cliente cliente = clienteService.find(clienteId, null);
		
		Exame exame = exameService.find(exameId);
		
		Agendamento agendamento = new Agendamento();
		
		agendamento = agendamento.converteAgendamentoDTO(agendamentoDTO, cliente, exame);
		
		return repository.save(agendamento);
	}
	
	public void update(Long id, AgendamentoDTO agendamentoDTO, Long clienteId, Long exameId) {
		Optional<Agendamento> result = repository.findById(id);
		
		Agendamento agendamento = result.orElseThrow(() -> new AgendamentoNotFoundException("Nenhum agendamento encontrado"));
		
		Cliente cliente = null;
		
		Exame exame = null;
		
		if (clienteId != null) {
			cliente = clienteService.find(clienteId, null);
		}
		
		if (exameId != null) {
			exame = exameService.find(exameId);
		}
		
		Agendamento agendamentoData = new Agendamento();
		
		agendamentoData = agendamentoData.converteAgendamentoDTO(agendamentoDTO, cliente, exame);
		
		BeanUtils.copyProperties(agendamentoData, agendamento, AtualizaColunasUtil.getNullPropertyNames(agendamentoData));
		
		repository.save(agendamento);
	}
	
	public void delete(Long id) {
		Optional<Agendamento> result = repository.findById(id);
		
		Agendamento agendamento = result.orElseThrow(() -> new AgendamentoNotFoundException("Nenhum agendamento encontrado"));
		
		repository.delete(agendamento);
	}
}
