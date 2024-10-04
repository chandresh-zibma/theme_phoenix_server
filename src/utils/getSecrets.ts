import { CidStorageKey } from "@/constants/enums";
import { BASE_URL } from "@/constants/env";
import Cookies from "js-cookie";

class Secrets {
  BASE_URL: string;
  COMPANY_ID: number;

  constructor() {
    this.BASE_URL = BASE_URL;
    this.COMPANY_ID = Number(Cookies.get(CidStorageKey));
  }

  getSecrets() {
    return {
      BASE_URL: this.BASE_URL,
      COMPANY_ID: this.COMPANY_ID,
    };
  }
}
const secrets = new Secrets();

export default secrets;
