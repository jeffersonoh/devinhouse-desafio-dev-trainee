export const desformatterDate = (date) => {
  const dataInformada = date.split("/");

  const ano = dataInformada[2];
  const mes = dataInformada[1];
  const dia = dataInformada[0];

  return `${ano}-${mes}-${dia}`;
};
