import axios from "axios";

interface AxiosTypes {
  get: <T>(url: string) => Promise<T>;
  post: (url: string) => void;
}
interface Data {
  id: number;
  userId: number;
}

const ax: AxiosTypes = axios;

(async () => {
  try {
    const response = ax.get<Data>("url");
  } catch (err) {}
})();
