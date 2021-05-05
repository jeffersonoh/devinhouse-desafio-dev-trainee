package br.com.devinhouse.thiago_mathias_simon.service;

import br.com.devinhouse.thiago_mathias_simon.dto.PacienteDTO;
import br.com.devinhouse.thiago_mathias_simon.entity.AgendamentoEntity;
import br.com.devinhouse.thiago_mathias_simon.entity.PacienteEntity;
import br.com.devinhouse.thiago_mathias_simon.exceptions.CpfAlreadyExistException;
import br.com.devinhouse.thiago_mathias_simon.exceptions.CpfNotFoundException;
import br.com.devinhouse.thiago_mathias_simon.exceptions.InvallidCpfException;
import br.com.devinhouse.thiago_mathias_simon.exceptions.PatientNotFoundException;
import br.com.devinhouse.thiago_mathias_simon.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PacienteService {

    @Autowired
    PacienteRepository repository;

    @Autowired
    AgendamentoService agendamentoService;

    public PacienteDTO cadastrarPaciente(PacienteEntity novoPaciente) {
        String cpf = novoPaciente.getPatientCpf();
        if (validarCpf(cpf)) {
            if (!verificarExistenciaDeCpf(cpf)) {
                repository.save(novoPaciente);
                return generatePatientDTO(novoPaciente);
            }
            throw new CpfAlreadyExistException("O CPF informado já existe!");
        }
        throw new InvallidCpfException("O CPF informado é inválido!");
    }

    public Iterable<PacienteEntity> listarPacientes() {
        return getAll();
    }

    public PacienteEntity buscarPacientePorCpf(String cpf) {
        if(verificarExistenciaDeCpf(cpf)){
            ArrayList<PacienteEntity> pacientes = (ArrayList<PacienteEntity>) getAll();
            for (PacienteEntity paciente : pacientes) {
                if (paciente.getPatientCpf().equals(cpf)) {
                    return paciente;
                }
            }
        }
        throw new CpfNotFoundException("O CPF pelo qual buscavas não consta em nossa base de dados!");
    }

    public PacienteDTO atualizarPaciente(long id, PacienteEntity pacienteAtualizado) {
        ArrayList<PacienteEntity> pacientes = (ArrayList<PacienteEntity>) getAll();
        for (PacienteEntity paciente : pacientes){
            if (paciente.getId() == id){
                String patientName = (pacienteAtualizado.getPatientName() != null)
                        ? pacienteAtualizado.getPatientName()
                        : paciente.getPatientName();
                String patientCpf = (pacienteAtualizado.getPatientCpf() != null)
                        ? pacienteAtualizado.getPatientCpf()
                        : paciente.getPatientCpf();
                String patientBornDate = (pacienteAtualizado.getPatientBornDate() != null) ? pacienteAtualizado.getPatientBornDate()
                        : paciente.getPatientBornDate();

                paciente.setPatientName(patientName);
                paciente.setPatientCpf(patientCpf);
                paciente.setPatientBornDate(patientBornDate);

                repository.save(paciente);

                atualizarAgendamentos(paciente.getPatientCpf(), paciente);

                return generatePatientDTO(paciente);
            }
        }
        throw new PatientNotFoundException("O paciente que buscava atualizar não foi encontrado!");
    }

    public PacienteDTO deletarPaciente(long id) {
        PacienteEntity paciente = buscarPacientePorId(id);
        PacienteDTO pacienteDTO = generatePatientDTO(paciente);
        repository.deleteById(id);
        deletarAgendamentos(pacienteDTO.getPatientCpf());
        return pacienteDTO;
    }

    public boolean verificarExistenciaDeCpf(String patientCpf) {
        ArrayList<PacienteEntity> pacientes = (ArrayList<PacienteEntity>) getAll();
        for (PacienteEntity paciente : pacientes) {
            if (paciente.getPatientCpf().equals(patientCpf)) {
                return true;
            }
        }
        return false;
    }

    private PacienteDTO generatePatientDTO(PacienteEntity paciente) {
        PacienteDTO pacienteDTO = new PacienteDTO();
        pacienteDTO.setId(paciente.getId());
        pacienteDTO.setPatientName(paciente.getPatientName());
        pacienteDTO.setPatientCpf(paciente.getPatientCpf());
        pacienteDTO.setPatientBornDate(paciente.getPatientBornDate());
        return pacienteDTO;
    }

    private PacienteEntity buscarPacientePorId(long id){
        ArrayList<PacienteEntity> pacientes = (ArrayList<PacienteEntity>) getAll();
        for (PacienteEntity paciente : pacientes){
            if (paciente.getId() == id){
                return paciente;
            }
        }
        throw new PatientNotFoundException("O paciente pelo qual buscavas não foi encontrado!");
    }

    private Iterable<PacienteEntity> getAll() {
        return repository.findAll();
    }

    private void deletarAgendamentos( String cpf) {
        ArrayList<AgendamentoEntity> agendamentos = (ArrayList<AgendamentoEntity>) agendamentoService.listarAgendamentos();
        for (AgendamentoEntity agendamento : agendamentos) {
            if (agendamento.getPatientCpf().equals(cpf)) {
                agendamentoService.deletarAgendamento(agendamento.getId());
            }
        }
    }

    private void atualizarAgendamentos( String cpf, PacienteEntity paciente){
        ArrayList<AgendamentoEntity> agendamentos = (ArrayList<AgendamentoEntity>) agendamentoService.listarAgendamentos();
        for (AgendamentoEntity agendamento : agendamentos ){
            if (agendamento.getPatientCpf().equals(cpf)){
                agendamento.setPatientName(paciente.getPatientName());
                agendamento.setPatientCpf(paciente.getPatientCpf());
                agendamentoService.atualizarAgendamento(agendamento.getId(), agendamento);
            }
        }
    }

    private boolean validarCpf(String cpf) {
        int[] validadorDeCpf = new int[11];
        int primeiroDigitoVerificador = 0;
        int segundoDigitoVerificador = 0;
        int variavelDeControle = 0;

        if (cpf.isEmpty() || cpf.length() > 11) {
            return false;
        }

        for (int i = 0; i < cpf.length(); i++) {
            validadorDeCpf[i] = (int) (cpf.charAt(i) - '0');
        }

        for (int i = 10; i >= 2; i--) {
            primeiroDigitoVerificador += validadorDeCpf[variavelDeControle] * i;
            variavelDeControle++;
        }

        primeiroDigitoVerificador = (primeiroDigitoVerificador * 10) % 11;

        if (primeiroDigitoVerificador == 10) {
            primeiroDigitoVerificador = 0;
        }

        if (primeiroDigitoVerificador != validadorDeCpf[9]) {
            return false;
        } else {
            variavelDeControle = 0;

            for (int i = 11; i >= 2; i--) {
                segundoDigitoVerificador += validadorDeCpf[variavelDeControle] * i;
                variavelDeControle++;
            }

            segundoDigitoVerificador = (segundoDigitoVerificador * 10) % 11;

            if (segundoDigitoVerificador == 10) {
                segundoDigitoVerificador = 0;
            }

            return segundoDigitoVerificador == validadorDeCpf[10];
        }
    }
}
