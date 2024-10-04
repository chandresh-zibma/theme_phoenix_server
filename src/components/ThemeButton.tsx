import React, { HTMLAttributeAnchorTarget } from "react";
interface ButtonProps {
  text: string;
  link?: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}
const ThemeButton = ({ text, link, className, target }: ButtonProps) => {
  return (
    <>
      {/* <Link href={link || "/"} target={target}> */}
      <button
        className={`px-6 py-3 bg-button-bg-color text-white w-fit uppercase text-xs font-medium tracking-widest styleButton flex relative overflow-hidden ${className}`}
        onClick={() => {
          window.open(link, target);
        }}
      >
        <div className="bubble"></div>
        <span className="overflow-hidden relative z-[1] block">
          <span className="relative z-[1] block">{text}</span>
        </span>
      </button>
      {/* </Link> */}
    </>
  );
};

export default ThemeButton;
