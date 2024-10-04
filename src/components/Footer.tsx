"use client";

import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { CgFacebook } from "react-icons/cg";
import { AiFillYoutube } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import ScrollToTopButton from "./ScrollToTopButton";
import Link from "next/link";
import { useContactDetails } from "@/context/ContactDetailsContext";
import { frontendApi } from "@/utils/axiosInstance";
import { useMenu } from "@/context/MenuContext";
import { CidStorageKey, eUrlType } from "@/constants/enums";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { useConfigDetails } from "@/context/ConfigDetailsContext";
import FooterMovingText from "./FooterMovingText";
import HeaderLogoSkeleton from "./SkeletonComponents/HeaderLogoSkeleton";
import LinkSkeleton from "./SkeletonComponents/LinkSkeleton";
import FooterContactSkeleton from "./SkeletonComponents/FooterContactSkeleton";
import { MenuItem } from "@/constants/interfaces";
import Cookies from "js-cookie";

const Footer = () => {
  const cid = Cookies.get(CidStorageKey)

  const { contactDetails, setContactDetails, isContactDetailsLoads, setIsContactDetailsLoads } = useContactDetails();
  const { menu, menuLoads } = useMenu();
  const { siteConfig, isConfigLoads } = useConfigDetails();

  const [footerMenu, setFooterMenu] = useState<MenuItem[]>([]);

  function findOpenInNewTab(menuData: MenuItem[], result: MenuItem[] = []) {
    menuData.forEach((menu) => {
      if (menu.isShowInFooter === true) {
        result.push(menu);
      }
      if (menu.lstChildMenu && menu.lstChildMenu.length > 0) {
        findOpenInNewTab(menu.lstChildMenu, result);
      }
    });
    return result;
  }

  useEffect(() => {
    const openInNewTabItems = findOpenInNewTab(menu || []);
    setFooterMenu(openInNewTabItems);
  }, [menu]);

  const fetchContactDetails = async () => {
    setIsContactDetailsLoads(true);
    try {
      const { data } = await frontendApi().get("frontend_contact_us_get", {
        params: {
          companyId: cid,
        },
      });
      if (data && data?.statusCode === 200) {
        setContactDetails(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsContactDetailsLoads(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (contactDetails) {
        return;
      }
      if (cid) {
        await fetchContactDetails();
        setIsContactDetailsLoads(false);
      }
    })();
  }, [contactDetails, cid]);

  return (
    <>
      <ScrollToTopButton />
      <footer className="bg-footer-bg-color dark:bg-gray-900 mt-auto">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 md:w-1/4 lg:w-1/3 pt-0 pl-0 p-7">
              {/* <Link href="/" className="flex items-center">
                <img src="/assets/logo.png" className="h-9 me-3" alt="Logo" />
              </Link> */}
              {isConfigLoads ? (
                <HeaderLogoSkeleton className="h-36 w-36" />
              ) : (
                <>
                  {siteConfig && (
                    <Link href="/">
                      <img src={siteConfig?.logo || "/assets/logo.png"} alt="" className="h-[170px]" />
                    </Link>
                  )}
                </>
              )}
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 md:w-3/4 lg:w-2/3 footerMarqueeSec">
              <FooterMovingText />
              {/* <div className="marquee footer">
                  <span className="text-sm">
                    <p className="mb-3 text-white">
                      More than 20 students Rank 600+ in NEET 2024 | More than 74 students have A1 Grade and 168+
                      Students have A2 Grade in SSC 2024
                    </p>
                    <p className="mb-3 text-theme-color">
                      Grand Success in JEE MAIN 2024 | 74 Students Qualified for JEE ADVANACED | Grand Seminar at
                      LUNDAVADA on 24th Dec
                    </p>
                    <p className="mb-3 text-white">
                      More than 15 students have A1 Grade and 60+ Students have A2 Graede in SSC 2023
                    </p>
                    <p className="mb-3 text-theme-color">
                      215+ students have 90+ PR and 380+ students have 80+ PR in HSC 2023
                    </p>
                    <p className="mb-3 text-white">
                      Phoenixian achieve an outstanding result in JEE Advance 2023 get AIR 1170 | 10+ Students get 95+
                      PR in JEE Main 2023 | More than 20+ Students are selected in MBBS
                    </p>
                    <p className="mb-3 text-theme-color">
                      215+ students have 90+ PR and 380+ students have 80+ PR in HSC 2023
                    </p>
                    <p className="mb-3 text-white">
                      More than 20 students Rank 600+ in NEET 2024 | More than 74 students have A1 Grade and 168+
                      Students have A2 Grade in SSC 2024
                    </p>
                    <p className="mb-3 text-theme-color">
                      Grand Success in JEE MAIN 2024 | 74 Students Qualified for JEE ADVANACED | Grand Seminar at
                      LUNDAVADA on 24th Dec
                    </p>
                    <p className="mb-3 text-white">
                      More than 15 students have A1 Grade and 60+ Students have A2 Graede in SSC 2023
                    </p>
                    <p className="mb-3 text-theme-color">
                      215+ students have 90+ PR and 380+ students have 80+ PR in HSC 2023
                    </p>
                    <p className="mb-3 text-white">
                      Phoenixian achieve an outstanding result in JEE Advance 2023 get AIR 1170 | 10+ Students get 95+
                      PR in JEE Main 2023 | More than 20+ Students are selected in MBBS
                    </p>
                  </span>
                </div> */}
              <div>
                {footerMenu?.length > 0 && (
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">Useful Links</h2>
                )}
                {menuLoads ? (
                  <div className="">
                    <LinkSkeleton />
                    <LinkSkeleton />
                    <LinkSkeleton />
                    <LinkSkeleton />
                  </div>
                ) : (
                  <ul className="text-gray-500 dark:text-gray-400">
                    {footerMenu.map((item, index) => {
                      let endPoint = "";
                      switch (item?.customUrlType) {
                        case eUrlType.Page:
                          endPoint = `/page${item?.customUrl?.replace("..", "")}`;
                          break;
                        case eUrlType.Post:
                          endPoint = `/post${item?.customUrl?.replace("..", "")}`;
                          break;
                        case eUrlType.PostCategory:
                          endPoint = `/post-category${item?.customUrl?.replace("..", "")}`;
                          break;
                        default:
                          endPoint = item?.customUrl || '';
                          break;
                      }
                      return (
                        <li key={"footer_useful_links" + index} className="mb-1">
                          <Link href={endPoint} className="text-white/40 hover:text-theme-color text-sm font">
                            {item.menuTitle}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              <div>
                {(contactDetails?.contactNo || contactDetails?.displayEmail || contactDetails?.address) && (
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">Contact Us</h2>
                )}
                {isContactDetailsLoads ? (
                  <FooterContactSkeleton />
                ) : (
                  <ul className="text-gray-500 dark:text-gray-400">
                    {contactDetails?.contactNo && (
                      <li className="mb-3 flex items-center gap-2">
                        <FaPhone className="min-w-4" />
                        <Link
                          href={`tel:${contactDetails?.contactNo}`}
                          className="text-white/40 hover:text-theme-color text-sm font"
                        >
                          {contactDetails?.contactNo}
                        </Link>
                      </li>
                    )}

                    {contactDetails?.displayEmail && (
                      <li className="mb-3 flex items-center gap-2">
                        <IoMdMail className="min-w-4" />
                        <Link
                          href="mailto:${contactDetails?.displayEmail}"
                          className="text-white/40 hover:text-theme-color text-sm font"
                        >
                          {contactDetails?.displayEmail}
                        </Link>
                      </li>
                    )}
                    {contactDetails?.address && (
                      <li className="mb-3 flex items-center gap-2">
                        <MdLocationPin className="min-w-4" />
                        <Link href="/" className="text-white/40 hover:text-theme-color text-sm font">
                          {contactDetails?.address}
                        </Link>
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            {isConfigLoads ? (
              <div>
                <div className="w-40 h-3 bg-gray-300 rounded-full mb-6" />
              </div>
            ) : (
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                {siteConfig?.copyrightText}
              </span>
            )}
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {/* {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-gray-500 hover:text-theme-color ms-5">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.srLabel}</span>
                </Link>
              ))} */}
              {contactDetails?.faceBook && (
                <Link
                  href={contactDetails?.faceBook}
                  target="_blank"
                  className="text-gray-500 hover:text-theme-color ms-5"
                >
                  <CgFacebook className="h-5 w-5" />
                  <span className="sr-only">{"Facebook"}</span>
                </Link>
              )}
              {contactDetails?.instagram && (
                <Link
                  href={contactDetails?.instagram}
                  target="_blank"
                  className="text-gray-500 hover:text-theme-color ms-5"
                >
                  <RiInstagramLine className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              )}
              {contactDetails?.twitter && (
                <Link
                  href={contactDetails?.twitter}
                  target="_blank"
                  className="text-gray-500 hover:text-theme-color ms-5"
                >
                  <BsTwitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              )}
              {contactDetails?.linkedin && (
                <Link
                  href={contactDetails?.linkedin}
                  target="_blank"
                  className="text-gray-500 hover:text-theme-color ms-5"
                >
                  <BsLinkedin className="h-5 w-5" />
                  <span className="sr-only">Linkedin</span>
                </Link>
              )}
              {contactDetails?.youtube && (
                <Link
                  href={contactDetails?.youtube}
                  target="_blank"
                  className="text-gray-500 hover:text-theme-color ms-5"
                >
                  <AiFillYoutube className="h-5 w-5" />
                  <span className="sr-only">Youtube</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
