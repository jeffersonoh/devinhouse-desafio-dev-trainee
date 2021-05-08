package br.com.devtrainee.desafiodev.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

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
@Table(name = "clients")
public class Client {

  // public Client(Long id, String name, String lastName, String cpf, LocalDate
  // birthDate, Set<Appointment> appointment) {
  // this.id = id;
  // this.name = name;
  // this.lastName = lastName;
  // this.cpf = cpf;
  // this.birthDate = birthDate;
  // this.appointment = appointment;
  // }

  // public Client() {}

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String lastName;
  private String cpf;
  private LocalDate birthDate;

  // (mappedBy = "Appointment", cascade = CascadeType.REMOVE, targetEntity =
  // br.com.devtrainee.desafiodev.model.Appointment.class)
  // @JoinColumn(name = "AGENDAMENTOS_ID")
  @JsonManagedReference
  @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Appointment> appointment;

  public void appendAppointment(Appointment ap){
    appointment.add(ap);
    ap.setClient(this);
  }

  public void removeAppointment(Appointment ap){
    appointment.remove(ap);
    ap.setClient(null);
  }

  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((appointment == null) ? 0 : appointment.hashCode());
    result = prime * result + ((birthDate == null) ? 0 : birthDate.hashCode());
    result = prime * result + ((cpf == null) ? 0 : cpf.hashCode());
    result = prime * result + ((id == null) ? 0 : id.hashCode());
    result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
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
    Client other = (Client) obj;
    if (appointment == null) {
      if (other.appointment != null)
        return false;
    } else if (!appointment.equals(other.appointment))
      return false;
    if (birthDate == null) {
      if (other.birthDate != null)
        return false;
    } else if (!birthDate.equals(other.birthDate))
      return false;
    if (cpf == null) {
      if (other.cpf != null)
        return false;
    } else if (!cpf.equals(other.cpf))
      return false;
    if (id == null) {
      if (other.id != null)
        return false;
    } else if (!id.equals(other.id))
      return false;
    if (lastName == null) {
      if (other.lastName != null)
        return false;
    } else if (!lastName.equals(other.lastName))
      return false;
    if (name == null) {
      if (other.name != null)
        return false;
    } else if (!name.equals(other.name))
      return false;
    return true;
  }

}
