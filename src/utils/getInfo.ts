import { postCategories } from "@/constants/enums";
import { PostData } from "@/interfaces";

const getImageUrl = (currentPost: PostData) => {
  let imageUrl = "";

  if (postCategories) {
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Photo) {
              imageUrl = data?.componentValue;
            }
          });
        }
      }
    });
  }

  return imageUrl;
};

const getCoverImage = (currentPost: PostData) => {
  let imageUrl = "";
  if (postCategories) {
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.CoverImage) {
              imageUrl = data?.componentValue;
            }
          });
        }
      }
    });
  }
  return imageUrl;
};

const getTitle = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Title) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};

const getSubTitle = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.SubTitle) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};

const getVideoUrl = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.VideoUrl) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};

const getTitleColor = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.TitleFontColor) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};
const getColor = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Color) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};
const getHorizontal = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Horizontal) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};
const getVertical = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Vertical) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};

const getDescription = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Description) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};

const getDate = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Date) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};
const getQuestion = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Question) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};
const getAnswer = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Answer) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};

const getName = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.PersonName) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};
const getPersonDetails = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.PersonDetails) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};

const getDesignation = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Designation) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};

const getOdoCounter = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Value) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};

const getIcon = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Icon) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};

const getAddress = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Address) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};

const getMobileNo = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.MobileNo) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};

const getEmail = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Email) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};

const getRedirectUrl = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.RedirectUrl) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};
const getShowPopup = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.ShowPopup) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};
const getMessage = (currentPost: PostData) => {
  let value = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Message) {
              value = data?.componentValue;
            }
          });
        }
      }
    });
  return value;
};

const getMapLink = (currentPost: PostData) => {
  let latitude = "";
  let longitude = "";
  if (postCategories)
    postCategories.forEach((postCategory) => {
      if (postCategory.ePostCategoryType === currentPost.ePostCategoryType) {
        if (currentPost.lstData) {
          currentPost.lstData.forEach((data) => {
            if (data.eFrontendComponetType === postCategory?.enums?.Latitude) {
              latitude = data?.componentValue;
            }
            if (data.eFrontendComponetType === postCategory?.enums?.Longitude) {
              longitude = data?.componentValue;
            }
          });
        }
      }
    });
  const mapLink = `https://www.google.com/maps/@${latitude},${longitude}`;
  return mapLink;
};

export {
  getImageUrl,
  getTitle,
  getSubTitle,
  getTitleColor,
  getHorizontal,
  getVertical,
  getDescription,
  getDate,
  getCoverImage,
  getName,
  getDesignation,
  getOdoCounter,
  getIcon,
  getAddress,
  getMobileNo,
  getEmail,
  getMapLink,
  getRedirectUrl,
  getVideoUrl,
  getShowPopup,
  getColor,
  getMessage,
  getPersonDetails,
  getQuestion,
  getAnswer,
};
