import { frontendApi } from "@/utils/axiosInstance";
import secrets from "@/utils/getSecrets";

export default async function fetchMenus() {
  try {
    const { data } = await frontendApi().get("/frontend_menu_get", {
      params: {
        companyId: secrets.COMPANY_ID,
      },
    });

    if (data && data.statusCode === 200) {
      return data.lstMenu || [];
    } else {
      return [];
    }
  } catch (err) {
    console.error("Error fetching menus:", err);
    return [];
  }
}
