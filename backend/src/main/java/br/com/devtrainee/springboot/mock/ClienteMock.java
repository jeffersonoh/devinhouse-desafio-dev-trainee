package br.com.devtrainee.springboot.mock;

import java.util.ArrayList;
import java.util.GregorianCalendar;
import java.util.List;

import org.springframework.stereotype.Component;

import br.com.devtrainee.springboot.dto.ClienteDTO;

@Component
public class ClienteMock {

	
	public ClienteMock( ) {
		if (cliente == null)
			cliente = new ArrayList<ClienteDTO>();
	}
	
	private static List<ClienteDTO> cliente;
	
	
	public List<ClienteDTO> criarMock() {
		if (cliente.isEmpty() == false)
			return cliente;
		
		ClienteDTO dto = new ClienteDTO();
		dto.setId(10);
		dto.setNome("Janaina Guts");
		dto.setCPF("330.468.460-37");
		dto.setDataDeNascimento(new GregorianCalendar(1995,4,22));
		cliente.add(dto);
		
		ClienteDTO dto1 = new ClienteDTO();
		dto1.setId(11);
		dto1.setNome("Marcia Silva");
		dto1.setCPF("000.463.560-34");
		dto1.setDataDeNascimento(new GregorianCalendar(1775,9,11));
		cliente.add(dto1);
		
		ClienteDTO dto3 = new ClienteDTO();
		dto3.setId(12);
		dto3.setNome("Moises Gustavo de Souza");
		dto3.setCPF("850.623.254-66");
		dto3.setDataDeNascimento(new GregorianCalendar(1963,3,9));
		cliente.add(dto3);
		
		ClienteDTO dto4 = new ClienteDTO();
		dto4.setId(13);
		dto4.setNome("Manuela Silveira");
		dto4.setCPF("516.568.720-07");
		dto4.setDataDeNascimento(new GregorianCalendar(1988,10,5));
		cliente.add(dto4);
		
		ClienteDTO dto5 = new ClienteDTO();
		dto5.setId(14);
		dto5.setNome("Juliete Caone");
		dto5.setCPF("625.946.237-23");
		dto5.setDataDeNascimento(new GregorianCalendar(1981,6,1));
		cliente.add(dto5);
				
				
		return cliente;
	}

}
