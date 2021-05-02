package devtrainee.ejnn.backend.services;

import lombok.AllArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import org.modelmapper.ModelMapper;

import devtrainee.ejnn.backend.repositories.ExameRepository;

import devtrainee.ejnn.backend.domain.Exame;

import devtrainee.ejnn.backend.dtos.ExameOutputDTO;


@Service
@Transactional
@AllArgsConstructor
public class ExameService {

    private ExameRepository exameRepository;
    private ModelMapper mapper;

    private ExameOutputDTO mapToOutputDTO(Exame exame) {
	return mapper.map(exame, ExameOutputDTO.class);
    }

    public List<ExameOutputDTO> findAll() {
	List<Exame> exames = exameRepository.findAll();
	return exames.stream().map(this::mapToOutputDTO).collect(Collectors.toList());
    }
}
