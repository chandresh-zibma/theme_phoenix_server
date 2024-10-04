"use client";
import React, { useEffect, useState } from "react";
import HomeMainSlider from "./HomeMainSlider";
import ThemeButton from "./ThemeButton";
import AchievementsCard from "./AchievementsCard";
import Box from "@mui/material/Box";
import GallerySectionTabs from "./GallerySectionTabs";
import FacilitySlider from "./FacilitySlider";
import ThemeHeading from "./ThemeHeading";
import ApplicationDetailContainer from "./ApplicationDetailContainer";
import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa6";
import TestimonialSlider from "./TestimonialSlider";
import OdometerCard from './OdometerCard'
import OurCenterSlider from "./OurCenterSlider";
import Cookies from "js-cookie";
import { Modal } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import { frontendApi } from "@/utils/axiosInstance";
import { CidStorageKey, ePhotoSize, slugs } from "@/constants/enums";
import HomePageSkeleton from "./SkeletonComponents/HomePageSkeleton";
import { HomeGalleryProvider } from "@/context/HomeGalleryContext";
import { getDescription, getRedirectUrl, getShowPopup } from "@/utils/getInfo";
import Link from "next/link";
import { useContactDetails } from "@/context/ContactDetailsContext";
import { PageDetails, PostData } from "@/interfaces";

export default function HomePage() {
    const { contactDetails } = useContactDetails()
    const [displayPopUp, setDisplayPopUp] = useState(true);
    const [homePagePopup, setHomePagePopup] = useState<PostData | null>(null);
    const [showSkeleton, setShowSkeleton] = useState(true);

    // HomePage details
    const [homepageSlider, setHomepageSlider] = useState([]);
    const [achievements, setAchievements] = useState([]);
    const [testimonialDetails, setTestimonialDetails] = useState([]);
    const [odometerDetails, setOdometerDetails] = useState([]);
    const [centers, setCenters] = useState([]);
    const [facilities, setFacilities] = useState([]);
    const [homeAboutUs, setHomeAboutUs] = useState<PageDetails | null>(null);
    const cid = Cookies.get(CidStorageKey)

    const fetchHomepageSlider = async () => {
        try {
            const { data } = await frontendApi().get("frontend_post_get", {
                params: {
                    companyId: cid,
                    maxItem: 0,
                    pageNo: 1,
                    urlSlug: slugs.HomeSlider,
                    ePhotoSize: ePhotoSize._1600,
                    eSortDirection: 1,
                    eSortBy: 1,
                },
            });
            if (data && data?.statusCode === 200) {
                setHomepageSlider(data?.lstPost || []);
            }
        } catch (err) {
            console.error(err);
        }
    };
    const fetchAchievements = async () => {
        try {
            const { data } = await frontendApi().get("frontend_post_get", {
                params: {
                    companyId: cid,
                    maxItem: 3,
                    pageNo: 1,
                    urlSlug: slugs.Achievement,
                    eSortDirection: 2,
                    eSortBy: 1,
                },
            });
            if (data && data?.statusCode === 200) {
                setAchievements(data?.lstPost || []);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const fetchTestimonialDetails = async () => {
        try {
            const { data } = await frontendApi().get("frontend_post_get", {
                params: {
                    companyId: cid,
                    maxItem: 0,
                    pageNo: 1,
                    urlSlug: slugs.Testimonial,
                    eSortDirection: 1,
                    eSortBy: 1,
                },
            });
            if (data && data?.statusCode === 200) {
                setTestimonialDetails(data?.lstPost || []);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const fetchOdometer = async () => {
        try {
            const { data } = await frontendApi().get("frontend_post_get", {
                params: {
                    companyId: cid,
                    maxItem: 4,
                    pageNo: 1,
                    urlSlug: slugs.Odometer,
                    eSortDirection: 1,
                    eSortBy: 1,
                },
            });
            if (data && data?.statusCode === 200) {
                setOdometerDetails(data?.lstPost || []);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const fetchCenters = async () => {
        try {
            const { data } = await frontendApi().get("frontend_post_get", {
                params: {
                    companyId: cid,
                    maxItem: 0,
                    pageNo: 1,
                    urlSlug: "our-center",
                    eSortDirection: 1,
                    eSortBy: 1,
                },
            });
            if (data && data?.statusCode === 200) {
                setCenters(data?.lstPost || []);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const fetchFacilities = async () => {
        try {
            const { data } = await frontendApi().get("frontend_post_get", {
                params: {
                    companyId: cid,
                    maxItem: 0,
                    pageNo: 1,
                    urlSlug: slugs.Facilities,
                    eSortDirection: 1,
                    eSortBy: 1,
                },
            });
            if (data && data?.statusCode === 200) {
                setFacilities(data?.lstPost || []);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const fetchHomeAboutUs = async () => {
        setShowSkeleton(true);
        try {
            const { data } = await frontendApi().get("frontend_page_detail", {
                params: {
                    companyId: cid,
                    urlSlug: slugs.HomeAboutUs,
                },
            });
            if (data && data?.statusCode === 200) {
                setHomeAboutUs(data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setShowSkeleton(false);
        }
    };

    const fetchHomePagePopup = async () => {
        try {
            const { data } = await frontendApi().get("frontend_post_get", {
                params: {
                    companyId: cid,
                    maxItem: 0,
                    pageNo: 1,
                    urlSlug: slugs.HomePopup,
                    eSortDirection: 1,
                    eSortBy: 1,
                },
            });
            if (data && data?.statusCode === 200) {
                const finalHomePopup = data?.lstPost?.find((item: PostData) => getShowPopup(item) === "Yes");

                setHomePagePopup(finalHomePopup);
            }
        } catch (err) {
            console.error(err);
        }
    };


    const fetchAllThings = async () => {
        setShowSkeleton(true);
        try {
            await Promise.all([
                fetchHomepageSlider(),
                fetchOdometer(),
                fetchTestimonialDetails(),
                fetchFacilities(),
                fetchAchievements(),
                fetchHomeAboutUs(),
                // fetchDignitaries(),
                fetchHomePagePopup(),
                fetchCenters(),
            ]);
            window.scrollTo({
                top: 0,
                behavior: "instant",
            });
        } catch (err) {
            console.error(err);
        } finally {
            setShowSkeleton(false);
        }
    };

    useEffect(() => {
        if (cid) fetchAllThings();
    }, [cid]);

    const style = {
        // fontFamily: "Montserrat",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        borderRadius: "10px",
        overflow: "hidden",
    };

    const closePopUp = () => {
        Cookies.set("seenPopUp", "true");
        setDisplayPopUp(false);
    };

    useEffect(() => {
        const returningUser = Cookies.get("seenPopUp") === "true";
        setDisplayPopUp(!returningUser);
    }, []);

    if (showSkeleton) {
        return <HomePageSkeleton />;
    }

    return (
        <>
            {/* <Header /> */}
            {homepageSlider?.length > 0 && (
                <>
                    <div className="">
                        <HomeMainSlider details={homepageSlider} />
                    </div>
                </>
            )}

            {homeAboutUs && homeAboutUs?.description && (
                <div className="container mx-auto py-[70px]">
                    <div className="flex gap-4 md:flex-nowrap flex-wrap px-3">
                        <div dangerouslySetInnerHTML={{ __html: homeAboutUs?.description || "" }} />
                        <div className="clear-both" />
                    </div>
                </div>
            )}

            {facilities && facilities?.length > 0 && (
                <div className="bg-section-bg-color">
                    <div className="container mx-auto py-[70px]">
                        <div className="flex flex-col gap-7 px-3">
                            <ThemeHeading text="We Provide Services" className="pr-[80px]" />
                            <div className="w-full">
                                <FacilitySlider details={facilities} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {achievements && achievements?.length > 0 && (
                <div className="">
                    <div className="container mx-auto py-[70px]">
                        <div className="flex flex-col gap-7 px-3">
                            <ThemeHeading text="Our Achievements" className="w-full items-center" />
                            <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 justify-center gap-2">
                                {achievements?.map((item, index) => {
                                    return <AchievementsCard key={"home_achievements" + index} details={item} />;
                                })}
                            </div>
                            <div>
                                <ThemeButton text="View All" link={`/post-category/${slugs.Achievement}`} className="mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mx-auto py-[70px]">
                <div className="flex flex-col gap-7 px-3">
                    <div className="flex flex-col gap-7 items-center">
                        <ThemeHeading text="Gallery" className="w-full items-center" />
                        {/* <p className="text-paragraph-text-color text-sm leading-6 text-center w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum enim veniam itaque eveniet error
              provident sequi sed officiis. Error ipsum dolorem libero. Eum, ab quidem. Eveniet delectus labore est?
            </p> */}
                    </div>
                    <HomeGalleryProvider>
                        <GallerySectionTabs />
                    </HomeGalleryProvider>
                </div>
            </div>
            <div className="gallery-sec-back relative">
                <div className="container mx-auto py-[70px]">
                    <div className="flex flex-col gap-7 px-3">
                        <div className="flex gap-7 sm:flex-nowrap flex-wrap">
                            <div className="flex flex-col gap-7">
                                <ThemeHeading text="Download Phoenix Mobile App" />
                                <p className="text-paragraph-text-color text-sm leading-6">
                                    The application from the house of PHOENIX GROUP, has been tailored to meet the needs of not just
                                    Engineering and Medical aspirants, but also students aiming to ace various examinations like NTSE ,
                                    IMO , OLYMPIADS , ISO etc.
                                </p>
                            </div>
                            <div className="flex justify-center gap-[1px]">
                                {
                                    contactDetails?.androidApp &&
                                    <Link
                                        href={contactDetails?.androidApp || ''}
                                        target="_blank"
                                        className="h-[50px] aspect-square flex justify-center items-center bg-button-bg-color text-white hover:bg-theme-color transition-all duration-300">
                                        <BsAndroid2 size={22} />
                                    </Link>
                                }
                                {
                                    contactDetails?.iosApp &&
                                    <Link
                                        href={contactDetails?.iosApp || ''}
                                        target="_blank"
                                        className="h-[50px] aspect-square flex justify-center items-center bg-button-bg-color text-white hover:bg-theme-color transition-all duration-300">
                                        <FaApple size={25} />
                                    </Link>
                                }
                            </div>
                        </div>
                        <ApplicationDetailContainer />
                    </div>
                </div>
            </div>

            {testimonialDetails && testimonialDetails?.length > 0 && (
                <div className="bg-testimonial-sec-bg-color">
                    <div className="container mx-auto py-[70px]">
                        <div className="flex flex-col gap-7 px-3">
                            <div className="flex flex-col gap-7 px-3 items-center">
                                <ThemeHeading text="Our Stars Said" className="w-full items-center" />
                                {/* <p className="text-paragraph-text-color text-sm leading-6 w-full md:w-2/3 lg:w-1/2 text-center">
                It is always said that, &quot; Never judge book by its cover but our system still works on results and
                mark sheets, it&apos;s important to what our student and their parents said about phoenix Institute.
              </p> */}
                            </div>
                            <div className="flex justify-center">
                                <div className="bg-white px-5 py-6 rounded-lg w-full md:w-2/3 lg:w-1/2">
                                    <TestimonialSlider details={testimonialDetails} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {odometerDetails && odometerDetails?.length > 0 && (
                <div className="flex gap-7 odometer-sec-back bg-fixed bg-right">
                    <div className="container mx-auto py-[70px]">
                        <div className="flex flex-col gap-7 px-3">
                            {/* <div className="flex flex-col gap-7 px-3 items-center">
                <ThemeHeading text="Achievements In Previous 11 Years" className="w-full items-center" />
                <p className="text-paragraph-text-color text-sm leading-6 w-full md:w-2/3 lg:w-1/2 text-center">
                Phoenix Institute is setting up the highest standard & redefining the set up for IIT JEE | NEET |
                FOUNDATION Coaching having the best selection ratio last 9 years.
              </p>
              </div> */}
                            {/* <div className='gap-3 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1'> */}
                            <OdometerCard details={odometerDetails} />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            )}

            {centers && centers?.length > 0 && (
                <div className="container mx-auto py-[70px]">
                    <div className="flex flex-col gap-7 px-3">
                        <div className="flex flex-col gap-7 px-3 items-center">
                            <ThemeHeading text="Our Centers" className="w-full items-center" />
                            {/* <p className="text-paragraph-text-color text-sm leading-6 w-full md:w-2/3 lg:w-1/2 text-center">
              We believe , Educational and intellectual level is high and the nation get better educational facilities,
              thats why Phoenix Institute Learn in multiple location, lets check our own centers as below.
            </p> */}
                        </div>
                        <OurCenterSlider details={centers} />
                    </div>
                </div>
            )}
            {/* <Footer /> */}

            {/* {true && Boolean(homePagePopup) && ( */}
            {displayPopUp && homePagePopup && getShowPopup(homePagePopup) && (
                <Modal
                    className="!z-[99999]"
                    open={true}
                    onClose={closePopUp}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="py-3 px-4 flex w-full bg-theme-color justify-end">
                            <button onClick={closePopUp}>
                                <IoCloseSharp className="text-white text-lg" />
                            </button>
                        </div>
                        <div
                            className="p-2.5"
                            onClick={() => {
                                closePopUp();
                            }}
                        >
                            {/* <img src="/assets/school-1.jpg" alt="" /> */}
                            <Link href={getRedirectUrl(homePagePopup) || "#"} target="_blank">
                                <div dangerouslySetInnerHTML={{ __html: getDescription(homePagePopup) || "" }} />
                            </Link>
                        </div>
                    </Box>
                </Modal>
            )}
        </>
    );
}
