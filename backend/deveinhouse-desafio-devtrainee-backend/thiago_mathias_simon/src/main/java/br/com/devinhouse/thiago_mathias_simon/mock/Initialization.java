
package br.com.devinhouse.thiago_mathias_simon.mock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import br.com.devinhouse.thiago_mathias_simon.entity.ProcessoEntity;
import br.com.devinhouse.thiago_mathias_simon.repository.ProcessoRepository;


@Configuration
public class Initialization implements CommandLineRunner {

	@Autowired
	ProcessoRepository repo;

	@Override
	public void run(String... args) throws Exception {

		final int QUANTIDADE_DE_PROCESSOS = 40;

		for (int i = 1; i <= QUANTIDADE_DE_PROCESSOS; i++) {
			ProcessoEntity entity = new ProcessoEntity();
			entity.setCdAssunto(i);
			entity.setCdInteressado(i);
			entity.setDescricao("Processo n. " + i + " do desafio DEVinHouse Módulo II.");
			entity.setDescricaoAssunto("Assunto " + i + " do desafio DEVinHouse Módulo II.");
			entity.setNmInteressado("Thiago Mathias Simon");
			entity.setNuAnoProcesso(i < (QUANTIDADE_DE_PROCESSOS / 2) ? "2020" : "2021");
			entity.setNuProcesso(i);
			entity.setSgOrgaoProcesso("SOFT");
			entity.setChaveProcesso(entity.getSgOrgaoProcesso() + " " + entity.getNuProcesso() + "/" + entity.getNuAnoProcesso());
			repo.save(entity);
		}
	}
}
