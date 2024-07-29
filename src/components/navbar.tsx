
import React from "react";
import Link from "next/link";
import { ToggleMode } from "@/components/ToggleMode";

export const Navbar = () => {
    return (
        <nav className='flex flex-col items-center border-b mb-5 py-5 bg-secondary'>
            <div className='flex justify-between max-w-6xl w-full'>
                <div className='flex items-center'>
                    <h1 className='text-2xl font-bold text-primary'>Logo</h1>
                </div>
                <div className='flex items-center'>
                    <a href='#' className='text-primary'>Home</a>
                    <a href='#' className='text-primary ml-5'>About</a>
                    <a href='#' className='text-primary ml-5'>Contact</a>
                    <ToggleMode />
                </div>

            </div>
        </nav>
    );
}