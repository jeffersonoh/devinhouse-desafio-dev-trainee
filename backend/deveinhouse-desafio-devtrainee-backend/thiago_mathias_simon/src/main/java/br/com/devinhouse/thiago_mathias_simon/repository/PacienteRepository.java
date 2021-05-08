package br.com.devinhouse.thiago_mathias_simon.repository;

import br.com.devinhouse.thiago_mathias_simon.entity.PacienteEntity;
import org.springframework.data.repository.CrudRepository;

public interface PacienteRepository extends CrudRepository<PacienteEntity, Long> {
}
