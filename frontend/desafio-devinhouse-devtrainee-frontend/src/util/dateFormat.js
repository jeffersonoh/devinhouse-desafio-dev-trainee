export const formatterDate = (date) => {
  const dataInformada = date.split("-");

  const ano = dataInformada[0];
  const mes = dataInformada[1];
  const dia = dataInformada[2];

  return `${dia}/${mes}/${ano}`;
};
