import { Dispatch } from "react";

export declare namespace M_TotalInpection {
  interface I_InspectionPre {
    //   data:{},
    assetList: I_InspectionAssetList[];
    groupList: number[];
    scheduleList: I_InspectionScheduleList[];
    ruleList: T_RuleList[];
  }

  type T_RuleList = I_InspectionRuleList & {
    state: { selected: number | null };
  };

  /** 선택한 자산 정보 리스트 */
  interface I_InspectionAssetList {
    assetNo: number; // 자산번호
    alinkNo: number; // alinkNo
    isOnline: number; // 연결정보
  }

  /** 가용일정 리스트 */
  interface I_InspectionScheduleList {
    scheduleNo: number; // 가용일정 번호
    scheduleName: string; // 가용일정 이름
    scheduleStart: number; // 가용일정 시작날짜
    scheduleEnd: number; // 가용일정 종료날짜
    // eslint-disable-next-line no-irregular-whitespace
    weekRun: string; // 최대 7개 Object Array[{"day": 0, // 0:일 ,1:월, 2:화, 3:수, 4:목, 5:금, 6:토 "hours": "12,13,14,15,16,17",  시간 0:0시~1시, 1:1시~2시, 2:2시~3시 등​ "isEnable": 1}  1:사용, 2:사용안함]
    regDate: number; // 공통 object로 인한 추가 *사용안함
  }

  /** 정책 번호 */
  interface I_InspectionRuleList {
    fmRuleNo: number; // 공통 object로인한 추가 *사용안함
    ruleName: string; // 정책명
    enableWebshell: number; // 웹쉘 사용여부  1:사용 , 0 :사용안함
    enableMaliciousUrl: number; // 악성 url 사용여부 1:사용,0:사용안함
    enableChange: number; // 파일 변경 사용여부 1:사용,0:사용안함
    enableBackup: number; // 백업 파일 사용여부 1:사용,0:사용안함
    enableUpfilter: number; // 업로드 차단 사용여부 1:사용,0:사용안함
    enableChangeban: number; // 변경감지 사용여부 1:사용,0:사용안함
    enablePi: number; // 개인정보 사용여부 1:사용,0:사용안함
    regDate: number; // 공통 object로 인한 추가 * 사용안함
    dirName: string; // 정책 적용 디렉터리명
    isInvalid: number; // 디렉터리의 존재 여부 1:디렉터리없음, 0:정상
    ruleDirLinkNo: number;
  }
}

export declare namespace M_Table {
  interface state {
    header: header[];
    windowSize: number;
  }

  interface header {
    title: string;
    property: string;
    order?: boolean;
    toolTip?: boolean;
    align?: string;
    width?: number;
    flex?: number;
    hidden?: boolean;
  }

  type choice<T> = { isAllCheck: number; include: T[]; exclude: T[] };
  type ordering = "DESC" | "ASC";
  type T_HiddenColumn = { title: string; columnKey: string };

  interface config<T> {
    check: config.check<T> | null;
    order: config.order | null;
  }

  namespace config {
    export type order = {
      sort: sortPayload;
      onClick: (order: sortPayload) => void;
    };
    export type check<T> = {
      choice: choice<T>;
      onChange: (payload: { data: T[]; choice: choice<T> }) => void;
      disabled?:
        | { key: string; value: number | string }
        | { key: string; value: number | string }[];
      type?: "pagination" | "infinite";
      noRowClickCheck?: boolean; // row에 클릭했을때 체크되는지 여부
    };
  }

  interface context<T> {
    data: T[];
    state: { header: header[]; windowSize: number };
    setState: Dispatch<(state: state) => state>;
    config: config<T>;
    isResize: boolean;
  }

  type checkPayload<T> = { data: T[]; choice: choice<T> };
  type sortPayload = { [key: string]: ordering };
  type rowProps<T> = { property: string; rowData: T; value: string | number };

  type T_Config = "aWeek" | "aMonth" | "aYear" | "period" | null | string;
}

export declare namespace M_InspectionModalHandler {
  type T_Choice = M_Table.choice<M_TotalInpection.T_RuleList>;

  type T_ReturnChoice = M_Table.choice<number>;

  type T_ThAll = {
    data: M_TotalInpection.T_RuleList[];
    choice: T_Choice;
    check: number;
  };

  type T_Check = {
    index: number; // 순번
    check: number; // 0 || 1
    rowNum: number;
    data: M_TotalInpection.T_RuleList[];
    choice: T_Choice;
  };

  type T_Return = {
    mappingData: M_TotalInpection.T_RuleList[];
    mappingChoice: T_Choice;
  };

  interface I_handlers {
    choice: (args: T_Choice) => T_ReturnChoice;
    inspectionThAllCheck: (args: T_ThAll) => T_Return;
    inspectionCheck: (args: T_Check) => T_Return;
  }
}
