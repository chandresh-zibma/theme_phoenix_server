'use client'
import { useEffect } from "react";
import Cookies from "js-cookie";


function SetCidClientSide({ cid }: { cid: string }) {
    useEffect(() => {
        if (typeof window !== "undefined" && cid) {
            Cookies.set("cid", cid, {
                path: "/",
                expires: 7,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Lax",
            });
            console.log("CID stored in cookies:", cid);
        }
    }, [cid]);

    return null;
}


export default SetCidClientSide