package br.com.izy.service;

import java.time.LocalDate;
import java.time.LocalTime;
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
import br.com.izy.exception.DataHoraInvalidoException;
import br.com.izy.exception.DataHoraJaExistenteException;
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
	
	public List<Agendamento> findAll(Long clienteId, Long exameId) {
		if (clienteId != null && exameId != null) {
			return (List<Agendamento>) repository.findByClienteIdAndExameId(clienteId, exameId);
		} else if (clienteId != null || exameId != null) {
			return (List<Agendamento>) repository.findByClienteIdOrExameId(clienteId, exameId);
		}
		
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
		
		Agendamento novoAgendamento = agendamento.converteAgendamentoDTO(agendamentoDTO, cliente, exame);
		
		if (novoAgendamento.getData().isBefore(LocalDate.now())) {
			throw new DataHoraInvalidoException("A data não pode ser menor que o dia atual");
		} else if (novoAgendamento.getHorario().isBefore(LocalTime.now())) {
			throw new DataHoraInvalidoException("O horário não pode ser menor que a hora atual");
		}
		
		Optional<Agendamento> agendamentoResult = repository.findByDataAndHorario(novoAgendamento.getData(), novoAgendamento.getHorario());
		
		agendamentoResult.ifPresent(a -> {
			if (!a.equals(novoAgendamento)) {
        throw new DataHoraJaExistenteException("Já exsite um agendamento para este horário");
			}
		});
		
		return repository.save(novoAgendamento);
	}
	
	public List<Agendamento> findAgendamentosDia() {
		return (List<Agendamento>) repository.findByData(LocalDate.now());
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
	
	public Long count() {
		return repository.count();
	}
	
}
