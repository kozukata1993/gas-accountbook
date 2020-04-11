import { getExpenses } from "./mail";
import { writeSheet } from "./spreadSheet";

global.myFunction = () => {
  const expences = getExpenses();
  writeSheet(expences);
};

global.test = () => {
  const today = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

  Logger.log(today);
};
