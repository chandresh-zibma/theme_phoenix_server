import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Gallery from "./GalleryCard";
import Video from "./Video";
import MediaNews from "./MediaNews";
import Reels from "./ReelsSection";
import ThemeButton from "./ThemeButton";
import { slugs } from "@/constants/enums";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const GallerySectionTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index: number) => {
  //   setValue(index);
  // };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs value={value} onChange={handleChange} aria-label="Gallery Section Tab">
            <Tab
              label="Gallery"
              {...a11yProps(0)}
              className="bg-white capitalize font-semibold text-heading-text-color hover:text-theme-color transition-all duration-300"
            />
            <Tab
              label="Video"
              {...a11yProps(1)}
              className="bg-white capitalize font-semibold text-heading-text-color hover:text-theme-color transition-all duration-300"
            />
            <Tab
              label="Reels"
              {...a11yProps(2)}
              className="bg-white capitalize font-semibold text-heading-text-color hover:text-theme-color transition-all duration-300"
            />
            <Tab
              label="Media News"
              {...a11yProps(3)}
              className="bg-white capitalize font-semibold text-heading-text-color hover:text-theme-color transition-all duration-300"
            />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <div className="flex flex-col gap-7">
            <Gallery />
            <div className="flex w-full justify-center">
              <ThemeButton text="View More" link={`/post-category/${slugs.GalleryPhoto}`} />
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="flex flex-col gap-7">
            <Video />
            <div className="flex w-full justify-center">
              <ThemeButton text="View More" link={`/post-category/${slugs.GalleryVideo}`} />
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="flex flex-col gap-7">
            <Reels />
            <div className="flex w-full justify-center">
              <ThemeButton text="View More" link={`/post-category/${slugs.GalleryReels}`} />
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <div className="flex flex-col gap-7">
            <MediaNews />
            <div className="flex w-full justify-center">
              <ThemeButton text="View More" link={`/post-category/${slugs.MediaNews}`} />
            </div>
          </div>
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default GallerySectionTabs;
