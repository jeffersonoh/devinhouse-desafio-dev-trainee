package br.com.softplan.desafiotreinee.mock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import br.com.softplan.desafiotreinee.dto.ClienteDTO;

@Component
public class ClienteMock {
	
	
	
	
	public List<ClienteDTO> getAllClientes(){
		List<ClienteDTO> listClientes = new ArrayList<ClienteDTO>();
		
		int qtdClientes = 20;
		
		for (int i = 0; i < qtdClientes; i++) {
			
			ClienteDTO dto = new ClienteDTO();
			dto.setCpf(i+1);
			dto.setId(i+1);
			dto.setNome("nome "+ i+1);
			dto.setSobrenome("sobrenome "+ i+1);
			dto.setDataNascimento("13/03/1993");
			
			listClientes.add(dto);
		}
		return listClientes;
	}

}
/*
ClienteDTO dto1 = new ClienteDTO(1, "nome1 ", "sobreno1 ", "13/10/1990", 1);
ClienteDTO dto2 = new ClienteDTO(2, "nome2 ", "sobreno2 ", "03/11/1999", 2);
ClienteDTO dto3 = new ClienteDTO(3, "nome3 ", "sobreno3 ", "13/03/1993", 3);

listClientes.add(dto1);
listClientes.add(dto2);
listClientes.add(dto3);


return listClientes;
*/