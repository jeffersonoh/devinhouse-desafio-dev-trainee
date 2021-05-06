package br.com.izy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.izy.dto.ExameDTOInput;
import br.com.izy.entity.Exame;
import br.com.izy.exception.ExameNotFoundException;
import br.com.izy.repository.ExameRepository;
import br.com.izy.util.AtualizaColunasUtil;

@Service
public class ExameService {
	
	@Autowired
	ExameRepository repository;
	
	public List<Exame> findAll(String busca) {
		if (busca != null) {
			return (List<Exame>) repository.findByNomeContainingIgnoreCase(busca);
		}
		
		return (List<Exame>) repository.findAll();
	}
	
	public Exame find(Long id) {
		Optional<Exame> result = repository.findById(id);
		
		return result.orElseThrow(() -> new ExameNotFoundException("Nenhum exame encontrado"));
	}
	
	public Exame create(ExameDTOInput exameDTO) {
		Exame exame = new Exame();
		
		exame = exame.converteExameDTO(exameDTO);
		
		return repository.save(exame);
	}
	
	public void update(Long id, ExameDTOInput exameDTO) {
		Optional<Exame> result = repository.findById(id);
		
		Exame exame = result.orElseThrow(() -> new ExameNotFoundException("Nenhum exame encontrado"));
		
		BeanUtils.copyProperties(exameDTO, exame, AtualizaColunasUtil.getNullPropertyNames(exameDTO));
		
		repository.save(exame);
	}
	
	public void delete(Long id) {
		Optional<Exame> result = repository.findById(id);
		
		Exame exame = result.orElseThrow(() -> new ExameNotFoundException("Nenhum exame encontrado"));
		
		repository.delete(exame);
	}
	
}
