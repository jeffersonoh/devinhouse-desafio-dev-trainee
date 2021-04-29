package br.com.softplan.desafio.devtrainee.service;

import br.com.softplan.desafio.devtrainee.entity.Cliente;
import br.com.softplan.desafio.devtrainee.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;

    public List<Cliente> getCliente() {
        return clienteRepository.findAll();
    }

    public void novoCliente(Cliente cliente){
        Optional<Cliente> clienteByCPF = clienteRepository
                .findClienteByCPF(cliente.getCPF());
        if (clienteByCPF.isPresent()) {
            throw new IllegalStateException("CPF já cadastrado");
        }
        clienteRepository.save(cliente);
    }

    public Optional<Cliente> getClienteById(Long id) {
        return clienteRepository.findById(id);
    }


    public void deletarCliente(Long id) {
        boolean existe = clienteRepository.existsById(id);
        if(!existe) {
            throw new IllegalStateException("O cliente com id " + id + " não existe");
        }
        clienteRepository.deleteById(id);
    }

//    @Transactional
//    public void atualizarCliente(Long id, String nome, String cpf) {
//        Cliente cliente = clienteRepository.findById(id).orElseThrow(() -> new IllegalStateException(
//                "O cliente com id " + id + " não existe"
//        ));
//        if (nome != null
//                && nome.length() > 0
//                && !Objects.equals(cliente.getNome(), nome)
//        ) {
//            cliente.setNome(nome);
//        }
//        if (cpf != null
//                && cpf.length() > 0
//                && !Objects.equals(cliente.getCPF(), cpf)
//        ) {
//            Optional<Cliente> clienteOptional = clienteRepository
//                    .findClienteByCPF(cpf);
//            if (clienteOptional.isPresent()) {
//                throw new  IllegalStateException("CPF atualizado");
//            }
//            cliente.setCPF(cpf);
//        }
//    }

    public List<Cliente> atualizarCliente(Long id, Cliente cliente) {
        Cliente cliente1 = clienteRepository.findById(id).orElseThrow(() -> new IllegalStateException(
                "O cliente com id " + id + " não existe"));
        List<Cliente> clientes = clienteRepository.findAll();

        for (Cliente clienteLista : clientes) {

            if (id.equals(clienteLista.getId())) {
                if (cliente.getNome() != null) {
                    clienteLista.setNome(cliente.getNome());
                }
                if (cliente.getCPF() != null) {
                    clienteLista.setCPF(cliente.getCPF());
                }
            }


        }


        return clientes;
    }

    public Cliente getClienteByCPF(String cpf) {
        List<Cliente> clientes = clienteRepository.findAll();

        Cliente cliente = new Cliente();

        for (Cliente lista : clientes){
            if (cpf.equals(lista.getCPF())) {
                cliente  = lista;
            }
        }
        return cliente;
    }
}

