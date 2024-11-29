import { ASSETS } from "@/public/path";
import Link from "next/link";
import React from "react";

export const Nav = () => {
  return (
    <div className="w-full flex items-center justify-center h-[10vh] bg-black bg-opacity-80 text-white">
      <div className="flex items-center justify-between w-full max-w-[1200px] px-10">
        <div className="flex items-center justify-center space-x-2">
            <img src={ASSETS.HERO} className="h-10 w-10 rounded-full" alt="logo"/>
          <div>QRate</div>
        </div>

        <ul className="hidden sm:flex items-center justify-between space-x-4">
          <li>
            <Link href="/write-a-review">Write a review</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/login">Log in</Link>
          </li>
          <li>
            <button className="bg-white text-black px-4 py-2 rounded">For Businesses</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
