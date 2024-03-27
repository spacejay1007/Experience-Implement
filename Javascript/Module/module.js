"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs"); // commonJs >  파일 시스템 조작
// const fs = require("fs"); // nodeJs 에서는 require의 형태로 작성
// const path = require("fs"); // nodeJs 에서는 require의 형태로 작성
// fs 는 파일 시스템 조작 하는 방법
// 기존 폴더내에 uploads 폴더가 있는 없는지 확인하여 없다면 uploads 파일을 만들어주는것
var uploadFolderConfirm = function () {
    try {
        fs_1.default.accessSync("uploads"); // 업로드 폴더가 있는지 확인
    }
    catch (err) {
        console.log("Create because there are no upload folders");
        fs_1.default.mkdirSync("uploads");
    }
};
console.log(__filename); // C:\Users\User\Desktop\Study\Experience-Implement\Module\module.js
console.log(__dirname); // C:\Users\User\Desktop\Study\Experience-Implement\Module
console.log(process.cwd());
// path
// const ext = path.extname(file.originalname); // 확장자 추출(png)
// const baseName = path.basename(file.originalname, ext); // file 네임을 가져옴
// const thePath = path.join(process.cwd(), 'data', ...arg, `${last}.json`)
// const words = fs.readFileSync(thePath, 'utf-8') //
