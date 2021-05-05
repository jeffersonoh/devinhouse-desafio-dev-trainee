package br.com.devinhouse.thiago_mathias_simon.controller;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import br.com.devinhouse.thiago_mathias_simon.dto.ProcessoRemovidoDTO;
import br.com.devinhouse.thiago_mathias_simon.dto.ProcessoCriadoDTO;
import br.com.devinhouse.thiago_mathias_simon.entity.ProcessoEntity;
import br.com.devinhouse.thiago_mathias_simon.service.ProcessoService;

@RestController
@RequestMapping(value = "/v1" + "/processos")
public class ProcessoController {

	private static final String HEADERS_VERSION_1 = "api-version=v1";

	@Autowired
	private ProcessoService service;

	@ResponseStatus(value = CREATED)
	@PostMapping(headers = HEADERS_VERSION_1, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public ProcessoCriadoDTO cadastrarProcesso(@RequestBody ProcessoEntity novoProcesso) {
		return service.cadastrarProcesso(novoProcesso);
	}

	@GetMapping(headers = HEADERS_VERSION_1, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public Iterable<ProcessoEntity> listarProcessos() {
		return service.listarProcessos();
	}

	@GetMapping(headers = HEADERS_VERSION_1, value = "/id/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public Optional<ProcessoEntity> buscarProcessoPorId(@PathVariable long id) {
		return service.buscarProcessoPorId(id);
	}

	@GetMapping(headers = HEADERS_VERSION_1, value = "/chave_processo" , produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public ProcessoEntity buscarProcessoPorChave(@RequestParam String valor) {
		return service.buscarProcessoPorChave(valor);
	}

	@PutMapping(headers = HEADERS_VERSION_1, value = "/id/{id}", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public ProcessoEntity atualizarProcesso(@PathVariable long id, @RequestBody ProcessoEntity processoAtualizado) {
		return service.atualizarProcessso(id, processoAtualizado);
	}

	@DeleteMapping(headers = HEADERS_VERSION_1, value = "/id/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	public ProcessoRemovidoDTO deletarProcesso(@PathVariable long id) {
		return service.deletarProcesso(id);
	}
}
