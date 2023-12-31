import axios, { AxiosRequestConfig } from "axios";

//

const err = new Error("error");
const axiosCancelTokenSource = axios.CancelToken.source(); // 취소 토큰 생성
const axiosIsCancel = axios.isCancel(err); // typeof isCancel

export interface CancelToken {
  promise: Promise<Cancel>; // promise 로 반환
  reason?: Cancel;
  throwIfRequested(): void;
}

export interface CancelTokenStatic {
  new (executor: (cancel: Canceler) => void): CancelToken;
  source(): { token: CancelToken; cancel: Cancel }; // source() 는 CancelTokenSource 타입과 같다

  // export interface CancelTokenSource {
  //   token: CancelToken;
  //   cancel: Canceler;
  // }
}

export interface Cancel {
  message: string | undefined;
}

export interface Canceler {
  (message?: string, config?: AxiosRequestConfig, request?: any): void;
}
