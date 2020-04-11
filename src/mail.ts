import { Expence } from "./interfaces";
import { toNum } from "./utils";

export const getExpenses = (): Expence[] => {
  const tmpArray: string[] = [];
  const ids: string[] = [];
  const regexp1 = /ご利用金額（円）\s+:\s+\d+,?\d+,?\d+/g;
  const regexp2 = /\d+,?\d+,?\d+/g;
  const regexp3 = /ご利用先\s+:\s+\w+ ?\w+-? ?\w+ ?\w+/g;
  const regexp4 = /\w+-? ?\w+ ?\w+ ?\w+/g;
  const today = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

  GmailApp.getInboxThreads().forEach((thread) => {
    thread.getMessages().forEach((message) => {
      if (
        message.getFrom() === "mail@debit.bk.mufg.jp" &&
        message.getDate() > today
      ) {
        tmpArray.push(message.getBody());
        ids.push(message.getId());
      }
    });
  });

  ids.forEach((id) => {
    GmailApp.getMessageById(id).moveToTrash();
  });

  return tmpArray.map((body) => {
    return {
      amount: toNum(body.match(regexp1)[0].match(regexp2)[0]),
      store: body.match(regexp3)[0].match(regexp4)[0],
    };
  });
};
