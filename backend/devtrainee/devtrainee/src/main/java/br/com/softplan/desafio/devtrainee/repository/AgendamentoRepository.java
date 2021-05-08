package br.com.softplan.desafio.devtrainee.repository;

import br.com.softplan.desafio.devtrainee.entity.Agendamento;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AgendamentoRepository
        extends JpaRepository<Agendamento, Long> {
}

