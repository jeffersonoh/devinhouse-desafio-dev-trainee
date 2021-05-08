package br.com.devtrainee.desafiodev.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "EXAMS")
public class Exam {

  @Id
  @GeneratedValue
  private Long id;

  // @Column(columnDefinition = "ENUM('DESINTOMETRIA', 'RESSONANCIA_MAGNETICA',
  // 'TOMOGRAFIA', 'ULTRASONOGRAFIA', 'ECOGRAFIA')")
  @Column(unique = true, name = "EXAM_NAME")
  @Enumerated(EnumType.STRING)
  private ExamEnum name;
  // @OneToMany()
  // private Set<Appointment> appointment;
  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((id == null) ? 0 : id.hashCode());
    result = prime * result + ((name == null) ? 0 : name.hashCode());
    return result;
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Exam other = (Exam) obj;
    if (id == null) {
      if (other.id != null)
        return false;
    } else if (!id.equals(other.id))
      return false;
    if (name != other.name)
      return false;
    return true;
  }

}
