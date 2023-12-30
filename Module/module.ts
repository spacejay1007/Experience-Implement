import fs from "fs"; // commonJs >  파일 시스템 조작
// const fs = require("fs"); // nodeJs 에서는 require의 형태로 작성

// fs 는 파일 시스템 조작 하는 방법
// 기존 폴더내에 uploads 폴더가 있는 없는지 확인하여 없다면 uploads 파일을 만들어주는것
const uploadFolderConfirm = () => {
  try {
    fs.accessSync("uploads"); // 업로드 폴더가 있는지 확인
  } catch (err) {
    console.log("Create because there are no upload folders");
    fs.mkdirSync("uploads");
  }
};

console.log(__filename); // C:\Users\User\Desktop\Study\Experience-Implement\Module\module.js
console.log(__dirname); // C:\Users\User\Desktop\Study\Experience-Implement\Module
console.log(process.cwd()); // process.cwd()는 node명령을 호출한 작업디렉터리의 절대경로이다
