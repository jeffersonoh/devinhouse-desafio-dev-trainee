package devtrainee.ejnn.backend.tests.integration;

import devtrainee.ejnn.backend.tests.integration.IntegrationTests;

import java.util.List;
import java.util.ArrayList;

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
import org.junit.Ignore;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import org.springframework.beans.factory.annotation.Autowired;

import static org.springframework.http.MediaType.APPLICATION_JSON;

import devtrainee.ejnn.backend.dtos.ClienteOutputDTO;


@Category({IntegrationTests.class})
@SpringBootTest
@Transactional
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
public class ClienteTests {
    
    public static ObjectMapper mapper;
    public static String mockedClienteJson;

    @Autowired
    public MockMvc mvc;

    @BeforeClass
    public static void initialization() {
	mapper = new ObjectMapper();
	mapper.registerModule(new JavaTimeModule());
	mockedClienteJson = "{"
	    + "\"nome\": \"Muad\","
	    + "\"sobrenome\": \"'dib\","
	    + "\"dataDeNascimento\": \"2021-04-01\","
	    + "\"cpf\": \"99999999999\""
	    + "}";
    }

    @Test
    public void postCreatesResource() throws Exception {
	mvc.perform(post("/clientes")
		    .contentType(APPLICATION_JSON)
		    .content(mockedClienteJson)
		    )
	    .andExpect(status().isCreated());
    }
    
    @Test
    @Ignore("@Transactional seems to hold the first post, making it so there's no conflict.")
    public void wontCreateClientWithAlreadyRegisteredCpf() throws Exception {
	
	String mockedClienteJsonB = "{"
	    + "\"nome\": \"Paul\","
	    + "\"sobrenome\": \"Atreides\","
	    + "\"dataDeNascimento\": \"2021-01-04\","
	    + "\"cpf\": \"99999999999\""
	    + "}";
	
	mvc.perform(post("/clientes")
		    .contentType(APPLICATION_JSON)
		    .content(mockedClienteJson));
	
	mvc.perform(post("/clientes")
		    .contentType(APPLICATION_JSON)
		    .content(mockedClienteJsonB))
	    .andExpect(status().isBadRequest());
    }
    
    @Test
    public void getClienteById() throws Exception {
	
    	String createdClienteJson = mvc.perform(post("/clientes")
    						.contentType(APPLICATION_JSON)
    						.content(mockedClienteJson))
    	    .andReturn().getResponse().getContentAsString();
	
	ClienteOutputDTO cliente = mapper.readValue(createdClienteJson, ClienteOutputDTO.class);
	
	mvc.perform(get("/clientes/" + cliente.getId()))
	   .andExpect(status().isOk());
    }

    @Test
    public void inexistentIdIsNotFound() throws Exception {
	mvc.perform(get("/clientes/99999"))
	    .andExpect(status().isNotFound());
    }

    @Test
    public void searchByCpf() throws Exception {

	String createdClienteJson = mvc.perform(post("/clientes")
						.contentType(APPLICATION_JSON)
						.content(mockedClienteJson))
	    .andReturn().getResponse().getContentAsString();

	String responseBody = mvc.perform(get("/clientes?cpf=99999999999"))
	    .andReturn().getResponse().getContentAsString();
	System.out.println(responseBody);

	ClienteOutputDTO[] clientes = mapper.readValue(responseBody, ClienteOutputDTO[].class);
	ClienteOutputDTO createdCliente = mapper.readValue(createdClienteJson, ClienteOutputDTO.class);
	ClienteOutputDTO clienteFound = clientes[0];

	assertEquals(createdCliente, clienteFound);
    }
    
}
