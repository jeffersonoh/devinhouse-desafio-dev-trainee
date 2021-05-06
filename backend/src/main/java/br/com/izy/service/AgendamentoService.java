package br.com.izy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.izy.dto.AgendamentoDTOInput;
import br.com.izy.dto.AgendamentoDTOUpdate;
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
	
	public Agendamento create(AgendamentoDTOInput agendamentoDTO, Long clienteId, Long exameId) {
		Cliente cliente = clienteService.find(clienteId, null);
		
		Exame exame = exameService.find(exameId);
		
		Agendamento agendamento = new Agendamento();
		
		agendamento = agendamento.converteAgendamentoDTO(agendamentoDTO, cliente, exame);
		
		return repository.save(agendamento);
	}
	
	public void update(Long id, AgendamentoDTOUpdate agendamentoDTO) {
		Optional<Agendamento> result = repository.findById(id);
		
		Agendamento agendamento = result.orElseThrow(() -> new AgendamentoNotFoundException("Nenhum agendamento encontrado"));
		
		BeanUtils.copyProperties(agendamentoDTO, agendamento, AtualizaColunasUtil.getNullPropertyNames(agendamentoDTO));
		
		repository.save(agendamento);
	}
	
	public void delete(Long id) {
		Optional<Agendamento> result = repository.findById(id);
		
		Agendamento agendamento = result.orElseThrow(() -> new AgendamentoNotFoundException("Nenhum agendamento encontrado"));
		
		repository.delete(agendamento);
	}
}
