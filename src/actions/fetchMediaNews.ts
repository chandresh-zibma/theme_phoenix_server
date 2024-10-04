import { slugs } from "@/constants/enums";
import { frontendApi } from "@/utils/axiosInstance";
import secrets from "@/utils/getSecrets";

const fetchMediaNews = async () => {
  try {
    const { data } = await frontendApi().get("frontend_post_get", {
      params: {
        companyId: secrets.COMPANY_ID,
        maxItem: 10,
        pageNo: 1,
        urlSlug: slugs.MediaNews,
        eSortDirection: 2,
        eSortBy: 1,
      },
    });
    if (data && data?.statusCode === 200) {
      return data?.lstPost || [];
    } else {
      return [];
    }
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default fetchMediaNews;
