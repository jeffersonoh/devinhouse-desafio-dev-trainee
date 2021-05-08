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

import org.springframework.beans.factory.annotation.Autowired;

import devtrainee.ejnn.backend.dtos.ExameOutputDTO;


@Category({IntegrationTests.class})
@SpringBootTest
@Transactional
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
public class ExameTests {

    public static ObjectMapper mapper;

    @Autowired
    public MockMvc mvc;

    @BeforeClass
    public static void initialization() {
	mapper = new ObjectMapper();
    }

    @Test
    public void getExames() throws Exception {

	String examesJson = mvc.perform(get("/exames"))
	    .andExpect(status().isOk())
	    .andDo(print())
	    .andReturn().getResponse().getContentAsString();

	// if there was no problem until here, we're good.
	ExameOutputDTO[] exames = mapper.readValue(examesJson, ExameOutputDTO[].class);
    }
}
