package br.devin.devtrainee.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.devin.devtrainee.backend.model.Agendamento;
import br.devin.devtrainee.backend.model.Cliente;
import br.devin.devtrainee.backend.model.Exame;

@Repository
public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
	
	List<Agendamento> findByExameIsAndDataIs(Exame exame,String data);
	
	List<Agendamento> findByClienteIs(Cliente cliente);

}
