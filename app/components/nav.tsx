"use client";
import { ASSETS } from "@/public/path";
import Link from "next/link";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
export const Nav = () => {
  const { user } = useUser(); // Get user info from Clerk
  return (
    <div className="w-full flex items-center justify-center h-[10vh] bg-black bg-opacity-80 text-white">
      <div className="flex items-center justify-between w-full max-w-[1200px] px-10">
        <Link href={"/"}>
          <div className="flex items-center justify-center space-x-2">
            <img
              src={ASSETS.HERO}
              className="h-8 w-8 rounded-full"
              alt="logo"
            />
            <div>QRate</div>
          </div>
        </Link>

        <ul className="hidden sm:flex items-center justify-between space-x-4 text-sm">
          <li>
            <Link href="/write-a-review">Write a review</Link>
          </li>
          <li>
            <Link href="/write-a-review">Reviews</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
          <li>
            <Link href="/categories">About us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <div className="hidden md:flex space-x-4">
            {!user && <Link href={user ? "/" : "/auth/sign-in"}>Log in</Link>}
            {user && <UserButton />}
          </div>
          {!user && (
            <li>
              <button className="bg-white text-black px-4 py-2 rounded">
                For Businesses
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
