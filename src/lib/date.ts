import { format as formatFns } from "date-fns";

export function format(date: Date) {
  return formatFns(date, "dd/MM/yyyy");
}
