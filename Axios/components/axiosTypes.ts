import axios from "axios";

interface AxiosTypes {
  get: <T>(url: string) => Promise<T>;
  post: (url: string) => void;
}

const ax: AxiosTypes = axios;

(async () => {
  try {
    const response = ax.get("url");
  } catch (err) {}
})();
