// import fs from "fs"; // commonJs >  파일 시스템 조작
var fs = require("fs"); // nodeJs 에서는 require의 형태로 작성
// fs 는 파일 시스템 조작 하는 방법
// 기존 폴더내에 uploads 폴더가 있는 없는지 확인하여 없다면 uploads 파일을 만들어주는것
var uploadFolderConfirm = function () {
    try {
        fs.accessSync("uploads"); // 업로드 폴더가 있는지 확인
    }
    catch (err) {
        // 폴더 만들기
        fs.mkdir("our-fs", function (err) { return console.log(err); }); // 동기
        // 폴더 삭제하기
        fs.rmdir("our-fs", function (err) { return console.log(err); });
    }
};
var fileData = function () {
    var file = "test.js";
    // const data = "test";
    // fs.writeFile(file, data, (err: any) => console.log(err)); // 비동기
    // fs.writeFileSync(file, data, (err: any) => console.log(err)); // 동기
    var appendFile = "add";
    fs.appendFile(file, appendFile, function (err) { return console.log(err); }); // 비동기
    fs.appendFileSync(file, appendFile, function (err) { return console.log(err); }); // 동기
};
fileData();
// uploadFolderConfirm();
