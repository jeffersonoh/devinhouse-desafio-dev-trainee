package br.com.devinhouse.spring.trabalhospringboot.mock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.devinhouse.spring.trabalhospringboot.dto.ExamesDTO;
import br.com.devinhouse.spring.trabalhospringboot.repository.ExamesRepository;

@Component
public class ExamesMock {

  @Autowired
  private ExamesRepository repository;
  
  private static boolean  cadastroRepository = false;

  private static final String examesOfertados[] = new String[24];

  public void construirListaDeExamesOfertados(){
    examesOfertados[0] = "Hemograma";
    examesOfertados[1] = "Colesterol";
    examesOfertados[2] = "Creatinina e ureia";
    examesOfertados[3] = "Glicemia";
    examesOfertados[4] = "Transaminases ALT e AST";
    examesOfertados[5] = "TSH e T4 livre";
    examesOfertados[6] = "Audiometria";
    examesOfertados[7] = "Acuidade Visual";
    examesOfertados[8] = "Espirometria";
    examesOfertados[9] = "EEG";
    examesOfertados[10] = "ECG";
    examesOfertados[11] = "Raio-x";
    examesOfertados[12] = "Ressonância Nuclear Magnética";
    examesOfertados[13] = "RNM";
    examesOfertados[14] = "Cintilografia";
    examesOfertados[15] = "Eletroneuromiografia";
    examesOfertados[16] = "Ecocardiograma";
    examesOfertados[17] = "Teste de Ergométrico (Teste de Esforço)";
    examesOfertados[18] = "Tomografia do coração e vasos";
    examesOfertados[19] = "Ressonância Magnética (RM)";
    examesOfertados[20] = "Angiografia digital";
    examesOfertados[21] = "Eletrocardiograma de repouso" ;
    examesOfertados[22] = "Radiografia de tórax";
    examesOfertados[23] = "Holter";
  }
  

  public List<ExamesDTO> getTodosExames() {
    List<ExamesDTO> listaDeExames = new ArrayList<ExamesDTO>();
    construirListaDeExamesOfertados();

    for (int x = 0; x < examesOfertados.length; x++) {
      ExamesDTO exam = new ExamesDTO();
      exam.setNome(examesOfertados[x]);
      
      listaDeExames.add(exam);
    }

    return listaDeExames;
  }

  public void cadastrarExamesNoRepository() {
    if (cadastroRepository == false) {
        var exames = getTodosExames();
        for (ExamesDTO examesDTO : exames) {
            this.repository.save(examesDTO);
        }
        cadastroRepository = true;
    }
}
}
