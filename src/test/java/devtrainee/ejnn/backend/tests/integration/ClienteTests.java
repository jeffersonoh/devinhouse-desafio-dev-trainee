package devtrainee.ejnn.backend.tests.integration;

import devtrainee.ejnn.backend.tests.integration.IntegrationTests;

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
import org.junit.Test;
import org.junit.BeforeClass;
import org.junit.Ignore;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;

import static org.springframework.http.MediaType.APPLICATION_JSON;

import devtrainee.ejnn.backend.dtos.ClienteOutputDTO;


@Category({IntegrationTests.class})
@SpringBootTest
@Transactional
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
public class ClienteTests {
    
    @Autowired
    public MockMvc mvc;
    public static ObjectMapper mapper;

    @BeforeClass
    public static void initialization() {
	mapper = new ObjectMapper();
    }

    @Test
    public void postCreatesResource() throws Exception {

	String clienteJson = "{"
	    + "\"nome\": \"Muad\","
	    + "\"sobrenome\": \"'dib\","
	    + "\"dataDeNascimento\": \"2021-04-01\","
	    + "\"cpf\": \"99999999999\""
	    + "}";

	mvc.perform(post("/clientes")
		    .contentType(APPLICATION_JSON)
		    .content(clienteJson)
		    )
	    .andExpect(status().isCreated());
    }
    
    @Test
    @Ignore("@Transactional seems to hold the first post; making it so there's no conflict.")
    public void wontCreateClientWithAlreadyRegisteredCpf() throws Exception {
	
	String clienteJsonA = "{"
	    + "\"nome\": \"Muad\","
	    + "\"sobrenome\": \"'dib\","
	    + "\"dataDeNascimento\": \"2021-04-01\","
	    + "\"cpf\": \"99999999999\""
	    + "}";

	String clienteJsonB = "{"
	    + "\"nome\": \"Paul\","
	    + "\"sobrenome\": \"Atreides\","
	    + "\"dataDeNascimento\": \"2021-04-01\","
	    + "\"cpf\": \"99999999999\""
	    + "}";
	
	mvc.perform(post("/clientes")
		    .contentType(APPLICATION_JSON)
		    .content(clienteJsonA));
	
	mvc.perform(post("/clientes")
		    .contentType(APPLICATION_JSON)
		    .content(clienteJsonB))
	    .andExpect(status().isBadRequest());
    }
    
}
