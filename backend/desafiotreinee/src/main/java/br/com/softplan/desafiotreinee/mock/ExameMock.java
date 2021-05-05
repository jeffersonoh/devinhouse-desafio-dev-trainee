package br.com.softplan.desafiotreinee.mock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import br.com.softplan.desafiotreinee.dto.ClienteDTO;
import br.com.softplan.desafiotreinee.dto.ExameDTO;

@Component
public class ExameMock {
	
	
	
	
	private static final String exames[] = new String[8];
	
	public void addExames() {
		exames[0] = "HEMOGRAMA";
		exames[1] = "GLICEMIA EM JEJUM";
		exames[2] = "COLESTEROL E TRIGLICERÍDEOS";
		exames[3] = "UREIA E CREATINA";
		exames[4] = "TGO (AST) E TGP (ALT)";
		exames[5] = "TSH E T4 LIVRE";
		exames[6] = "ELETROCARDIOGRAMA";
		exames[7] = "ECOCARDIOGRAMA";
		
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
