package br.com.softplan.desafio.devtrainee.config;

import br.com.softplan.desafio.devtrainee.entity.Cliente;
import br.com.softplan.desafio.devtrainee.repository.ClienteRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

import static java.time.Month.*;

@Configuration
public class ClienteConfig {

    @Bean
    CommandLineRunner commandLineRunner(
            ClienteRepository repository
    ) {
      return args -> {
          Cliente al = new Cliente(
                  "Alanderson",
                  "12345678912",
                  LocalDate.of(1998, NOVEMBER, 9)
          );
          Cliente jj = new Cliente(
                  "Joao jose",
                  "12345678913",
                  LocalDate.of(1998, NOVEMBER, 9)

          );
          repository.saveAll(
                  List.of(al, jj)
          );
      };
    }
}
