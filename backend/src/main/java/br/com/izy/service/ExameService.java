package br.com.izy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.izy.entity.Exame;
import br.com.izy.exception.ExameNotFoundException;
import br.com.izy.repository.ExameRepository;
import br.com.izy.util.AtualizaColunasUtil;

@Service
public class ExameService {
	
	@Autowired
	ExameRepository repository;
	
	public List<Exame> findAll() {
		return (List<Exame>) repository.findAll();
	}
	
	public Exame find(Long id) {
		Optional<Exame> result = repository.findById(id);
		
		return result.orElseThrow(() -> new ExameNotFoundException());
	}
	
	public Exame create(Exame exame) {
		return repository.save(exame);
	}
	
	public void update(Long id, Exame body) {
		Optional<Exame> result = repository.findById(id);
		
		Exame exame = result.orElseThrow(() -> new ExameNotFoundException());
		
		BeanUtils.copyProperties(body, exame, AtualizaColunasUtil.getNullPropertyNames(body));
		
		repository.save(exame);
	}
	
	public void delete(Long id) {
		Optional<Exame> result = repository.findById(id);
		
		Exame exame = result.orElseThrow(() -> new ExameNotFoundException());
		
		repository.delete(exame);
	}
	
}
