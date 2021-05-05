package br.com.devinhouse.thiago_mathias_simon.service;

import br.com.devinhouse.thiago_mathias_simon.dto.AgendamentoDTO;
import br.com.devinhouse.thiago_mathias_simon.entity.AgendamentoEntity;
import br.com.devinhouse.thiago_mathias_simon.entity.ExameEntity;
import br.com.devinhouse.thiago_mathias_simon.entity.PacienteEntity;
import br.com.devinhouse.thiago_mathias_simon.exceptions.*;
import br.com.devinhouse.thiago_mathias_simon.repository.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;

@Service
public class AgendamentoService {

    @Autowired
    AgendamentoRepository repository;

    @Autowired
    PacienteService pacienteService;

    @Autowired
    ExameService exameService;

    public AgendamentoDTO cadastrarAgendamento(AgendamentoEntity novoAgendamento) {
        if (novoAgendamento.getExamName() != null
                && novoAgendamento.getPatientName() != null
                && novoAgendamento.getPatientCpf() != null
                && novoAgendamento.getExamDate() != null
                && novoAgendamento.getExamTime() != null) {

            String examName = novoAgendamento.getExamName().trim();
            long examId = novoAgendamento.getExamId();
            String patientName = novoAgendamento.getPatientName().trim();
            String patientCpf = novoAgendamento.getPatientCpf().trim();
            String examDate = novoAgendamento.getExamDate().trim();
            String examTime = novoAgendamento.getExamTime().trim();

            if (pacienteService.verificarExistenciaDeCpf(patientCpf)) {
                PacienteEntity pacienteEntity = pacienteService.buscarPacientePorCpf(patientCpf);
                if (pacienteEntity.getPatientCpf().equals(patientCpf)
                        && pacienteEntity.getPatientName().equals(patientName)) {
                    if (validateExamDate(examDate)) {
                        if (validateExamTime(examTime, examDate)) {
                            if (validateExamInformation(examName, examId)) {
                                novoAgendamento.setId(0);
                                novoAgendamento.setExamName(examName);
                                novoAgendamento.setExamId(examId);
                                novoAgendamento.setPatientName(patientName);
                                novoAgendamento.setPatientCpf(patientCpf);
                                novoAgendamento.setExamDate(examDate);
                                novoAgendamento.setExamTime(examTime);
                                repository.save(novoAgendamento);
                                return generateScheduledDTO(novoAgendamento);
                            }
                            throw new InvalidExamDataException("As informações alusivas ao exame estão incorretas!");
                        }
                        throw new InvalidExamTimeException("O horário de exame informado é inválido!");
                    }
                    throw new InvalidExamDateException("A data de exame informada é iválida!");
                }
                throw new IncompatibleDataException("Os dados de Nome e CPF informados não conferem!");
            }
            throw new CpfNotFoundException("O CPF informado não consta em nossa base de dados!");
        }
        throw new MissingValuesException("Por favor, informe todos os dados!");
    }

    public Iterable<AgendamentoEntity> listarAgendamentos() {
        return getAll();
    }

    public AgendamentoDTO atualizarAgendamento(long id, AgendamentoEntity agendamentoAtualizado) {
        ArrayList<AgendamentoEntity> agendamentoEntities = (ArrayList<AgendamentoEntity>) getAll();
        for (AgendamentoEntity agendamento : agendamentoEntities){
            if (agendamento.getId() == id){
                String examDate = ((agendamentoAtualizado.getExamDate() != null)
                        && (validateExamDate(agendamentoAtualizado.getExamDate())))
                        ? agendamentoAtualizado.getExamDate()
                        : agendamento.getExamDate();
                String examTime = ((agendamentoAtualizado.getExamTime() != null)
                        && (validateExamTime(agendamentoAtualizado.getExamTime(), agendamentoAtualizado.getExamDate())))
                        ? agendamentoAtualizado.getExamTime()
                        : agendamento.getExamTime();

                agendamento.setExamDate(examDate.trim());
                agendamento.setExamTime(examTime.trim());

                repository.save(agendamento);

                return generateScheduledDTO(agendamento);
            }
        }
        throw new ScheduledExamNotFoundException("O agendamento que buscavas atualizar não foi encontrado!");
    }

    public AgendamentoDTO deletarAgendamento(long id) {
        AgendamentoDTO agendamentoDTO = generateScheduledDTO(buscarAgendamentoPorId(id));
        repository.deleteById(id);
        return agendamentoDTO;
    }

    private boolean validateExamInformation(String examName, long examId) {
        ArrayList<ExameEntity> exames = (ArrayList<ExameEntity>) exameService.listarExames();
        for (ExameEntity exame : exames){
            if (exame.getExamName().equals(examName) && exame.getId() == examId) {
                return true;
            }
        }
        return false;
    }

    private boolean validateExamDate(String examDate) {
        LocalDate hoje = LocalDate.now();
        String[] dataAtual;
        dataAtual = hoje.toString().split("-");
        int diaAtual = Integer.parseInt(dataAtual[2]);
        int mesAtual = Integer.parseInt(dataAtual[1]);
        int anoAtual = Integer.parseInt(dataAtual[0]);

        String[] dataInformada;
        dataInformada = examDate.split("/");
        int diaInformado = Integer.parseInt(dataInformada[0]);
        int mesInformado = Integer.parseInt(dataInformada[1]);
        int anoInformado = Integer.parseInt(dataInformada[2]);

        LocalDate localDate = LocalDate.of(anoInformado, 1, 1);

        int diasDeFevereiro = 28;
        if (localDate.isLeapYear()){
            diasDeFevereiro = 29;
        }

        if (
                ((mesInformado == 1 || mesInformado == 3 || mesInformado == 5 || mesInformado == 7
                        || mesInformado == 8 || mesInformado == 10 || mesInformado == 12) && (diaInformado <= 31))  ||
                        ((mesInformado == 4 || mesInformado == 6 || mesInformado == 9 || mesInformado == 11) && (diaInformado <= 30)) ||
                        ((mesInformado == 2) && (diaInformado <= diasDeFevereiro))
        ) {

            return (anoInformado >= anoAtual) && (anoInformado != anoAtual || mesInformado >= mesAtual)
                    && (anoInformado != anoAtual || mesInformado != mesAtual || diaInformado >= diaAtual);

        }
        return false;
    }

    private boolean validateExamTime(String examTime, String examDate) {

        LocalDate today = LocalDate.now();
        String[] dataAtual;
        dataAtual = today.toString().split("-");
        int diaAtual = Integer.parseInt(dataAtual[2]);
        int mesAtual = Integer.parseInt(dataAtual[1]);
        int anoAtual = Integer.parseInt(dataAtual[0]);

        String[] dataInformada;
        dataInformada = examDate.split("/");
        int diaInformado = Integer.parseInt(dataInformada[0]);
        int mesInformado = Integer.parseInt(dataInformada[1]);
        int anoInformado = Integer.parseInt(dataInformada[2]);

        if (anoInformado == anoAtual && mesInformado == mesAtual && diaInformado == diaAtual) {

            LocalTime hoje = LocalTime.now();
            System.out.println(hoje);
            String[] horarioAtual;
            horarioAtual = hoje.toString().split(":");
            int horaAtual = Integer.parseInt(horarioAtual[0]);
            int minutoAtual = Integer.parseInt(horarioAtual[1]);

            String[] horarioInformado;
            horarioInformado = examTime.split(":");
            int horaInformada = Integer.parseInt(horarioInformado[0]);
            int minutoInformado = Integer.parseInt(horarioInformado[1]);

            if (horaInformada > 24 || horaInformada < 0 || minutoInformado > 59) {
                return false;
            }

            return (horaInformada > horaAtual) || (horaInformada == horaAtual && minutoInformado > minutoAtual);
        }
        return true;
    }

    private AgendamentoEntity buscarAgendamentoPorId(long id){
        ArrayList<AgendamentoEntity> agendamentoEntities = (ArrayList<AgendamentoEntity>) getAll();
        for (AgendamentoEntity agendamento : agendamentoEntities){
            if (agendamento.getId() == id){
                return agendamento;
            }
        }
        throw new ScheduledExamNotFoundException("O agendamento que buscavas atualizar não foi encontrado!");
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