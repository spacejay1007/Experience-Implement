import { data } from "./data";

type T_SubList = {
  dirId: number;
  dirPid: number;
  dirSize: number;
  fileCount: number;
  dirName: string;
  pathName: string;
  state?: {
    expand: boolean;
    selected: number;
    treeLevel: number;
  };
};
const makeTree = (list: T_SubList[], treelevelNumber = 0, id = -1) => {
  // prettier-ignore
  const childrenFilter: T_SubList[] = list.filter((item: T_SubList) => item.dirPid === id)
    .map((items: T_SubList) => {
        return ({...items, children: makeTree(list, treelevelNumber + 1  ,items.dirId), state:{expand:false , selected: 0 , treeLevel : treelevelNumber   }})
      }
      );

  return childrenFilter;
};

console.log(makeTree(data));
