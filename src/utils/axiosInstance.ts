import { BASE_URL } from "@/constants/env";
import axios from "axios";

const frontendApi = () => {
  return axios.create({
    baseURL: BASE_URL,
  });
};

export { frontendApi };
