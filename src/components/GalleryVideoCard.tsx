import { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { Box, Fade, Modal, useMediaQuery, useTheme } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import ReactPlayer from "react-player";

interface VideoItem {
  description: string;
  date: string;
  imageUrl: string;
  videoLink: string;
}

const GalleryVideoCard: React.FC<VideoItem> = ({ description, date, imageUrl, videoLink }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md"));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70vw",
    height: "50%",
    minWidth: isMediumUp ? "400px" : "90vw",
    maxWidth: "818px",
  };

  return (
    <>
      <div className="group h-72 overflow-hidden relative">
        <div className="top-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center gap-5 z-10 absolute bottom-0 left-0 w-full p-5 bg-black/40 backdrop-grayscale transition-all duration-300 overflow-hidden">
          <span className="text-sm text-white text-center line-clamp-2 break-all">{description}</span>
          <button className="p-3 pr-2.5 bg-white/70" onClick={() => handleOpen()}>
            <FaPlay size={15} className="text-theme-color" />
          </button>
          <span className="text-xs text-white">{date}</span>
        </div>
        <img
          src={imageUrl}
          alt=""
          className="h-full w-full object-cover object-center group-hover:scale-125 transition-all duration-300"
        />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="absolute -top-4 -right-4">
              <button
                aria-label="close"
                onClick={handleClose}
                className="p-2 border rounded-full bg-black/50 hover:bg-theme-color transition-all duration-300 hover:border-theme-color"
              >
                <IoCloseSharp size={20} color="white" />
              </button>
            </div>
            <Box height="100%">
              <ReactPlayer
                url={videoLink || ""}
                playing
                width="100%"
                height="100%"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                controls
              ></ReactPlayer>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default GalleryVideoCard;
