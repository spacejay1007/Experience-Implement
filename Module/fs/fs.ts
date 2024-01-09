// import fs from "fs"; // commonJs >  파일 시스템 조작
const fs = require("fs"); // nodeJs 에서는 require의 형태로 작성

// fs 는 파일 시스템 조작 하는 방법
// 기존 폴더내에 uploads 폴더가 있는 없는지 확인하여 없다면 uploads 파일을 만들어주는것
const uploadFolderConfirm = () => {
  try {
    fs.accessSync("uploads"); // 업로드 폴더가 있는지 확인
  } catch (err) {
    // 폴더 만들기
    fs.mkdir("our-fs", (err: any) => console.log(err)); // 동기
    // 폴더 삭제하기
    fs.rmdir("our-fs", (err: any) => console.log(err));
  }
};

const fileData = () => {
  const file = "test.js";
  // const data = "test";
  // fs.writeFile(file, data, (err: any) => console.log(err)); // 비동기
  // fs.writeFileSync(file, data, (err: any) => console.log(err)); // 동기

  // 기존의 만들어진 파일에 추가하는 것
  const appendFile = "add";
  fs.appendFile(file, appendFile, (err: Error) => console.log(err)); // 비동기
  fs.appendFileSync(file, appendFile, (err: Error) => console.log(err)); // 동기
};

fileData();

// uploadFolderConfirm();
