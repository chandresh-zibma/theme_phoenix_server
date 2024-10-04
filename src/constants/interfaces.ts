interface MenuItem {
  menuId: number;
  parentMenuId: number;
  eMenuType: number;
  customUrlType: number | null;
  customUrl: string | null;
  menuTitle: string;
  serialNo: number;
  isOpenInNewTab: boolean | null;
  isShowInFooter: boolean | null;
  lstChildMenu: MenuItem[];
}

export type { MenuItem };
