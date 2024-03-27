// import path from "path"; // commonJs
var path = require("path"); // nodeJs 에서는 require의 형태로 작성
// path
// const ext = path.extname(file.originalname); // 확장자 추출(png)
// const baseName = path.basename(file.originalname, ext); // file 네임을 가져옴
// const thePath = path.join(process.cwd(), 'data', `${last}.json`)
// const words = fs.readFileSync(thePath, 'utf-8') //
// path.join(경로, .. .): 여러 인자를 넣으면 하나의 경로로 합쳐준다.
// path.resolve(경로, .. .): path.join()과 비슷하지만 차이가 있다.
console.log(path.join(process.cwd()));
