package br.com.softplan.desafio.controller;

import br.com.softplan.desafio.entity.Cliente;
import br.com.softplan.desafio.entity.Consulta;
import br.com.softplan.desafio.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(value = "/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    /**
     * GET /clientes
     */
    @GetMapping(value = "/", produces = APPLICATION_JSON_VALUE)
    public List<Cliente> listarTodosClientes() {

        return clienteService.buscarTodosOsClientes();
    }

    /**
     * GET /clientes/{id}
     */
    @GetMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
    public Cliente buscarClientePeloID(@PathVariable Long id) {

        return clienteService.buscarClientePeloID(id);
    }

    /**
     * GET /clientes/buscar?cpf={cpf}
     */
    @GetMapping(value = "/buscar", produces = APPLICATION_JSON_VALUE)
    public Cliente buscarClientePeloCPF(@RequestParam String cpf) {

        return clienteService.buscarClientePeloCPF(cpf);
    }

    /**
     * POST /clientes/
     */
    @PostMapping(value = "/", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(code = CREATED)//, reason = "Cadastro efetuado com sucesso.")
    public void cadastrarCliente(@RequestBody Cliente cliente) {

        clienteService.cadastrarCliente(cliente);
    }

    /**
     * DELETE /clientes/{id}
     */
    @DeleteMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(code = OK)//, reason = "Cadastro excluído com sucesso.")
    public void excluirCliente(@PathVariable Long id) {

        clienteService.excluirCliente(id);
    }

    /**
     * PUT /clientes/{id}
     */
    @PutMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(code = OK)//, reason = "Cadastro atualizado com sucesso.")
    public void atualizarCliente(@PathVariable Long id, @RequestBody Cliente dados_novos) {

        clienteService.atualizarDadosDoCliente(id, dados_novos);
    }

    /**
     * CONSULTAS
     */

    // POST /clientes/{id_cliente}/consulta + {consulta}
    @PostMapping(value = "/{id_cliente}/consulta", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(code = CREATED)//, reason = "Consulta adicionada com sucesso.")
    public void adicionarConsulta(@PathVariable Long id_cliente, @RequestBody Consulta consulta) {

        clienteService.adicionarConsulta(id_cliente, consulta);
    }

    // DELETE /clientes/{id_cliente}/consulta/{id_consulta}
    @DeleteMapping(value = "/{id_cliente}/consulta/{id_consulta}", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(code = OK)//, reason = "Consulta removida com sucesso.")
    public void removerConsulta(@PathVariable Long id_cliente, @PathVariable Long id_consulta) {

        clienteService.removerConsulta(id_cliente, id_consulta);
    }

    // PUT /clientes/{id_cliente}/consulta/{id_consulta}
    @PutMapping(value = "/{id_cliente}/consulta/{id_consulta}", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(code = OK, reason = "Consulta atualizada com sucesso.")
    public void atualizarConsulta(@PathVariable Long id_cliente, @PathVariable Long id_consulta, @RequestBody Consulta dados_novos) {

        clienteService.atualizarConsulta(id_cliente, id_consulta, dados_novos);
    }

}
