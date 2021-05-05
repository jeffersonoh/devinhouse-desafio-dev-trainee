package br.com.softplan.desafiotreinee.mock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import br.com.softplan.desafiotreinee.dto.ClienteDTO;
import br.com.softplan.desafiotreinee.dto.ExameDTO;

@Component
public class ClienteMock {

	ClienteDTO dto1 = new ClienteDTO("82533786373", "Ana", "Dias", "13/01/1990");
	ClienteDTO dto2 = new ClienteDTO("11347765190", "Maria", "Costa", "03/02/1980");
	ClienteDTO dto3 = new ClienteDTO("71469653338", "Joana", "Fraga", "20/03/1995");
	ClienteDTO dto4 = new ClienteDTO("16684256458", "Pedro", "Nunes", "30/04/1999");
	ClienteDTO dto5 = new ClienteDTO("64225626750", "Lucas", "Santos", "01/05/2000");
	ClienteDTO dto6 = new ClienteDTO("32521375772", "Miguel", "Silva", "16/06/2003");
	ClienteDTO dto7 = new ClienteDTO("14234311111", "Priscila", "Nunes", "10/04/2010");
	ClienteDTO dto8 = new ClienteDTO("43558525477", "Godofredo", "Gonçalves", "15/08/1994");
	ClienteDTO dto9 = new ClienteDTO("22721753410", "Julio", "Bernardes", "13/10/1999");
	ClienteDTO dto10 = new ClienteDTO("44441276435", "Julia", "Silva", "30/11/1993");
	ClienteDTO dto11 = new ClienteDTO("31634121490", "Luana", "Pedroso", "29/12/1978");

	public List<ClienteDTO> getAllClientes() {
		List<ClienteDTO> listClientes = new ArrayList<ClienteDTO>();
		listClientes.add(dto1);
		listClientes.add(dto2);
		listClientes.add(dto3);
		listClientes.add(dto4);
		listClientes.add(dto5);
		listClientes.add(dto6);
		listClientes.add(dto7);
		listClientes.add(dto8);
		listClientes.add(dto9);
		listClientes.add(dto10);
		listClientes.add(dto11);

		return listClientes;
	}

}
