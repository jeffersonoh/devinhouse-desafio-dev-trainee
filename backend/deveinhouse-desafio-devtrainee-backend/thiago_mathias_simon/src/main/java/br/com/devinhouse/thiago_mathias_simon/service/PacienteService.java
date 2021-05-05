package br.com.devinhouse.thiago_mathias_simon.service;

import br.com.devinhouse.thiago_mathias_simon.dto.PacienteDTO;
import br.com.devinhouse.thiago_mathias_simon.entity.AgendamentoEntity;
import br.com.devinhouse.thiago_mathias_simon.entity.PacienteEntity;
import br.com.devinhouse.thiago_mathias_simon.exceptions.*;
import br.com.devinhouse.thiago_mathias_simon.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;

@Service
public class PacienteService {

    @Autowired
    PacienteRepository repository;

    @Autowired
    AgendamentoService agendamentoService;

    public PacienteDTO cadastrarPaciente(PacienteEntity novoPaciente) {
        if (novoPaciente.getPatientName() != null
                && novoPaciente.getPatientCpf() != null
                && novoPaciente.getPatientBornDate() != null) {

            String name = novoPaciente.getPatientName().trim();
            String cpf = novoPaciente.getPatientCpf().trim();
            String bornDate = novoPaciente.getPatientBornDate().trim();

            if (validatePatientName(name)) {
                if (validarCpf(cpf)) {
                    if (!verificarExistenciaDeCpf(cpf)) {
                        if (validateBornDate(bornDate)) {
                            novoPaciente.setId(0);
                            novoPaciente.setPatientName(name);
                            novoPaciente.setPatientCpf(cpf);
                            novoPaciente.setPatientBornDate(bornDate);
                            repository.save(novoPaciente);
                            return generatePatientDTO(novoPaciente);
                        }
                        throw new InvalidBornDateException("A data de nascimento informada não é válida!");
                    }
                    throw new CpfAlreadyExistException("O CPF informado já existe!");
                }
                throw new InvallidCpfException("O CPF informado é inválido!");
            }
            throw new InvalidPatientNameException("O nome informado é inválido!");
        }
        throw new MissingValuesException("Por favor, informe todos os dados!");
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
                String cpf = paciente.getPatientCpf();
                String patientName = (pacienteAtualizado.getPatientName() != null)
                        ? pacienteAtualizado.getPatientName()
                        : paciente.getPatientName();
                String patientCpf = (pacienteAtualizado.getPatientCpf() != null)
                        ? pacienteAtualizado.getPatientCpf()
                        : paciente.getPatientCpf();
                String patientBornDate = ((pacienteAtualizado.getPatientBornDate() != null)
                        && (validateBornDate(pacienteAtualizado.getPatientBornDate())))
                        ? pacienteAtualizado.getPatientBornDate()
                        : paciente.getPatientBornDate();

                paciente.setPatientName(patientName.trim());
                paciente.setPatientCpf(patientCpf.trim());
                paciente.setPatientBornDate(patientBornDate.trim());

                repository.save(paciente);

                atualizarAgendamentos(cpf, paciente);

                return generatePatientDTO(paciente);
            }
        }
        throw new PatientNotFoundException("O paciente que buscavas atualizar não foi encontrado!");
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

    private boolean validatePatientName(String patientName){
        if (!patientName.isBlank()) {
            for (int i = 0; i < 10; i++) {
                for (int e = 0; e < patientName.length(); e++) {
                    if (patientName.substring(e, e + 1).equals(i + "")) {
                        return false;
                    }
                }
            }
            return true;
        }
        return false;
    }

    private boolean validateBornDate(String bornDate) {
        LocalDate hoje = LocalDate.now();
        String[] dataAtual;
        dataAtual = hoje.toString().split("-");
        int diaAtual = Integer.parseInt(dataAtual[2]);
        int mesAtual = Integer.parseInt(dataAtual[1]);
        int anoAtual = Integer.parseInt(dataAtual[0]);

        String[] dataInformada;
        dataInformada = bornDate.split("/");
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
        ){
            return (anoInformado <= anoAtual) && (anoInformado != anoAtual || mesInformado <= mesAtual)
                    && (anoInformado != anoAtual || mesInformado != mesAtual || diaInformado <= diaAtual);
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

        if (cpf.length() != 11) {
            return false;
        }

        for (int i = 0; i < 10; i ++){
            if (cpf.equals(i+""+i+""+i+""+i+""+i+""+i+""+i+""+i+""+i+""+i+""+i)){
                return false;
            }
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