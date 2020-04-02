import { Expence } from "./interfaces";
export const writeSheet = (expences: Expence[]) => {
  const foodStores = ["SEVEN-ELEVEN JAPAN", "FAMILYMART"];
  // const otherStores = ["AMAZON CO JP", "BIC CAMERA"];
  const sheet = SpreadsheetApp.openById(
    PropertiesService.getScriptProperties().getProperty("SHEET_ID")
  ).getSheetByName("accountbook");

  const foodAmounts: number[] = [];
  const otherAmounts: number[] = [];

  expences.forEach(({ amount, store }) => {
    if (foodStores.includes(store)) {
      foodAmounts.push(amount);
    } else {
      otherAmounts.push(amount);
    }
  });

  const lastRow = sheet.getLastRow();
  if (foodAmounts[0]) {
    sheet.getRange(lastRow + 1, 2).setValue(`= ${foodAmounts.join(" + ")}`);
  }
  if (otherAmounts[0]) {
    sheet.getRange(lastRow + 1, 4).setValue(`= ${otherAmounts.join(" + ")}`);
  }
  sheet.getRange(lastRow + 1, 1).setValue(new Date());
};
