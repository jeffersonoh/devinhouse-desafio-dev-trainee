package br.com.devtrainee.desafiodev.model;

import java.time.OffsetDateTime;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

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
@Table(name = "Appointments")
public class Appointment {

  
  @Id
  @GeneratedValue
  private Long id;
  
  @Column(name = "DateAndTime", nullable = false)
  private OffsetDateTime scheduledTime;
  
  // @JoinColumn(name = "exam_id", referencedColumnName = "id")
  // @ManyToOne(optional = true)
  private ExamEnum examEnum;
  
  @JsonBackReference
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name="client_id")
  private Client client;
  // public boolean isAConsult() {
    //   return testName.isEmpty();
    // }
    @Override
    public int hashCode() {
      final int prime = 31;
      int result = 1;
      result = prime * result + ((client == null) ? 0 : client.hashCode());
      result = prime * result + ((examEnum == null) ? 0 : examEnum.hashCode());
      result = prime * result + ((id == null) ? 0 : id.hashCode());
      result = prime * result + ((scheduledTime == null) ? 0 : scheduledTime.hashCode());
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
      Appointment other = (Appointment) obj;
      if (client == null) {
        if (other.client != null)
          return false;
      } else if (!client.equals(other.client))
        return false;
      if (examEnum != other.examEnum)
        return false;
      if (id == null) {
        if (other.id != null)
          return false;
      } else if (!id.equals(other.id))
        return false;
      if (scheduledTime == null) {
        if (other.scheduledTime != null)
          return false;
      } else if (!scheduledTime.equals(other.scheduledTime))
        return false;
      return true;
    }
    
  }
  