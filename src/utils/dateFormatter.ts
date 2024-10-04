import moment from "moment";

const dateFormatter = (date: string, formateString?: string) => {
  if (!date) return "";
  if (date) {
    return moment(date).format(formateString || "LL") || "";
  }
  return "";
};

export default dateFormatter;
