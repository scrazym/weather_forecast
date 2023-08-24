export const currentHourFromApi = (data: string) => {
  let day = new Date(data).getHours().toString();
  switch (day) {
    case "0":
    case "3":
    case "6":
    case "9":
      day = "0" + day + ".00";
      break;
    case "12":
    case "15":
    case "18":
    case "21":
    case "23":
      day = day + ".00";
  }
  return day;
};
