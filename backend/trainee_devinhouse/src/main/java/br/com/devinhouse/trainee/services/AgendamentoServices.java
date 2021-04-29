package br.com.devinhouse.trainee.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devinhouse.trainee.repositories.AgendamentoRepository;

@Service
public class AgendamentoServices {
	
	@Autowired
	private AgendamentoRepository agendamentoRepository;
	

}
