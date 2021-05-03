package devtrainee.ejnn.backend.tests.integration;

import devtrainee.ejnn.backend.tests.categories.IntegrationTests;

import java.util.List;
import java.time.LocalDateTime;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.context.junit4.SpringRunner;

import static org.springframework.http.MediaType.APPLICATION_JSON;

import org.springframework.transaction.annotation.Transactional;

import org.junit.experimental.categories.Category;
import org.junit.runner.RunWith;
import static org.junit.Assert.*;
import org.junit.Test;
import org.junit.BeforeClass;
import org.junit.Ignore;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import org.modelmapper.ModelMapper;

import org.springframework.beans.factory.annotation.Autowired;

import devtrainee.ejnn.backend.dtos.AgendamentoOutputDTO;
import devtrainee.ejnn.backend.dtos.AgendamentoUpdateDTO;


@Category({IntegrationTests.class})
@SpringBootTest
@Transactional
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
public class AgendamentoTests {

    private static ObjectMapper mapper;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private MockMvc mvc;

    @BeforeClass
    public static void initialization() {
	mapper = new ObjectMapper();
	mapper.registerModule(new JavaTimeModule());
    }

    @Test
    public void getAgendamentos() throws Exception {
	String agendamentosJson = mvc.perform(get("/agendamentos"))
	    .andExpect(status().isOk())
	    .andReturn().getResponse().getContentAsString();

	// if there was no problem up to here, we're good.
	AgendamentoOutputDTO[] agendamentos = mapper.readValue(agendamentosJson, AgendamentoOutputDTO[].class);
    }

    @Test
    @Ignore("db must be seeded for this test to work with the current mvp")
    public void updateAgendamento() throws Exception {

	String agendamentosJson = mvc.perform(get("/agendamentos"))
	    .andExpect(status().isOk())
	    .andReturn().getResponse().getContentAsString();

	AgendamentoOutputDTO[] agendamentos = mapper.readValue(agendamentosJson, AgendamentoOutputDTO[].class);

	AgendamentoOutputDTO expectedAgendamento = agendamentos[0];
	expectedAgendamento.setTimestamp(LocalDateTime.now());

	AgendamentoUpdateDTO agendamentoUpdate = modelMapper.map(expectedAgendamento, AgendamentoUpdateDTO.class);

	String updatedAgendamentoJson = mvc.perform(patch("/agendamentos/" + expectedAgendamento.getId())
						    .contentType(APPLICATION_JSON)
						    .content(mapper.writeValueAsString(agendamentoUpdate)))
	    .andExpect(status().isOk())
	    .andReturn().getResponse().getContentAsString();
						    
	AgendamentoOutputDTO updatedAgendamento = mapper.readValue(updatedAgendamentoJson, AgendamentoOutputDTO.class);

	assertEquals(expectedAgendamento, updatedAgendamento);
    }

    @Test
    @Ignore("db must be seeded for this test to work with the current mvp")
    public void deleteAgendamento() throws Exception {

	String agendamentosJson = mvc.perform(get("/agendamentos"))
	    .andExpect(status().isOk())
	    .andReturn().getResponse().getContentAsString();

	AgendamentoOutputDTO[] agendamentos = mapper.readValue(agendamentosJson, AgendamentoOutputDTO[].class);

	AgendamentoOutputDTO agendamento = agendamentos[0];

	mvc.perform(delete("/agendamentos/" + agendamento.getId()))
	    .andExpect(status().isAccepted());
    }

}
