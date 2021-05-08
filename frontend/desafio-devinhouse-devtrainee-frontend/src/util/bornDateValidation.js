export const validateBornDate = (date) => {
  const dataAtual = new Date();

  const actualYear = dataAtual.getFullYear();
  const actualMonth = dataAtual.getMonth() + 1;
  const actualDay = dataAtual.getDate();

  const dataInformada = date.split("-");

  const ano = parseInt(dataInformada[0]);
  const mes = parseInt(dataInformada[1]);
  const dia = parseInt(dataInformada[2]);

  if (
    actualYear < ano ||
    (actualYear === ano && actualMonth < mes) ||
    (actualYear === ano && actualMonth === mes && actualDay < dia)
  ) {
    return false;
  }
};