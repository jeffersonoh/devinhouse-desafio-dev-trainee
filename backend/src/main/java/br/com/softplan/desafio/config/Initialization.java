package br.com.softplan.desafio.config;

import br.com.softplan.desafio.entity.Cliente;
import br.com.softplan.desafio.entity.Consulta;
import br.com.softplan.desafio.entity.Exame;
import br.com.softplan.desafio.repository.ExameRepository;
import br.com.softplan.desafio.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Random;

@Configuration
public class Initialization implements CommandLineRunner {

    @Autowired
    ExameRepository exameRepository;

    @Autowired
    ClienteService clienteService;

    @Override
    public void run(String... args) {
        Random random = new Random();

        String[] nomesExames = {"Hemograma", "Glicemia em Jejum", "Colesterol e Triglicerídeos", "Ureia e Creatina", "TGO (AST) e TGP (ALT)", "TSH e T4 Livre", "Ácido úrico", "Exames de Urina", "Eletrocardiograma", "Teste Ergométrico", "Ecocardiograma"};

        for (String nomeExame : nomesExames) {
            exameRepository.save(new Exame(nomeExame));
        }
        List<Exame> exames = exameRepository.findAll();
        int qtdadeExames = exames.size();

        String[] nomesClientes = {"Fulano de Tal", "Beltrano da Silva", "Sicrano de Souza", "Dino da Silva Sauro", "Fran da Silva Sauro", "Zilda Phillips", "Homer Simpson", "Marge Simpson"};

        for (String nomeCliente : nomesClientes) {
            Cliente cliente = new Cliente();
            String cpf = "";
            for (int i = 0; i < 11; i++) {
                cpf = cpf.concat(String.valueOf(random.nextInt(10)));
            }
            cliente.setNome(nomeCliente);
            cliente.setCpf(cpf);
            cliente.setDataNascimento(LocalDate.now().minusDays(random.nextInt(43954) + 1));

            clienteService.cadastrarCliente(cliente);
        }
        List<Cliente> clientes = clienteService.buscarTodosOsClientes();


        for (Cliente cliente : clientes) {
            int numConsultas = random.nextInt(4);

            for (int i = 0; i < numConsultas; i++) {
                Consulta consulta = new Consulta();
                consulta.setData(LocalDate.now().plusDays(random.nextInt(239) + 1));
                consulta.setHora(LocalTime.of(12, 0));
                consulta.setExame(exames.get(random.nextInt(qtdadeExames)));

                clienteService.adicionarConsulta(cliente.getId(), consulta);
            }
        }

    }
}
