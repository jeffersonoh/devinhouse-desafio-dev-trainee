package br.com.devtrainee.desafiodev.model;

import java.time.OffsetDateTime;

import javax.persistence.*;

import org.hibernate.annotations.ManyToAny;

import lombok.Builder;
import lombok.Data;

@Builder
@Entity
@Data
@Table(name = "Appointment")
public class Appointment {

  @Id
  @GeneratedValue
  private Long id;

  @Column(name = "DateAndTime", nullable = false)
  private OffsetDateTime dateAndTime;

  @ManyToOne
  @JoinColumn(name = "exam_id", referencedColumnName = "id")
  private Long examId;

  // public boolean isAConsult() {
  //   return testName.isEmpty();
  // }


}
