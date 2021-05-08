package br.com.softplan.desafio.devtrainee.config;



import br.com.softplan.desafio.devtrainee.entity.Exame;
import br.com.softplan.desafio.devtrainee.repository.ExameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;


import java.util.List;


@Configuration
public class ExameConfig implements CommandLineRunner{

    @Autowired
    ExameRepository repository;


    public void run(String... args) throws Exception  {
            Exame ex1 = new Exame(
                    "Otorrinolaringologista"
            );
            Exame ex2 = new Exame(
                    "Dentista"
            );
            repository.saveAll(
                    List.of(ex1, ex2)
            );
    };
}

