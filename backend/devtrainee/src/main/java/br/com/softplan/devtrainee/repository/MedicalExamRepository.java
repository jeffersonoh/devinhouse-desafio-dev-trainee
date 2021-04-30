package br.com.softplan.devtrainee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.softplan.devtrainee.entity.MedicalExamEntity;

@Repository
public interface MedicalExamRepository extends JpaRepository<MedicalExamEntity, Long>{

}
