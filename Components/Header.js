"use client"
import React from "react";
import Link from "next/link";

const page = () => {
    return (
        <>
            <div className="nav">
                <h1>Nav</h1>
                <div>
                    <Link href="/Contact">Contact</Link>
                    <Link href="/About">About</Link>
                </div>
            </div>
        </>
    )
}

export default page