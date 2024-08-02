"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { LiaMapMarkedSolid } from "react-icons/lia";
import { MdOutlineHelpOutline } from "react-icons/md";

export function FloatingNavDemo() {
    const navItems = [
        {
            name: "Digipin Map",
            link: "/",
            icon: <LiaMapMarkedSolid size={30} />,
        },
        {
            name: "What is Digipin?",
            link: "/about",
            icon: <MdOutlineHelpOutline size={30} />,
        },
    ];
    return (
        <div className="relative w-full">
            <FloatingNav navItems={navItems} className="fixed mt-2 left-0 w-full z-50" />
        </div>
    );
}

const DummyContent = () => {
    return (
        <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md mt-16">
            <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
                Scroll back up to reveal Navbar
            </p>
            <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
        </div>
    );
};