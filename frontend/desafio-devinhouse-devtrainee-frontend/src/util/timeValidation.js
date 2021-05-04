import { formatterDate } from "./dateFormat";

export const validateTime = (date, time) => {
  date = formatterDate(date);

  const informedDate = date.split("/");

  const informedDay = informedDate[0];
  const informedMonth = informedDate[1];
  const informedYear = informedDate[2];

  const informedTime = time.split(":");

  const informedHour = informedTime[0];
  const informedMinute = informedTime[1];

  const dataAtual = new Date();

  const actualYear = dataAtual.getFullYear();
  const actualMonth = dataAtual.getMonth() + 1;
  const actualDay = dataAtual.getDate();

  const actualHour = dataAtual.getHours();
  const actualMinutes = dataAtual.getMinutes();

  if (
    actualDay == informedDay &&
    actualMonth == informedMonth &&
    actualYear == informedYear
  ) {
    if (
      actualHour > informedHour ||
      (actualHour == informedHour && actualMinutes > informedMinute)
    ) {
      return false;
    }
  }
};
