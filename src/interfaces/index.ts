interface FrontendComponent {
  componentId: number;
  label: string;
  componentValue: string;
  originalURL: string | null;
  eFrontendComponetType: number;
}

interface PostData {
  postDataId: number;
  postCategoryId: number;
  categoryName: string;
  serialNo: number;
  postTitle: string;
  publishStatus: string;
  urlSlug: string;
  updateTime: string;
  eStatus: number;
  ePostCategoryType: number;
  lstData: FrontendComponent[];
}

interface PageDetails {
  pageId: number;
  pageTitle: string;
  pdfGuid: string;
  description: string;
  headerImageGuid: string;
}

export type { FrontendComponent, PostData, PageDetails };
