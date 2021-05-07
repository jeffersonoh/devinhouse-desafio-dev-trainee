package devtrainee.ejnn.backend.services;

import lombok.AllArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import org.modelmapper.ModelMapper;

import devtrainee.ejnn.backend.repositories.ExameRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import devtrainee.ejnn.backend.dtos.ExameOutputDTO;

import devtrainee.ejnn.backend.domain.Exame;



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

    public Page<ExameOutputDTO> findAll(PageRequest pageRequest) {
	Page<Exame> page = exameRepository.findAll(pageRequest);
	return page.map((x) -> mapper.map(x, ExameOutputDTO.class));
    };
}
