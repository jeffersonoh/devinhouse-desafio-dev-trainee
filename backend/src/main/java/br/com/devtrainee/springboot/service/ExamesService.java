package br.com.devtrainee.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devtrainee.springboot.dto.ExamesDTO;
import br.com.devtrainee.springboot.repository.ExamesRepository;


@Service
public class ExamesService {

	@Autowired
	private ExamesRepository examesRepository;
	
	public List<ExamesDTO> listarExames() {
		return examesRepository.listarExames();
	}

}
