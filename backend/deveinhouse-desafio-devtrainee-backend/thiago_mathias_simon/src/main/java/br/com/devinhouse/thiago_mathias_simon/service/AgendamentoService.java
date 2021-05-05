package br.com.devinhouse.thiago_mathias_simon.service;

import br.com.devinhouse.thiago_mathias_simon.dto.AgendamentoDTO;
import br.com.devinhouse.thiago_mathias_simon.entity.AgendamentoEntity;
import br.com.devinhouse.thiago_mathias_simon.entity.PacienteEntity;
import br.com.devinhouse.thiago_mathias_simon.exceptions.CpfNotFoundException;
import br.com.devinhouse.thiago_mathias_simon.exceptions.IncompatibleDataException;
import br.com.devinhouse.thiago_mathias_simon.exceptions.PatientNotFoundException;
import br.com.devinhouse.thiago_mathias_simon.repository.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AgendamentoService {

    @Autowired
    AgendamentoRepository repository;

    @Autowired
    PacienteService pacienteService;

    public AgendamentoDTO cadastrarAgendamento(AgendamentoEntity novoAgendamento) {
        String cpf = novoAgendamento.getPatientCpf();
        if (pacienteService.verificarExistenciaDeCpf(cpf)) {
            PacienteEntity pacienteEntity = pacienteService.buscarPacientePorCpf(cpf);
            if (pacienteEntity.getPatientCpf().equals(cpf)
                    && pacienteEntity.getPatientName().equals(novoAgendamento.getPatientName())) {
                System.out.println(novoAgendamento);
                novoAgendamento.setId(0);
                repository.save(novoAgendamento);
                return generateScheduledDTO(novoAgendamento);
            }
            throw new IncompatibleDataException("Os dados de Nome e CPF informados não conferem!");
        }
        throw new CpfNotFoundException("O CPF informado não consta em nossa base de dados!");
    }

    public Iterable<AgendamentoEntity> listarAgendamentos() {
        return getAll();
    }

    public AgendamentoDTO atualizarAgendamento(long id, AgendamentoEntity agendamentoAtualizado) {
        ArrayList<AgendamentoEntity> agendamentoEntities = (ArrayList<AgendamentoEntity>) getAll();
        for (AgendamentoEntity agendamento : agendamentoEntities){
            if (agendamento.getId() == id){
                String examDate = (agendamentoAtualizado.getExamDate() != null)
                        ? agendamentoAtualizado.getExamDate()
                        : agendamento.getExamDate();
                String examTime = (agendamentoAtualizado.getExamTime() != null)
                        ? agendamentoAtualizado.getExamTime()
                        : agendamento.getExamTime();

                agendamento.setExamDate(examDate);
                agendamento.setExamTime(examTime);

                repository.save(agendamento);

                return generateScheduledDTO(agendamento);
            }
        }
        throw new PatientNotFoundException("O paciente que buscava atualizar não foi encontrado!");
    }

    public AgendamentoDTO deletarAgendamento(long id) {
        AgendamentoDTO agendamentoDTO = generateScheduledDTO(buscarAgendamentoPorId(id));
        repository.deleteById(id);
        return agendamentoDTO;
    }

    private AgendamentoEntity buscarAgendamentoPorId(long id){
        ArrayList<AgendamentoEntity> agendamentoEntities = (ArrayList<AgendamentoEntity>) getAll();
        for (AgendamentoEntity agendamento : agendamentoEntities){
            if (agendamento.getId() == id){
                return agendamento;
            }
        }
        throw new PatientNotFoundException("O paciente pelo qual buscavas não foi encontrado!");
    }

    private Iterable<AgendamentoEntity> getAll() {
        return repository.findAll();
    }

    private AgendamentoDTO generateScheduledDTO (AgendamentoEntity agendamento) {
        AgendamentoDTO agendamentoDTO = new AgendamentoDTO();
        agendamentoDTO.setId(agendamento.getId());
        agendamentoDTO.setExamName(agendamento.getExamName());
        agendamentoDTO.setExamId(agendamento.getExamId());
        agendamentoDTO.setPatientName(agendamento.getPatientName());
        agendamentoDTO.setPatientCpf(agendamento.getPatientCpf());
        agendamentoDTO.setExamDate(agendamento.getExamDate());
        agendamentoDTO.setExamTime(agendamento.getExamTime());
        return agendamentoDTO;
    }
}
