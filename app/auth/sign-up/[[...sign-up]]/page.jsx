'use client'
import { SignUp } from "@clerk/nextjs";
import { ASSETS } from "@/public/path";

export default function Page() {

    return <div
        style={{
            backgroundImage: `url(${ASSETS.HERO})`
        }}
        className="flex items-center justify-center bg-cover max-h-screen min-h-screen bg-aqua">
        <SignUp 
        />
    </div>;
}