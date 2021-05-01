package br.com.softplan.desafio.devtrainee.repository;

import br.com.softplan.desafio.devtrainee.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository
        extends JpaRepository<Cliente, Long> {
    Optional<Cliente> findByCPF(String cpf);

    Optional<Cliente> findClienteByCPF(String cpf);
}
