import { getExpenses } from "./watchMail";
import { writeSheet } from "./spreadSheet";

global.myFunction = () => {
  const expences = getExpenses();
  writeSheet(expences);
};
