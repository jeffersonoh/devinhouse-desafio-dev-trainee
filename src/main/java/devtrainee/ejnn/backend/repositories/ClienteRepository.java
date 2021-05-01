package devtrainee.ejnn.backend.repositories;

import java.util.List;

import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import devtrainee.ejnn.backend.domain.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    List<Cliente> findClienteByCpfLike(String cpf);
}
