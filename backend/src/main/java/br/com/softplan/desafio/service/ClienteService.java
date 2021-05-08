package br.com.softplan.desafio.service;

import br.com.softplan.desafio.entity.Cliente;
import br.com.softplan.desafio.entity.Consulta;
import br.com.softplan.desafio.exception.*;
import br.com.softplan.desafio.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ClienteService {


    @Autowired
    private ClienteRepository clienteRepository;

    /**
     * CLIENTES
     */

    public List<Cliente> buscarTodosOsClientes() {

        return clienteRepository.findAll();
    }

    public Cliente buscarClientePeloID(Long id)  {

        return clienteRepository.findById(id).orElseThrow(() -> new NotFoundException("Nenhum cliente encontrado com o ID informado."));
    }

    public Cliente buscarClientePeloCPF(String cpf) {

        return clienteRepository.findByCpf(cpf).orElseThrow(() -> new NotFoundException("Nenhum cliente encontrado com o CPF informado."));
    }

    public void cadastrarCliente(Cliente cliente) {
        if (clienteRepository.existsByCpf(cliente.getCpf()))
            throw new CpfExistente("Não foi possível efetuar o cadastro: O CPF informado já existe no sistema.");

        if (LocalDate.now().compareTo(cliente.getDataNascimento()) <= 0)
            throw new DataInvalidaException("Não foi possível efetuar o cadastro: A data de nascimento deve ser anterior à data atual.");

        if (cliente.getNome().isBlank())
            throw new CampoInvalidoException("Não foi possível efetuar o cadastro: O campo nome deve estar preenchido.");

        clienteRepository.save(cliente);
    }

    public void excluirCliente(Long id) {
        if (!clienteRepository.existsById(id))
            throw new NotFoundException("Não foi possível efetuar a exclusão: Nenhum cliente encontrado com o ID informado.");

        clienteRepository.deleteById(id);
    }

    public void atualizarDadosDoCliente(Long id, Cliente dadosNovos) {
        if (!clienteRepository.existsById(id))
            throw new NotFoundException("Não foi possível efetuar a exclusão: Nenhum cliente encontrado com o ID informado.");

        clienteRepository.findById(id).map(cliente -> {
            if (dadosNovos.getNome() != null)
                cliente.setNome(dadosNovos.getNome());

            if (dadosNovos.getCpf() != null) {

                // se novo cpf for diferente do cliente original E existir no sistema entao ja pertence a outro cliente => lanca excecao
                if (!cliente.getCpf().equals(dadosNovos.getCpf()) && clienteRepository.existsByCpf(dadosNovos.getCpf()))
                    throw new CpfExistente("Não foi possível atualizar os dados do cliente: O CPF informado já existe no sistema.");

                cliente.setCpf(dadosNovos.getCpf());
            }

            if (dadosNovos.getDataNascimento() != null) {
                if (LocalDate.now().compareTo(dadosNovos.getDataNascimento()) < 0)
                    throw new DataInvalidaException("Não foi possível atualizar os dados do cliente: A data de nascimento deve ser anterior à data atual.");

                cliente.setDataNascimento(dadosNovos.getDataNascimento());
            }

            return clienteRepository.save(cliente);
        });
    }

    /**
     * CONSULTAS
     */

    //  ADICIONAR CONSULTA
    public void adicionarConsulta(Long idCliente, Consulta consulta) {
        Cliente cliente = clienteRepository.findById(idCliente).orElse(null);

        if (cliente == null)
            throw new NotFoundException("Não foi possível adicionar a consulta: Nenhum cliente encontrado com o ID informado.");

        if (LocalDate.now().compareTo(consulta.getData()) > 0)
            throw new DataInvalidaException("Não foi possível adicionar a consulta: A data deve ser igual ou posterior à data atual.");

        cliente.adicionarConsulta(consulta);
        clienteRepository.save(cliente);
    }

    //  REMOVER CONSULTA
    public void removerConsulta(Long idCliente, Long idConsulta) {
        Cliente cliente = clienteRepository.findById(idCliente).orElse(null);

        if (cliente == null)
            throw new NotFoundException("Não foi possível remover a consulta: Nenhum cliente encontrado com o ID informado.");

        Consulta consulta = cliente.buscarConsultaPeloID(idConsulta);

        if (consulta == null)
            throw new NotFoundException("Não foi possível remover a consulta: Nenhuma consulta encontrada com o ID informado.");

        cliente.removerConsulta(consulta);
        clienteRepository.save(cliente);
    }

    //  ATUALIZAR CONSULTA
    public void atualizarConsulta(Long idCliente, Long idConsulta, Consulta dadosNovos)  {
        Cliente cliente = clienteRepository.findById(idCliente).orElse(null);

        if (cliente == null)
            throw new NotFoundException("Não foi possível atualizar a consulta: ID do cliente não encontrado.");

        Consulta consulta = cliente.buscarConsultaPeloID(idConsulta);

        if (consulta == null)
            throw new NotFoundException("Não foi possível atualizar a consulta: Nenhuma consulta encontrada com o ID informado.");

        if (dadosNovos.getData() != null && LocalDate.now().compareTo(dadosNovos.getData()) > 0)
            throw new DataInvalidaException("Não foi possível atualizar a consulta: A data deve ser igual ou posterior à data atual.");

        cliente.atualizarConsulta(consulta, dadosNovos);
        clienteRepository.save(cliente);
    }

}
