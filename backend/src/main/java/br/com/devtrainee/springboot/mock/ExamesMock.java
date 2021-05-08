package br.com.devtrainee.springboot.mock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import br.com.devtrainee.springboot.dto.ExamesDTO;

@Component
public class ExamesMock {

	public List<ExamesDTO> criarMock() {
		List<ExamesDTO> exames = new ArrayList<ExamesDTO>();
		
		ExamesDTO mamografia = new ExamesDTO();
		mamografia.setId(1);
		mamografia.setNome("Mamografia");
		exames.add(mamografia);
		
		ExamesDTO hemograma = new ExamesDTO();
		hemograma.setId(2);
		hemograma.setNome("Hemograma");
		exames.add(hemograma);
		
		ExamesDTO testeDeGravidez = new ExamesDTO();
		testeDeGravidez.setId(3);
		testeDeGravidez.setNome("Teste de gravidez");
		exames.add(testeDeGravidez);
		
		ExamesDTO testeDoPezinho = new ExamesDTO();
		testeDoPezinho.setId(4);
		testeDoPezinho.setNome("Teste do pezinho");
		exames.add(testeDoPezinho);
		
		ExamesDTO radiografia = new ExamesDTO();
		radiografia.setId(5);
		radiografia.setNome("radiografia");
		exames.add(radiografia);
		
		ExamesDTO testePapanicolau = new ExamesDTO();
		testePapanicolau.setId(6);
		testePapanicolau.setNome("Teste Papanicolau");
		exames.add(testePapanicolau);
		
		
		return exames;
	}

}
