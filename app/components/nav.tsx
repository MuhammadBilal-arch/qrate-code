"use client";
import { ASSETS } from "@/public/path";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
export const Nav = () => {
  const [drawerState, setDrawerState] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const { user } = useUser(); // Get user info from Clerk
  const onToggleDrawer = useCallback(() => {
    setDrawerState((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setDrawerState(false);
      }
    };
    if (drawerState) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerState]);

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
        <div className="md:hidden">
          <GiHamburgerMenu
            className="cursor-pointer text-sm"
            onClick={onToggleDrawer}
          />
        </div>
      </div>
      {drawerState && (
        <div
          ref={drawerRef}
          className="min-h-screen bg-white duration-300 fixed top-0 left-0 w-full z-[1000]  p-5 overflow-y-auto"
        >
          <div className="flex flex-col items-center h-full w-full min-h-screen text-black ">
            <div className="flex items-center justify-end w-full">
              <RiCloseFill
                onClick={onToggleDrawer}
                className="text-red-500 text-3xl cursor-pointer"
              />
            </div>
            <div className="space-y-4 text-black flex flex-col text-sm">
              <Link href="/write-a-review" >Write a review</Link>
              <Link href="/write-a-review">Reviews</Link>
              <Link href="/categories">Categories</Link>
              <Link href="/categories">About us</Link>
              <Link href="/blog">Blog</Link>
              {!user && <Link href={user ? "/" : "/auth/sign-in"}>Log in</Link>}
              {user && <UserButton />}
              {!user && (
              <Link href="/business">For Businesses</Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
