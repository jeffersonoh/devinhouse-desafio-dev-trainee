import React from 'react';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';

const ClienteCriar = () => {
  const username = useForm();
  const cpf = useForm();
  const dataNascimento = useForm();

  async function handleSubmit(event) {
    alert('Cliente Cadastrado');
    event.preventDefault();
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastrar Cliente</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="username" {...username} />
        <Input label="CPF" type="text" name="cpf" {...cpf} />
        <Input
          label="Data de Nascimento"
          type="text"
          name="dataNascimento"
          {...dataNascimento}
        />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default ClienteCriar;
