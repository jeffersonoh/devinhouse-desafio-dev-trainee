package devtrainee.ejnn.backend.services;

import lombok.AllArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import org.modelmapper.ModelMapper;

import devtrainee.ejnn.backend.repositories.AgendamentoRepository;

import devtrainee.ejnn.backend.dtos.AgendamentoOutputDTO;

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
}
