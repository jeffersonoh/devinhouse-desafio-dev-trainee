package devtrainee.ejnn.backend.tests.integration;

import devtrainee.ejnn.backend.tests.categories.IntegrationTests;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.context.junit4.SpringRunner;

import org.springframework.transaction.annotation.Transactional;

import org.junit.experimental.categories.Category;
import org.junit.runner.RunWith;
import static org.junit.Assert.*;
import org.junit.Test;
import org.junit.BeforeClass;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import devtrainee.ejnn.backend.dtos.AgendamentoOutputDTO;

@Category({IntegrationTests.class})
@SpringBootTest
@Transactional
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
public class AgendamentoTests {

    private static ObjectMapper mapper;

    @Autowired
    public MockMvc mvc;

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
}
