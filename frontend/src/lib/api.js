export async function listarAgendamentos () {
  const resposta = await window.fetch('http://localhost:8080/api/agendamento')
  if (resposta.ok) {
    const json = await resposta.json()
    return json
  } else {
    window.alert('HTTP-Error: ' + resposta.status)
  }
}
export async function deletarAgendamentos (idDoAgendamento) {
  try {
    const resposta = await window.fetch(
      `http://localhost:8080/api/agendamento/${idDoAgendamento}`,
      {
        method: 'DELETE'
      }
    )
    if (resposta.ok) {
      const json = resposta.json()
    } else {
      window.alert('HTTP-Error: ' + resposta.status)
    }
  } catch (e) {}
}
export async function listarClientes () {
  const resposta = await window.fetch('http://localhost:8080/api/cliente')
  if (resposta.ok) {
    const json = await resposta.json()
    return json
  } else {
    window.alert('HTTP-Error: ' + resposta.status)
  }
}

export async function deletarClientes (cpfDoCliente) {
  try {
    const resposta = await window.fetch(
      `http://localhost:8080/api/cliente/${cpfDoCliente}`,
      {
        method: 'DELETE'
      }
    )
    if (resposta.ok) {
      const json = resposta.json()
    } else {
      window.alert('HTTP-Error: ' + resposta.status)
    }
  } catch (e) {}
}
export async function listarExames () {
  const resposta = await window.fetch('http://localhost:8080/api/exame')
  if (resposta.ok) {
    const json = await resposta.json()
    return json
  } else {
    window.alert('HTTP-Error: ' + resposta.status)
  }
}
export async function criarCliente (novoCliente) {
  const resposta = await window.fetch('http://localhost:8080/api/cliente', {
    method: 'POST',
    body: JSON.stringify(novoCliente),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  if (resposta.ok) {
    const json = await resposta.json()
    return json
  } else {
    window.alert('HTTP-Error: ' + resposta.status)
  }
}
