import { formatterDate } from "./dateFormat";

export const validateTime = (date, time) => {
  date = formatterDate(date);

  const informedDate = date.split("/");

  const informedDay = parseInt(informedDate[0]);
  const informedMonth = parseInt(informedDate[1]);
  const informedYear = parseInt(informedDate[2]);

  const informedTime = time.split(":");

  const informedHour = parseInt(informedTime[0]);
  const informedMinute = parseInt(informedTime[1]);

  const dataAtual = new Date();

  const actualYear = dataAtual.getFullYear();
  const actualMonth = dataAtual.getMonth() + 1;
  const actualDay = dataAtual.getDate();

  const actualHour = dataAtual.getHours();
  const actualMinutes = dataAtual.getMinutes();

  if (
    actualDay === informedDay &&
    actualMonth === informedMonth &&
    actualYear === informedYear
  ) {
    if (
      actualHour > informedHour ||
      (actualHour === informedHour && actualMinutes > informedMinute)
    ) {
      return false;
    }
  }
};
