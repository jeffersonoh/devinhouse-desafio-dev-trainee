package br.com.izy.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.izy.dto.ExameDTOOutput;
import br.com.izy.dto.ExameDTOInput;
import br.com.izy.entity.Exame;
import br.com.izy.service.ExameService;

@CrossOrigin
@RestController
@RequestMapping(value = "/v1" + "/exames")
public class ExameController {
	
	@Autowired
	private ExameService service;
	
	@GetMapping(produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.OK)
	public List<ExameDTOOutput> findAll(@RequestParam(required = false) String busca) {
		List<Exame> exames = service.findAll(busca);
		
		List<ExameDTOOutput> result = new ArrayList<ExameDTOOutput>();
		
		exames.forEach(exame -> {
			result.add(new ExameDTOOutput(exame));
		});
		
		return result;
	}
	
	@GetMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.OK)
	public ExameDTOOutput find(@PathVariable Long id) {
		Exame exame = service.find(id);
		
		return new ExameDTOOutput(exame);
	}
	
	@PostMapping(produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.CREATED)
	public ExameDTOOutput create(@Valid @RequestBody ExameDTOInput exameDTO) {
		
		Exame result = service.create(exameDTO);
		
		return new ExameDTOOutput(result);
	}
	
	@PutMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void update(@PathVariable Long id, @RequestBody ExameDTOInput exameDTO) {		
		service.update(id, exameDTO);
	}
	
	@DeleteMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
}
