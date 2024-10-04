// src/app/components/NewHeader.tsx


import Link from "next/link";
import React from "react";
// import { MenuItem } from "@/constants/interfaces";
// import NewHeaderClient from "./Header"; // Import the client component
// import fetchMenus from "@/actions/fetchMenus";
import TopHeaderMovingText from "./TopHeaderMovingText";

const NewHeader = async () => {
    // Fetch menu data on the server side
    // const menu: MenuItem[] = await fetchMenus();

    return (
        <>

            <div className="container mx-auto">
                <TopHeaderMovingText />
            </div>
            <header className="bg-white z-[999] sticky top-0">
                <div className="container mx-auto py-2">
                    <div className="flex justify-between px-3">
                        <Link href="/">
                            <img
                                src={"https://images.pexels.com/photos/5634776/pexels-photo-5634776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                                alt="Logo"
                                className="h-16"
                            />
                        </Link>

                        {/* Pass the menu data to the client component */}
                        {/* <NewHeaderClient menu={menu} /> */}
                    </div>
                </div>
            </header>
        </>
    );
};

export default NewHeader;
