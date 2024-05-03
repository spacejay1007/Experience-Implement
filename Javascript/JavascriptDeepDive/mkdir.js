const fs = require("fs");
const path = require("path");

function mkDirFunction(num) {
  const basePath = ""; // terminal 에서 경로를 이동하여 작성 할 것이기 때문에 경로 지정안해도 된다.
  for (let i = 1; i <= num; i++) {
    const dirPath = path.join(basePath, String(i));
    try {
      fs.accessSync(dirPath, fs.constants.F_OK);
      // fs.constants.F_OK 를 사용하면 가독성이나 쓰기 가능성을 확인하지 않고 파일/디렉토리의 존재를 확인한다.
    } catch (err) {
      fs.mkdirSync(dirPath);
    }
  }
  return;
}

mkDirFunction(28);
