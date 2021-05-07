package br.com.devinhouse.spring.trabalhospringboot.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devinhouse.spring.trabalhospringboot.dto.ClienteDTO;
import br.com.devinhouse.spring.trabalhospringboot.repository.ClienteRepository;
import br.com.devinhouse.spring.trabalhospringboot.service.exceptions.EntityNotFoundException;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository repository;

    public void cadastroCliente(ClienteDTO cliente) {
        if (validadorDeCadastro(cliente)) {
            this.repository.save(cliente);
            this.repository.flush();
        } else {
            throw new EntityNotFoundException("Não foi possivel cadastrar esse cliente, o CPF " + cliente.getCpf()
                    + " já consta em nosso sistema.");
        }
    }

    private Boolean validadorDeCadastro(ClienteDTO cliente) {
        List<ClienteDTO> clientesCadastrados = new ArrayList<ClienteDTO>();

        for (int x = 0; x < this.repository.count(); x++) {
            if (this.repository.existsById(x + 1)) {
                clientesCadastrados.add(ClienteDTO.converter(this.repository.getOne(x + 1)));
            }
        }
        for (ClienteDTO clienteDTO : clientesCadastrados) {
            if (clienteDTO.getCpf().intern() == cliente.getCpf().intern()) {
                return false;
            }
        }
        return true;
    }

    public void atualizarCliente(ClienteDTO clienteAtualizado, Integer id) {
        if (validadorDeExistencia(id)) {
            if (validadorDeAtualizar(clienteAtualizado, id)) {
                ClienteDTO clienteCadastrado = ClienteDTO.converter(this.repository.getOne(id));
                if (clienteAtualizado.getNome() != null) {
                    if (clienteAtualizado.getNome() != clienteCadastrado.getNome()) {
                        this.repository.getOne(id).setNome(clienteAtualizado.getNome());
                    }
                }
                if (clienteAtualizado.getCpf() != null) {
                    if (clienteAtualizado.getCpf() != clienteCadastrado.getCpf()) {
                        this.repository.getOne(id).setCpf(clienteAtualizado.getCpf());
                    }
                }
                if (clienteAtualizado.getDdn() != null) {
                    if (clienteAtualizado.getDdn() != clienteCadastrado.getDdn()) {
                        this.repository.getOne(id).setDdn(clienteAtualizado.getDdn());
                    }
                }
                this.repository.flush();
            } else {
                throw new EntityNotFoundException("Não foi possivel editar esse cliente, o CPF "
                        + clienteAtualizado.getCpf() + " já consta em nosso sistema.");
            }
        } else {
            throw new EntityNotFoundException("Não foi localizado o cadastro desse cliente.");
        }
    }

    private Boolean validadorDeAtualizar(ClienteDTO cliente, Integer id) {
        List<ClienteDTO> clientesCadastrados = new ArrayList<ClienteDTO>();
        for (int x = 0; x < repository.count(); x++) {
            if (this.repository.existsById(x + 1)) {
                clientesCadastrados.add(ClienteDTO.converter(this.repository.getOne(x + 1)));
            }
        }
        for (ClienteDTO clienteDTO : clientesCadastrados) {
            if (clienteDTO.getCpf().intern() == cliente.getCpf().intern()) {
                return false;
            }
        }
        return true;
    }

    private Boolean validadorDeExistencia(Integer id) {
        if (!this.repository.existsById(id)) {
            return false;
        }
        return true;
    }

    public void deletarCadastro(Integer id) {
        if (validadorDeExistencia(id)) {
            this.repository.deleteById(id);
            this.repository.flush();
        } else {
            throw new EntityNotFoundException("Não foi localizado o cadastro desse cliente.");
        }
    }

    public List<ClienteDTO> procurarClientePorCpf(String cpf) {
        return this.repository.findByCpfContains(cpf).stream().map(ClienteDTO::converter).collect(Collectors.toList());
    }

    public List<ClienteDTO> listaDeTodosClientesCadastrados() {
        List<ClienteDTO> lista = new ArrayList<ClienteDTO>();
        Integer deletados = 0;
        for (int x = 0; x < this.repository.count(); x++) {
            if (this.repository.existsById(x + 1 + deletados)) {
                lista.add(ClienteDTO.converter(this.repository.getOne(x + 1 + deletados)));
            } else {
                x--;
                deletados++;
            }
        }
        return lista;
    }
}
