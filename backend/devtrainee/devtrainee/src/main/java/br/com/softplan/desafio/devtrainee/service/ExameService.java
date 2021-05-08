package br.com.softplan.desafio.devtrainee.service;

import br.com.softplan.desafio.devtrainee.entity.Exame;
import br.com.softplan.desafio.devtrainee.repository.ExameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExameService {

	@Autowired
	ExameRepository exameRepository;

	public List<Exame> getExames() {
		return exameRepository.findAll();
	}

	public Exame getExameById(Long id) {
		return exameRepository.findById(id).get();
	}

	public Exame getExameByNome(String nomeDoExame) {
		return exameRepository.findExameByNomeDoExame(nomeDoExame).get();
	}
	
	public void novoExame(Exame exame) {
		Optional<Exame> exameExistente = exameRepository.findExameByNomeDoExame(exame.getNomeDoExame());
		if (exameExistente.isPresent()) {
			throw new IllegalStateException("Exame já cadastrado");
		}
		exameRepository.save(exame);
	}

	public Exame atualizarExame(Long id, Exame exame) {
		Exame atualExame = exameRepository.findById(id).get();
		atualizar(exame, atualExame);
		return exameRepository.save(atualExame);
	}

	public void deletarExame(Long id) {
		exameRepository.deleteById(id);
		
	}
	
	private void atualizar(Exame exame, Exame novoExame) {
		if (novoExame.getNomeDoExame() != null) {
			novoExame.setNomeDoExame(exame.getNomeDoExame());

		}
	}

}
