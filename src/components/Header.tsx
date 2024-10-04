"use client";
import { CidStorageKey, eUrlType } from "@/constants/enums";
import { frontendApi } from "@/utils/axiosInstance";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Cookies from "js-cookie";
import { useMenu } from "@/context/MenuContext";
import TopHeaderMovingText from "./TopHeaderMovingText";
import ClickAwayListener from "react-click-away-listener";
import { useConfigDetails } from "@/context/ConfigDetailsContext";
import HeaderLogoSkeleton from "./SkeletonComponents/HeaderLogoSkeleton";

const NewHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
    const [openNestedSubMenuIndex, setOpenNestedSubMenuIndex] = useState<{ [key: number]: number | null }>({});
    // const [showSkeleton, setShowSkeleton] = useState(false);
    // const [menu, setMenu] = useState<Menu[]>([]);
    const { menu, setMenu, menuLoads, setMenuLoads } = useMenu();
    const { siteConfig, isConfigLoads, setIsConfigLoads, setSiteConfig } = useConfigDetails();

    const fetchMenus = async () => {
        // setShowSkeleton(true);
        try {
            const { data } = await frontendApi().get("/frontend_menu_get", {
                params: {
                    companyId: Cookies.get(CidStorageKey),
                },
            });

            if (data && data?.statusCode === 200) {
                setMenu(data?.lstMenu);
            }
        } catch (err) {
            console.error(err);
        } finally {
            // setShowSkeleton(false);
        }
    };

    useEffect(() => {
        (async () => {
            if (menu) return;
            await fetchMenus();
            setMenuLoads(false);
        })();
    }, [menu]);

    const fetchConfigDetails = async () => {
        setIsConfigLoads(true);
        try {
            const { data } = await frontendApi().get("/frontend_config_get", {
                params: {
                    companyId: Cookies.get(CidStorageKey),
                },
            });

            if (data && data?.statusCode === 200) {
                setSiteConfig(data);
                // dispatch(ConfigDataState({ data }));
            }
        } catch (error) {
            console.error("Error fetching logo:", error);
        } finally {
            setIsConfigLoads(false);
        }
    };

    useEffect(() => {
        fetchConfigDetails();
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubMenu = (index: number) => {
        setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
        setOpenNestedSubMenuIndex({}); // Close all nested submenus when a different submenu is opened
    };

    const handleClickAway = () => {
        setOpenSubMenuIndex(null);
        setOpenNestedSubMenuIndex({}); // Close all nested submenus when a different submenu is opened
    };

    //   const toggleNestedSubMenu = (subMenuIndex: number, nestedIndex: number) => {
    //     setOpenNestedSubMenuIndex((prevState) => {
    //       return {
    //         ...prevState,
    //         [subMenuIndex]: prevState[subMenuIndex] == nestedIndex ? null : nestedIndex,
    //       };
    //     });
    //   };

    const toggleNestedSubMenu = (subMenuIndex: number, nestedIndex: number) => {
        if (openNestedSubMenuIndex[subMenuIndex]) {
            setOpenNestedSubMenuIndex((prevState) => ({
                ...prevState,
                [subMenuIndex]: prevState[subMenuIndex] == nestedIndex ? null : nestedIndex,
            }));
        } else {
            setOpenNestedSubMenuIndex((prevState) => ({
                ...prevState,
                [subMenuIndex]: nestedIndex,
            }));
        }
        // setOpenNestedSubMenuIndex((prevState) => {
        //   if (prevState[subMenuIndex]) {
        //     return {
        //       ...prevState,
        //       [subMenuIndex]: null,
        //     };
        //   } else {
        //     return {
        //       ...prevState,
        //       [subMenuIndex]: nestedIndex,
        //     };
        //   }
        // });
    };

    const handleMouseEnterOnInnerMost = (subMenuIndex: number, nestedIndex: number) => {
        setOpenNestedSubMenuIndex((prevState) => ({
            ...prevState,
            [subMenuIndex]: prevState[subMenuIndex] == nestedIndex ? null : nestedIndex,
        }));
    };

    const handleMuseEnterOnFirst = (index: number) => {
        setOpenSubMenuIndex(index);
        setOpenNestedSubMenuIndex({});
    };

    const handleMouseLeaveOnInnerMost = () => {
        setOpenNestedSubMenuIndex({});
    };

    return (
        <>
            <div className="container mx-auto">
                <TopHeaderMovingText />
            </div>
            <header className="bg-white z-[999] sticky top-0">
                <div className="container mx-auto py-2">
                    <div className="flex justify-between px-3">
                        {isConfigLoads ? (
                            <HeaderLogoSkeleton />
                        ) : (
                            <>
                                {siteConfig && (
                                    <Link href="/">
                                        <img src={siteConfig?.logo || "/assets/logo.png"} alt="" className="h-16" />
                                    </Link>
                                )}
                            </>
                        )}
                        {menuLoads ? (
                            // <MenuSkeleton />
                            <></>
                        ) : (
                            <nav className="flex select-none">
                                <div
                                    className="md:hidden cursor-pointer flex flex-col gap-1 justify-center bg-gray-100 hover:bg-theme-color/10 px-2 group"
                                    onClick={toggleMenu}
                                >
                                    <div
                                        className={`w-4 h-0.5 bg-gray-500 group-hover:bg-theme-color transition-transform ${isOpen ? "rotate-45 translate-y-1.5" : ""
                                            }`}
                                    ></div>
                                    <div
                                        className={`w-4 h-0.5 bg-gray-500 group-hover:bg-theme-color transition-opacity ${isOpen ? "opacity-0" : ""
                                            }`}
                                    ></div>
                                    <div
                                        className={`w-4 h-0.5 bg-gray-500 group-hover:bg-theme-color transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
                                            }`}
                                    ></div>
                                </div>
                                <ul
                                    className={`text-sm md:flex md:items-center absolute md:static 
                  top-full left-0 w-dvw md:w-auto bg-gray-100 md:bg-transparent transition-all duration-300 ${isOpen ? "block" : "hidden"
                                        }`}
                                >
                                    {menu?.map((menu, index, arr) => {
                                        let endPoint = "";
                                        switch (menu?.customUrlType) {
                                            case eUrlType.Page:
                                                endPoint = `/page${menu?.customUrl?.replace("..", "")}`;
                                                break;
                                            case eUrlType.Post:
                                                endPoint = `/post${menu?.customUrl?.replace("..", "")}`;
                                                break;
                                            case eUrlType.PostCategory:
                                                endPoint = `/post-category${menu?.customUrl?.replace("..", "")}`;
                                                break;
                                            default:
                                                endPoint = menu?.customUrl || "";
                                                break;
                                        }
                                        return (
                                            <li className="relative" key={menu?.menuTitle + index}>
                                                {menu.lstChildMenu && menu.lstChildMenu?.length > 0 ? (
                                                    <ClickAwayListener
                                                        // onClickAway={handleClickAway}
                                                        onClickAway={() => {
                                                            // handleClickAway()
                                                        }}
                                                    >
                                                        <div
                                                            className="relative "
                                                            onMouseEnter={() => handleMuseEnterOnFirst(index)}
                                                            onMouseLeave={handleClickAway}
                                                        >
                                                            <button
                                                                className="relative flex items-center focus:outline-none py-2 md:py-4 px-4 hover:text-theme-color w-full justify-between gap-1 cursor-pointer"
                                                                type="button"
                                                                onClick={() => {
                                                                    toggleSubMenu(index);
                                                                }}
                                                            >
                                                                {menu.menuTitle}
                                                                <MdKeyboardArrowDown
                                                                    className={`${openSubMenuIndex === index ? "rotate-180" : "rotate-0"} transition-all`}
                                                                />
                                                                {openSubMenuIndex === index && (
                                                                    <div className="absolute w-full h-0.5 bg-theme-color bottom-0 left-0" />
                                                                )}
                                                            </button>
                                                            <ul
                                                                className={`md:absolute md:bg-white mt-0 rounded-md md:border border-t border-b  min-w-[150px] md:max-w-[250px] md:w-max transition-all group-hover:block ${openSubMenuIndex === index ? "block" : "hidden"
                                                                    } ${index === arr?.length - 1 || index === arr?.length - 2
                                                                        ? "!right-0 left-auto"
                                                                        : "left-0"
                                                                    } md:top-full w-full`}
                                                            >
                                                                {menu.lstChildMenu &&
                                                                    menu.lstChildMenu?.length > 0 &&
                                                                    menu.lstChildMenu.map((subMenu, subIndex) => {
                                                                        let endPoint = "";
                                                                        switch (subMenu?.customUrlType) {
                                                                            case eUrlType.Page:
                                                                                endPoint = `/page${subMenu?.customUrl?.replace("..", "")}`;
                                                                                break;
                                                                            case eUrlType.Post:
                                                                                endPoint = `/post${subMenu?.customUrl?.replace("..", "")}`;
                                                                                break;
                                                                            case eUrlType.PostCategory:
                                                                                endPoint = `/post-category${subMenu?.customUrl?.replace("..", "")}`;
                                                                                break;
                                                                            default:
                                                                                endPoint = subMenu?.customUrl || "";
                                                                                break;
                                                                        }
                                                                        return (
                                                                            <li className="relative" key={subMenu?.menuTitle + subIndex}>
                                                                                {subMenu.lstChildMenu && subMenu.lstChildMenu?.length > 0 ? (
                                                                                    <div
                                                                                        // className={`flex items-center focus:outline-none py-2 px-4 hover:text-theme-color hover:bg-gray-100 w-full justify-between gap-1 text-left ${
                                                                                        //   openNestedSubMenuIndex[index] === subIndex ? "text-theme-color" : ""
                                                                                        // }`}
                                                                                        onMouseEnter={() => handleMouseEnterOnInnerMost(index, subIndex)}
                                                                                        onMouseLeave={handleMouseLeaveOnInnerMost}
                                                                                    >
                                                                                        <button
                                                                                            className={`flex items-center focus:outline-none py-2 px-4 hover:text-theme-color hover:bg-gray-100 w-full justify-between gap-1 text-left ${openNestedSubMenuIndex[index] === subIndex ? "text-theme-color" : ""
                                                                                                }`}
                                                                                            onClick={() => toggleNestedSubMenu(index, subIndex)}
                                                                                        >
                                                                                            {subMenu.menuTitle}
                                                                                            <MdKeyboardArrowDown
                                                                                                className={`${openNestedSubMenuIndex[index] === subIndex
                                                                                                    ? "md:-rotate-90 rotate-180"
                                                                                                    : "md:-rotate-90 rotate-0"
                                                                                                    } transition-all min-w-[14px] aspect-square`}
                                                                                            />
                                                                                        </button>
                                                                                        <ul
                                                                                            className={`min-[992px]:absolute ${index === arr?.length - 1 || index === arr?.length - 2
                                                                                                ? "min-[992px]:right-full"
                                                                                                : "min-[992px]:left-full"
                                                                                                } min-[992px]:top-0  bg-white rounded-md border md:max-w-[250px] md:w-max mt-2 min-[992px]:mt-0 transition-all ${openNestedSubMenuIndex[index] === subIndex ? "block" : "hidden"
                                                                                                }`}
                                                                                        //   className={`md:absolute md:left-full md:top-0 md:max-w-[300px] min-w-[150px] w-max bg-white rounded-md border mt-2 md:mt-0 transition-all ${
                                                                                        //     openNestedSubMenuIndex[index] === subIndex ? "block" : "hidden"
                                                                                        //   } ${
                                                                                        //     index === arr?.length - 1
                                                                                        //       ? "md:-left-[calc(100%+5px)] md:mr-2"
                                                                                        //       : "md:left-full md:ml-2"
                                                                                        //   } `}
                                                                                        >
                                                                                            {subMenu.lstChildMenu.map((nestedSubMenu, nestedIndex) => {
                                                                                                let endPoint = "";
                                                                                                switch (nestedSubMenu?.customUrlType) {
                                                                                                    case eUrlType.Page:
                                                                                                        endPoint = `/page${nestedSubMenu?.customUrl?.replace("..", "")}`;
                                                                                                        break;
                                                                                                    case eUrlType.Post:
                                                                                                        endPoint = `/post${nestedSubMenu?.customUrl?.replace("..", "")}`;
                                                                                                        break;
                                                                                                    case eUrlType.PostCategory:
                                                                                                        endPoint = `/post-category${nestedSubMenu?.customUrl?.replace(
                                                                                                            "..",
                                                                                                            ""
                                                                                                        )}`;
                                                                                                        break;
                                                                                                    default:
                                                                                                        endPoint = nestedSubMenu?.customUrl || "";
                                                                                                        break;
                                                                                                }
                                                                                                return (
                                                                                                    <li key={nestedIndex}>
                                                                                                        <Link
                                                                                                            className="py-2 px-4 flex hover:text-theme-color hover:bg-gray-100"
                                                                                                            href={endPoint}
                                                                                                            onClick={() => {
                                                                                                                setIsOpen(false);
                                                                                                                setOpenSubMenuIndex(null);
                                                                                                                setOpenNestedSubMenuIndex({});
                                                                                                            }}
                                                                                                        >
                                                                                                            {nestedSubMenu.menuTitle}
                                                                                                        </Link>
                                                                                                    </li>
                                                                                                );
                                                                                            })}
                                                                                        </ul>
                                                                                    </div>
                                                                                ) : (
                                                                                    <Link
                                                                                        className="py-2 px-4 flex hover:text-theme-color hover:bg-gray-100"
                                                                                        href={endPoint}
                                                                                        onClick={() => {
                                                                                            setIsOpen(false);
                                                                                            setOpenSubMenuIndex(null);
                                                                                        }}
                                                                                    >
                                                                                        {subMenu.menuTitle}
                                                                                    </Link>
                                                                                )}
                                                                            </li>
                                                                        );
                                                                    })}
                                                            </ul>
                                                        </div>
                                                    </ClickAwayListener>
                                                ) : (
                                                    <Link
                                                        className="py-2 px-4 md:py-0 flex hover:text-theme-color"
                                                        href={endPoint}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {menu?.menuTitle}
                                                    </Link>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default NewHeader;
