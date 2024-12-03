import { ASSETS } from "@/public/path";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return <div
        style={{
            backgroundImage: `url(${ASSETS.HERO})`
        }}
        className="flex items-center justify-center bg-cover max-h-screen min-h-screen bg-aqua">


        <SignIn />
    </div>;
}