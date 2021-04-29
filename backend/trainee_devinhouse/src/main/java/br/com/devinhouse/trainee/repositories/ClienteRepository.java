package br.com.devinhouse.trainee.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devinhouse.trainee.entities.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
