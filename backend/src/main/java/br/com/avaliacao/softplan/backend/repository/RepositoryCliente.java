package br.com.avaliacao.softplan.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.avaliacao.softplan.backend.entity.Agendamento;
import br.com.avaliacao.softplan.backend.entity.Cliente;

@Repository
public interface RepositoryCliente extends JpaRepository<Cliente, Long> {
	// isto vem do jpa, que permite derivar metodos que leem, atualiza e deleta
	// a ideia disso � reduzir a quantidade de c�digo
	Optional<Cliente> findByCpf(String cpf);

	Optional<Cliente> deleteByCpf(String cpf);

	@Query(value = "UPDATE cliente SET cpf = :cpfNovo, data_nascimento = :novaDataNascimento, nome = :nomeNovo "
			+ "WHERE cpf = :cpfInformado", nativeQuery = true)
	@Modifying
	void atualizarCliente(@Param("cpfNovo") String cpfNovo, @Param("novaDataNascimento") String novaData,
			@Param("nomeNovo") String novoNome, @Param("cpfInformado") String cpfInformado);

	@Query(value = "select  id_agendamento from agendamento a left join cliente c on c.id_cliente = a.id_cliente"
			+ " where c.cpf = :cpfInformado", nativeQuery = true)
	@Modifying
	List<Long> buscarPorIdsAgendamento(@Param("cpfInformado") String cpf);

}
