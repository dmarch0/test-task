export const formatDate = date => {
  let result = "";

  const month = date.split("-")[1];
  const day = date.split("-")[2].split(" ")[0];

  result += day + " ";

  switch (month) {
    case "01":
      result += "января";
      return result;
    case "02":
      result += "февраля";
      return result;
    case "03":
      result += "марта";
      return result;
    case "04":
      result += "апреля";
      return result;
    case "05":
      result += "мая";
      return result;
    case "06":
      result += "июня";
      return result;
    case "07":
      result += "июля";
      return result;
    case "08":
      result += "августа";
      return result;
    case "09":
      result += "сентября";
      return result;
    case "10":
      result += "октября";
      return result;
    case "11":
      result += "ноября";
      return result;
    case "12":
      result += "декабря";
      return result;
    default:
      return result;
  }
};
