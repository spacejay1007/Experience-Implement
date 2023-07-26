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
