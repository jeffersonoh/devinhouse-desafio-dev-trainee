package br.com.softplan.desafio.devtrainee.repository;

import br.com.softplan.desafio.devtrainee.entity.Agendamento;

import br.com.softplan.desafio.devtrainee.entity.Cliente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface AgendamentoRepository
        extends JpaRepository<Agendamento, Long> {
}
