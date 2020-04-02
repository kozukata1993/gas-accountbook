export const toNum = (value: string) => {
  return Number(value.match(/\d+/g).join(""));
};
