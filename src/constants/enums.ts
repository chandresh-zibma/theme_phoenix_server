enum eUrlType {
  PostCategory = 1,
  Post = 2,
  Page = 3,
  Other = 4,
}

const defaultSites = ["theme3.zibma.com", "phoenixinternationalschool.in"];
const defaultSitesFor81 = ["phoenixschools.in"];

const imageElements: Record<string, { gap: number; images: string[] }> = {
  "phoenixschools.in": {
    gap: 550,
    images: [
      "/assets/element-1.png",
      "/assets/element-2.png",
      "/assets/element-3.png",
      "/assets/element-4.png",
      "/assets/element-5.png",
      "/assets/element-6.png",
      "/assets/element-7.png",
      "/assets/element-8.png",
      "/assets/element-9.png",
      "/assets/element-10.png",
    ],
  },
  "localhost:3000": {
    gap: 550,
    images: [
      "/assets/element-1.png",
      "/assets/element-2.png",
      "/assets/element-3.png",
      "/assets/element-4.png",
      "/assets/element-5.png",
      "/assets/element-6.png",
      "/assets/element-7.png",
      "/assets/element-8.png",
      "/assets/element-9.png",
      "/assets/element-10.png",
    ],
  },
};
enum ePhotoSize {
  original = 1,
  thumbnail = 2,
  _100 = 3,
  _250 = 4,
  _800 = 5,
  _1600 = 6,
}

const CidStorageKey = "cid";

enum eMenuType {
  Menu = 1,
  CustomUrl = 2,
}

enum ePostCategoryType {
  HomepageSlider = 1,
  GalleryPhoto = 2,
  GalleryVideo = 3,
  GalleryReels = 4,
  GalleryMediaNews = 5,
  Odometer = 6,
  Facilities = 7,
  Testimonial = 8,
  Achievement = 9,
  Dignitaries = 10,
  Event = 11,
  Photo = 12,
  Video = 13,
  News = 14,
  Social = 15,
  Political = 16,
  Blog = 17,
  Yojanaos = 18,
  HomepagePopup = 19,
}

const slugs = {
  HomeSlider: "homepage-slider",
  Achievement: "achievement",
  Testimonial: "testimonial",
  Odometer: "odometer",
  Facilities: "facilities",
  Dignitaries: "dignitaries",
  MediaNews: "gallery-media-news",
  HomePopup: "homepage-popup",
  GalleryPhoto: "gallery-photo",
  GalleryVideo: "gallery-video",
  HomeAboutUs: "home-about-us",
  GalleryReels: "gallery-reels",
};

const postCategories = [
  {
    categoryName: "Homepage Slider",
    ePostCategoryType: ePostCategoryType.HomepageSlider,
    enums: {
      Photo: 1,
      TitleFontColor: 2,
      Title: 3,
      SubTitle: 4,
      RedirectUrl: 5,
      Vertical: 6,
      Horizontal: 7,
    },
  },
  {
    categoryName: "Odometer",
    ePostCategoryType: ePostCategoryType.Odometer,
    enums: {
      Value: 1,
      Icon: 2,
      Color: 3,
      Photo: 4,
      Description: 5,
    },
  },
  {
    categoryName: "Facilities",
    ePostCategoryType: ePostCategoryType.Facilities,
    enums: {
      Photo: 1,
      Color: 2,
      Description: 3,
      RedirectUrl: 4,
    },
  },
  {
    categoryName: "Gallery-Photo",
    ePostCategoryType: ePostCategoryType.GalleryPhoto,
    enums: {
      CoverImage: 1,
      Photo: 2,
      Date: 3,
      Description: 4,
    },
  },
  {
    categoryName: "Gallery-Video",
    ePostCategoryType: ePostCategoryType.GalleryVideo,
    enums: {
      VideoUrl: 1,
      CoverImage: 2,
      Date: 3,
      Description: 4,
    },
  },
  {
    categoryName: "Gallery-Reels",
    ePostCategoryType: ePostCategoryType.GalleryReels,
    enums: {
      CoverImage: 2,
      VideoUrl: 1,
      Date: 3,
      Description: 4,
    },
  },
  {
    categoryName: "Gallery-Media News",
    ePostCategoryType: ePostCategoryType.GalleryMediaNews,
    enums: {
      CoverImage: 1,
      Photo: 2,
      Date: 3,
      Description: 4,
    },
  },
  {
    categoryName: "Testimonial",
    ePostCategoryType: ePostCategoryType.Testimonial,
    enums: {
      PersonName: 1,
      PersonDetails: 2,
      CoverImage: 3,
      Date: 4,
      Description: 5,
    },
  },
  {
    categoryName: "Achievement",
    ePostCategoryType: ePostCategoryType.Achievement,
    enums: {
      CoverImage: 1,
      Date: 2,
      Description: 3,
    },
  },
  {
    categoryName: "Dignitaries",
    ePostCategoryType: ePostCategoryType.Dignitaries,
    enums: {
      PersonName: 1,
      Designation: 2,
      Photo: 3,
      Message: 4,
      Address: 5,
    },
  },
  {
    categoryName: "Homepage Popup",
    ePostCategoryType: ePostCategoryType.HomepagePopup,
    enums: {
      Description: 1,
      RedirectUrl: 2,
      ShowPopup: 3,
    },
  },
  {
    categoryName: "Our Centers",
    ePostCategoryType: 101,
    enums: {
      CoverImage: 101,
      Title: 102,
      Address: 103,
      MobileNo: 104,
      Email: 105,
      Latitude: 107,
      Longitude: 106,
    },
  },
  {
    categoryName: "Activity",
    ePostCategoryType: 102,
    enums: {
      CoverImage: 101,
      Title: 102,
      Description: 103,
      Color: 104,
    },
  },
  {
    categoryName: "FAQ",
    ePostCategoryType: 103,
    enums: {
      Question: 101,
      Answer: 102,
    },
  },
  {
    categoryName: "Academics",
    ePostCategoryType: 104,
    enums: {
      Photo: 101,
      Title: 102,
      SubTitle: 103,
      Description: 104,
      RedirectUrl: 105,
    },
  },
];

export {
  CidStorageKey,
  eUrlType,
  eMenuType,
  ePostCategoryType,
  postCategories,
  ePhotoSize,
  slugs,
  defaultSites,
  defaultSitesFor81,
  imageElements,
};

// 95, 123;
