// 개행 갯수 확인
const data = [
  {
    modify_date: "2023-06-09T06:24:30.177437 ->  2023-06-15T08:27:26.780487",
    hw_uniquekey: "123 ->  03000200-0400-0500-0006-000700080009",
  },
  {
    modify_date: "2023-06-09T06:24:30.177437 ->  2023-06-15T08:27:26.780487",
    hw_uniquekey: "123 ->  03000200-0400-0500-0006-000700080009",
  },
]; // JSON.parse 한 데이터
const extraHeight = JSON.stringify(data, null, 4).match(/\n/gi)?.length;

/** 정규식 모음 */
export const regEx = {
  email:
    /^(?=[A-Za-z0-9][A-Za-z0-9@._%+-]{5,253}$)[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.)+[A-Za-z]{2,63}$/,
  phone: /^\d{2,3}-?\d{3,4}-?\d{4}$/,
  name: /^([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]+\s{0,1})*[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_\-()]+$/,
  password: /^[a-zA-Z0-9`~!@#$%^&*()-_=+\|[\]{};:'",.<>/?]{9,30}$/,
};
