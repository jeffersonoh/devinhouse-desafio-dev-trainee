package br.com.devtrainee.desafiodev.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.devtrainee.desafiodev.DTO.ExamInDTO;
import br.com.devtrainee.desafiodev.DTO.ExamOutDTO;
import br.com.devtrainee.desafiodev.model.Exam;
import br.com.devtrainee.desafiodev.model.ExamEnum;
import br.com.devtrainee.desafiodev.repository.ClientRepository;
import br.com.devtrainee.desafiodev.repository.ExamRepository;

@Service
@Transactional
public class ExamService {

  @Autowired
  ExamRepository examRepository;

  @Autowired
  private ModelMapper modelMapper;

  public Exam toExam(ExamInDTO examDTO) {
    return modelMapper.map(examDTO, Exam.class);
  }

  public ExamOutDTO toDto(Exam exam) {
    return modelMapper.map(exam, ExamOutDTO.class);
  }

  public List<ExamOutDTO> toDto(List<Exam> exams) {
    return exams.stream().map(this::toDto).collect(Collectors.toList());
  }

  // public ClientOutDTO createAClient(ClientInDTO newClient) {
  //   Client client = toClient(newClient);
  //   // TODO: substitute runtimeexception for bussinesslogic exception
  //   if (clientRepository.findByCpf(client.getCpf()).isPresent())
  //     throw new RuntimeException("CPF já cadastrado");
  //   return toDto(clientRepository.save(client));
  // }
  // public ClientOutDTO updateAClient(Long id, ClientInDTO updatesToClient) {
  //   Client updatedClient = toClient(updatesToClient);
  //   Client clientOnDB = clientRepository.findById(id).orElseThrow(() -> new ClientNotFoundException(id));
  //   BeanUtils.copyProperties(updatedClient, clientOnDB, "id", "cpf");
  //   return toDto(clientRepository.save(clientOnDB));
  // }
  // public void deleteAClient(Long id) {
  //   Client client = clientRepository.findById(id).orElseThrow(() -> new ClientNotFoundException(id));
  //   clientRepository.delete(client);
  // }

  // public ClientOutDTO obtainAClientByCpf(String cpf) {
  //   Client client = clientRepository.findByCpf(cpf).orElseThrow(() -> new ClientNotFoundException(cpf));
  //   // BeanUtils.copyProperties(updatedClient, clientOnDB, "id", "cpf");
  //   return toDto(client);
  // }
  public Exam obtainAnExamByEnum(ExamEnum examEnum) {
    return examRepository.findByName(examEnum);
  }

  // public ClientOutDTO getById(Long id) {
  //   Client client = clientRepository.findById(id).orElseThrow(() -> new ClientNotFoundException(id));
  //   return toDto(client);
  // }
  public List<ExamOutDTO> obtainAllExams() {
    return toDto(examRepository.findAll());
  }
  // @PostMapping("")
  // public ResponseEntity<String> createExam(@RequestBody Exam entity) {
  //   return examService.createAnExam();
  // }
  public ExamOutDTO createAnExam(ExamInDTO newExam) {
    Exam exam = toExam(newExam);
    return toDto(examRepository.save(exam));
  }
  // @GetMapping("/{id}")
  // public ResponseEntity<String> obtainExam(@PathVariable Long id) {
  //   return examService.obtainAnExam();
  // }

  // @PutMapping("/{id}")
  // public ResponseEntity<String> updateExam(@PathVariable Long id, @RequestBody Exam entity) {
  //   return examService.updateAnExam();
  // }

  // @DeleteMapping("/{id}")
  // public ResponseEntity<String> deleteExam(@PathVariable Long id) {
  //   return examService.deleteAnExam();
  // }

}
