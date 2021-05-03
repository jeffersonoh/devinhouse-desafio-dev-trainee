package devtrainee.ejnn.backend.services;

import lombok.AllArgsConstructor;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import org.modelmapper.ModelMapper;

import devtrainee.ejnn.backend.exceptions.ForbiddenException;

import devtrainee.ejnn.backend.repositories.AgendamentoRepository;

import devtrainee.ejnn.backend.dtos.AgendamentoOutputDTO;
import devtrainee.ejnn.backend.dtos.AgendamentoUpdateDTO;

import devtrainee.ejnn.backend.domain.Agendamento;


@Service
@Transactional
@AllArgsConstructor
public class AgendamentoService {

    private AgendamentoRepository agendamentoRepository;
    private ModelMapper mapper;

    private AgendamentoOutputDTO mapToOutputDTO(Agendamento agendamento) {
	return mapper.map(agendamento, AgendamentoOutputDTO.class);
    }

    public List<AgendamentoOutputDTO> findAll() {
	List<Agendamento> agendamentos = agendamentoRepository.findAll();
	return agendamentos.stream().map(this::mapToOutputDTO).collect(Collectors.toList());
    }

    public AgendamentoOutputDTO patch(long id, AgendamentoUpdateDTO agendamento) {

	Optional<Agendamento> optionalUpdatedAgendamento = agendamentoRepository.findById(id);
	if (optionalUpdatedAgendamento.isEmpty()) {
	    throw new ForbiddenException("Criação de agendamentos está desabilitado.");
	}

	Agendamento updatedAgendamento = optionalUpdatedAgendamento.get();

	ModelMapper patchMapper = new ModelMapper();
	patchMapper.getConfiguration().setSkipNullEnabled(true);

	patchMapper.map(agendamento, updatedAgendamento);

	updatedAgendamento = agendamentoRepository.save(updatedAgendamento);

	return mapToOutputDTO(updatedAgendamento);
    }

    public void delete(long id) {
	if (agendamentoRepository.existsById(id)) {
	    agendamentoRepository.deleteById(id);
	}
    }
}
