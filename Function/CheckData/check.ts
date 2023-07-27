import { M_InspectionModalHandler } from "./checkTypes";

const initialState = {
  choice: { isAllCheck: 0, include: [], exclude: [] },
};

// Table check Handler
export const tableCheckHandlers: M_InspectionModalHandler.I_handlers = {
  choice: ({ isAllCheck, exclude, include }) => {
    return {
      isAllCheck,
      include: include.map((item) => item.ruleDirLinkNo),
      exclude: exclude.map((item) => item.ruleDirLinkNo),
    };
  },

  inspectionThAllCheck: ({ choice, data, check }) => {
    // let defChoice = cloneDeep(choice);
    let defChoice = JSON.parse(JSON.stringify(choice)); // 깊은 복사!!
    // let defData = cloneDeep(data);
    let defData = JSON.parse(JSON.stringify(data));

    defData = defData.map((item) => {
      /**  */
      const mappingItem = { ...item };
      mappingItem["state"]["selected"] = check;

      return mappingItem;
    });

    defChoice = { ...initialState.choice, isAllCheck: check };

    return {
      mappingChoice: defChoice,
      mappingData: defData,
    };
  },

  inspectionCheck: ({ check, choice, data, index, rowNum }) => {
    // let defChoice = cloneDeep(choice);
    let defChoice = JSON.parse(JSON.stringify(choice)); // 깊은 복사!!
    // const defData = cloneDeep(data);
    let defData = JSON.parse(JSON.stringify(data));

    const uniqueNo = defData[index].ruleDirLinkNo;

    // data의 받아오는 체크를 그대로 넣어준다
    defData[index]["state"]["selected"] = check;

    if (check) {
      // defChoice.isAllCheck가 1 이면 빈값으로 아니면 데이터를 넣어준다
      const include = defChoice.isAllCheck
        ? []
        : [...defChoice.include, defData[index]];
      const exclude = defChoice.isAllCheck
        ? [...defChoice.exclude].filter(
            (item) => item.ruleDirLinkNo !== uniqueNo
          )
        : [];

      defChoice = { ...defChoice, include, exclude };
    } else {
      const include = defChoice.isAllCheck
        ? []
        : [...defChoice.include].filter(
            (item) => item.ruleDirLinkNo !== uniqueNo
          );
      const exclude = defChoice.isAllCheck
        ? [...defChoice.exclude, defData[index]]
        : [];
      defChoice = { ...defChoice, include, exclude };
    }

    // 전체 선택 여부
    if (defChoice.isAllCheck && defChoice.exclude.length === rowNum) {
      defChoice = { isAllCheck: 0, include: [], exclude: [] };
    } else if (!defChoice.isAllCheck && defChoice.include.length === rowNum) {
      defChoice = { isAllCheck: 1, include: [], exclude: [] };
    }

    return {
      mappingChoice: defChoice,
      mappingData: defData,
    };
  },
};
