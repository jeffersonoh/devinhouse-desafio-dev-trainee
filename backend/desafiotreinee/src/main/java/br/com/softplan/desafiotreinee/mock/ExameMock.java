package br.com.softplan.desafiotreinee.mock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import br.com.softplan.desafiotreinee.dto.ClienteDTO;
import br.com.softplan.desafiotreinee.dto.ExameDTO;

@Component
public class ExameMock {
	
	
	
	
	private static final String exames[] = new String[5];
	
	public void addExames() {
		exames[0] = "exame 1";
		exames[1] = "exame 2";
		exames[2] = "exame 3";
		exames[3] = "exame 4";
		exames[4] = "exame 5";
	}
	
	
	
	public List<ExameDTO> getAllExames(){
		List<ExameDTO> listExames = new ArrayList<ExameDTO>();
		addExames();
		
		for (int i = 0; i < exames.length; i++) {
			ExameDTO dto = new ExameDTO();
			dto.setId(i + 1);
			dto.setNome(exames[i]);
			
			listExames.add(dto);
		}
		
		return listExames;
	}

}
