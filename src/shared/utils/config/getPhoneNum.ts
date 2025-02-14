/* eslint-disable no-useless-escape */

export const getPhoneNum = (text: string) => {
  return text.replace(/[\.@cus]/g, "");
};
