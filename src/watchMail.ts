import { Expence } from "./interfaces";

export const getExpenses = (): Expence[] => {
  const tmpArray: string[] = [];
  const regexp1 = /ご利用金額（円）\s+:\s+\d+,?\d+,?\d+/g;
  const regexp2 = /\d+,?\d+,?\d+/g;
  const regexp3 = /ご利用先\s+:\s+\w+ ?\w+-? ?\w+ ?\w+/g;
  const regexp4 = /\w+-? ?\w+ ?\w+ ?\w+/g;

  GmailApp.getInboxThreads().forEach((thread) => {
    thread.getMessages().forEach((message) => {
      if (message.isUnread() && regexp1.test(message.getBody())) {
        tmpArray.push(message.getBody());
      }
    });
  });

  return tmpArray.map((body) => {
    return {
      amount: toNum(body.match(regexp1)[0].match(regexp2)[0]),
      store: body.match(regexp3)[0].match(regexp4)[0],
    };
  });
};

const toNum = (value: string) => {
  return Number(value.match(/\d+/g).join(""));
};
