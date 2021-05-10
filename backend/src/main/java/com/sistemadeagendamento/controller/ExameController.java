package com.sistemadeagendamento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistemadeagendamento.model.Exame;
import com.sistemadeagendamento.repository.ExameRepository;


@RestController
@RequestMapping("/api/exame")
public class ExameController {
	
		@Autowired
		private ExameRepository exameRepository;
		
		@GetMapping()
		public List<Exame> listarExames(){
			return exameRepository.findAll();
		};
	};	
