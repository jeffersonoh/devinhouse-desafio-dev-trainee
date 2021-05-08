package devtrainee.ejnn.backend.repositories;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import devtrainee.ejnn.backend.domain.Exame;


@Repository
public interface ExameRepository extends JpaRepository<Exame, Long> {
}
