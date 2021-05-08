package com.sistemadeagendamento.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistemadeagendamento.model.Cliente;

@Repository
public interface ClientesRepository extends JpaRepository<Cliente, Integer>{

	Optional<Cliente> findByCpf(String cpf);
}
