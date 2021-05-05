package br.com.devinhouse.thiago_mathias_simon.service;

import br.com.devinhouse.thiago_mathias_simon.dto.ProcessoCriadoDTO;
import br.com.devinhouse.thiago_mathias_simon.dto.ProcessoRemovidoDTO;
import br.com.devinhouse.thiago_mathias_simon.entity.ProcessoEntity;
import br.com.devinhouse.thiago_mathias_simon.exceptions.NullProcessException;
import br.com.devinhouse.thiago_mathias_simon.exceptions.ProcessAlreadyExistException;
import br.com.devinhouse.thiago_mathias_simon.exceptions.PatientNotFoundException;
import br.com.devinhouse.thiago_mathias_simon.repository.ProcessoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProcessoService {

	@Autowired
	private ProcessoRepository repository;

	public Iterable<ProcessoEntity> listarProcessos() {
		return recuperarProcessos();
	}

	public ProcessoCriadoDTO cadastrarProcesso(ProcessoEntity novoProcesso) throws ProcessAlreadyExistException {

		Iterable<ProcessoEntity> todosOsProcessos = recuperarProcessos();

		for (ProcessoEntity processo : todosOsProcessos) {
			if (processo.getId() == novoProcesso.getId()) {
				throw new ProcessAlreadyExistException("O ID que você informou já existe! Por favor, informe outro!");
			} else if(processo.getNuProcesso().equals(novoProcesso.getNuProcesso())){
				throw new ProcessAlreadyExistException("O número de processo informado já existe! Por favor infore outro!");
			} else if(processo.getChaveProcesso().equals(novoProcesso.getChaveProcesso())){
				throw new ProcessAlreadyExistException("A chave de processo informada já existe! Por favor informe outra!");
			}
		}

		if ((novoProcesso.getSgOrgaoProcesso() == null) || (novoProcesso.getNuAnoProcesso() == null)
				|| (novoProcesso.getDescricao() == null) || (novoProcesso.getCdAssunto() == null)
				|| (novoProcesso.getDescricaoAssunto() == null) || (novoProcesso.getCdInteressado() == null)
				|| (novoProcesso.getNmInteressado() == null)) {

			throw new NullProcessException("Não é possível cadastrar um processo com campos nulos!");
		}

		repository.save(novoProcesso);

		List<ProcessoEntity> processos = (List<ProcessoEntity>) recuperarProcessos();

		long id = 1;
		for (ProcessoEntity processo: processos){
			id = processo.getId();
		}

		Integer nuProcesso = Integer.parseInt(id + "");
		novoProcesso.setNuProcesso(nuProcesso);
		novoProcesso.setChaveProcesso(novoProcesso.getSgOrgaoProcesso() + " " + nuProcesso + "/" + novoProcesso.getNuAnoProcesso());

		ProcessoCriadoDTO processoCriado = new ProcessoCriadoDTO();
		processoCriado.setId(id);
		processoCriado.setChaveProcesso(novoProcesso.getChaveProcesso());

		for (ProcessoEntity processo: processos){
			if (processo.getId() == id){
				processo.setNuProcesso(novoProcesso.getNuProcesso());
				processo.setChaveProcesso(novoProcesso.getChaveProcesso());
				repository.save(processo);
			}
		}
		return processoCriado;
	}

	public Optional<ProcessoEntity> buscarProcessoPorId(long id) {

		Optional<ProcessoEntity> processo = recuperarProcessoPorId(id);

		return Optional.ofNullable(processo.orElseThrow());
	}

	public ProcessoEntity buscarProcessoPorChave(String chaveProcesso) {

		Iterable<ProcessoEntity> todosOsProcessos = recuperarProcessos();
		for (ProcessoEntity processo : todosOsProcessos) {
			if (processo.getChaveProcesso().equals(chaveProcesso)) {
				return processo;
			}
		}
		throw new PatientNotFoundException("O processo pelo qual buscavas não foi encontrado!");
	}

	public ProcessoEntity atualizarProcessso(long id, ProcessoEntity processoAtualizado) {

		Iterable<ProcessoEntity> todosOsProcessos = recuperarProcessos();

		for (ProcessoEntity processo : todosOsProcessos) {
			if (processo.getId() == id) {

				String sgOrgaoProcesso = (processoAtualizado.getSgOrgaoProcesso() != null)
						? processoAtualizado.getSgOrgaoProcesso()
						: processo.getSgOrgaoProcesso();
				String nuAnoProcesso = (processoAtualizado.getNuAnoProcesso() != null)
						? processoAtualizado.getNuAnoProcesso()
						: processo.getNuAnoProcesso();
				String descricao = (processoAtualizado.getDescricao() != null) ? processoAtualizado.getDescricao()
						: processo.getDescricao();
				Integer cdAssunto = (processoAtualizado.getCdAssunto() != null) ? processoAtualizado.getCdAssunto()
						: processo.getCdAssunto();
				String descricaoAssunto = (processoAtualizado.getDescricaoAssunto() != null)
						? processoAtualizado.getDescricaoAssunto()
						: processo.getDescricaoAssunto();
				Integer cdInteressado = (processoAtualizado.getCdInteressado() != null)
						? processoAtualizado.getCdInteressado()
						: processo.getCdInteressado();
				String nmInteressado = (processoAtualizado.getNmInteressado() != null)
						? processoAtualizado.getNmInteressado()
						: processo.getNmInteressado();

				processo.setSgOrgaoProcesso(sgOrgaoProcesso);
				processo.setNuAnoProcesso(nuAnoProcesso);
				processo.setDescricao(descricao);
				processo.setCdAssunto(cdAssunto);
				processo.setDescricaoAssunto(descricaoAssunto);
				processo.setCdInteressado(cdInteressado);
				processo.setNmInteressado(nmInteressado);

				repository.save(processo);
				return processo;
			}
		}
		throw new PatientNotFoundException("O processo que buscavas atualizar não foi encontrado!");
	}

	public ProcessoRemovidoDTO deletarProcesso(long id) {
		Iterable<ProcessoEntity> todosOsProcessos = recuperarProcessos();

		for (ProcessoEntity processo: todosOsProcessos) {
			if (processo.getId() == id) {
				repository.delete(processo);

				ProcessoRemovidoDTO processoRemovido = new ProcessoRemovidoDTO();
				processoRemovido.setId(id);
				processoRemovido.setMensagem("Processo removido com sucesso!");

				return processoRemovido;
			}
		}
		throw new PatientNotFoundException("O processo que buscavas apagar não foi encontrado!");
	}

	private Iterable<ProcessoEntity> recuperarProcessos() {
		return repository.findAll();
	}

	private Optional<ProcessoEntity> recuperarProcessoPorId(long id) {
		return repository.findById(id);
	}

}
