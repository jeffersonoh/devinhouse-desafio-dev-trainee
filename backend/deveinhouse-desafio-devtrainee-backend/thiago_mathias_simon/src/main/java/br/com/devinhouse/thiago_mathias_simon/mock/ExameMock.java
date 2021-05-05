package br.com.devinhouse.thiago_mathias_simon.mock;

import br.com.devinhouse.thiago_mathias_simon.entity.ExameEntity;
import br.com.devinhouse.thiago_mathias_simon.repository.ExameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ExameMock implements CommandLineRunner {

    @Autowired
    ExameRepository repository;

    @Override
    public void run(String... args) throws Exception {

        ExameEntity entity = new ExameEntity();

        entity.setId(1);
        entity.setExamName("HEMOGRAMA");

        repository.save(entity);

        entity.setId(2);
        entity.setExamName("GLICEMIA EM JEJUM");

        repository.save(entity);

        entity.setId(3);
        entity.setExamName("COLESTEROL E TRIGLICERÍDEOS");

        repository.save(entity);

        entity.setId(4);
        entity.setExamName("UREIA E CREATINA");

        repository.save(entity);

        entity.setId(5);
        entity.setExamName("TGO (AST) E TGP (ALT)");

        repository.save(entity);

        entity.setId(6);
        entity.setExamName("TSH E T4 LIVRE");

        repository.save(entity);

        entity.setId(7);
        entity.setExamName("ÁCIDO ÚRICO");

        repository.save(entity);

        entity.setId(8);
        entity.setExamName("EXAMES DE URINA");

        repository.save(entity);

        entity.setId(9);
        entity.setExamName("ELETROCARDIOGRAMA");

        repository.save(entity);

        entity.setId(10);
        entity.setExamName("TESTE ERGOMÉTRICO");

        repository.save(entity);

        entity.setId(11);
        entity.setExamName("ECOCARDIOGRAMA");

        repository.save(entity);

        entity.setId(12);
        entity.setExamName("RAIO-X");

        repository.save(entity);

    }
}