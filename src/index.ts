import { getExpenses } from "./mail";
import { writeSheet } from "./spreadSheet";

global.myFunction = () => {
  const expences = getExpenses();
  writeSheet(expences);
};
