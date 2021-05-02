package br.com.izy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.izy.entity.Cliente;
import br.com.izy.exception.ClienteNotFoundException;
import br.com.izy.repository.ClienteRepository;
import br.com.izy.util.AtualizaColunasUtil;

@Service
public class ClienteService {
	
	@Autowired
	ClienteRepository repository;
	
	public List<Cliente> findAll(String busca) {
		if (busca != null) {
			return (List<Cliente>) repository.findByNomeContainingIgnoreCaseOrCpfContainingIgnoreCase(busca, busca);
		}
		
		return (List<Cliente>) repository.findAll();
	}
	
	public Cliente find(Long id, String cpf) {
		Optional<Cliente> result = repository.findByIdOrCpf(id, cpf);
		
		return result.orElseThrow(() -> new ClienteNotFoundException());
	}
	
	public Cliente create(Cliente cliente) {
		return repository.save(cliente);
	}
	
	public void update(Long id, Cliente body) {
		Optional<Cliente> result = repository.findById(id);
		
		Cliente cliente = result.orElseThrow(() -> new ClienteNotFoundException());
		
		BeanUtils.copyProperties(body, cliente, AtualizaColunasUtil.getNullPropertyNames(body));
		
		repository.save(cliente);
	}
	
	public void delete(Long id) {
		Optional<Cliente> result = repository.findById(id);
		
		Cliente cliente = result.orElseThrow(() -> new ClienteNotFoundException());
		
		repository.delete(cliente);
	}
	
}
