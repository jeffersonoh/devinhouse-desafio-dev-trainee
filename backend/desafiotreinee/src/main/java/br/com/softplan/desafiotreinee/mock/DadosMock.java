package br.com.softplan.desafiotreinee.mock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import br.com.softplan.desafiotreinee.dto.AgendaDTO;
import br.com.softplan.desafiotreinee.dto.ClienteDTO;
import br.com.softplan.desafiotreinee.dto.ExameDTO;

@Component
public class DadosMock {

	ClienteDTO dto1 = new ClienteDTO(1, "82533786373", "Ana", "Dias", "13/01/1990");
	ClienteDTO dto2 = new ClienteDTO(2, "11347765190", "Maria", "Costa", "03/02/1980");
	ClienteDTO dto3 = new ClienteDTO(3, "71469653338", "Joana", "Fraga", "20/03/1995");
	ClienteDTO dto4 = new ClienteDTO(4, "16684256458", "Pedro", "Nunes", "30/04/1999");
	ClienteDTO dto5 = new ClienteDTO(5, "64225626750", "Lucas", "Santos", "01/05/2000");
	ClienteDTO dto6 = new ClienteDTO(6, "32521375772", "Miguel", "Silva", "16/06/2003");
	ClienteDTO dto7 = new ClienteDTO(7, "14234311111", "Priscila", "Nunes", "10/04/2010");
	ClienteDTO dto8 = new ClienteDTO(8, "43558525477", "Godofredo", "Gonçalves", "15/08/1994");
	ClienteDTO dto9 = new ClienteDTO(9, "22721753410", "Julio", "Bernardes", "13/10/1999");
	ClienteDTO dto10 = new ClienteDTO(10, "44441276435", "Julia", "Silva", "30/11/1993");
	ClienteDTO dto11 = new ClienteDTO(11, "31634121490", "Luana", "Pedroso", "29/12/1978");

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

	public List<ExameDTO> getAllExames() {
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

	AgendaDTO agendamento1 = new AgendaDTO(1, "31634121490", "HEMOGRAMA", "26/05/2021", "09:15");
	AgendaDTO agendamento2 = new AgendaDTO(2, "16684256458", "ECOCARDIOGRAMA", "30/05/2021", "14:15");
	AgendaDTO agendamento3 = new AgendaDTO(3, "43558525477", "HEMOGRAMA", "11/05/2021", "15:00");
	AgendaDTO agendamento4 = new AgendaDTO(4, "11347765190", "UREIA E CREATINA", "16/05/2021", "10:50");
	AgendaDTO agendamento5 = new AgendaDTO(5, "82533786373", "TGO (AST) E TGP (ALT)", "20/05/2021", "11:00");

	public List<AgendaDTO> getAllAgendas() {
		List<AgendaDTO> listAgendas = new ArrayList<AgendaDTO>();

		listAgendas.add(agendamento1);
		listAgendas.add(agendamento2);
		listAgendas.add(agendamento3);
		listAgendas.add(agendamento4);
		listAgendas.add(agendamento5);

		return listAgendas;

	}

}