'use client'
import { SignUp } from "@clerk/nextjs";
import { ASSETS } from "@/public/path";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
    const handleSignUp = async (data) => {
        // Extract relevant data from the Clerk SignUp data
        const { clerkUserId, email, firstName, lastName } = data;
        console.log('API IS CALLED')
        // Send the data to your API for MongoDB storage
        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    clerkUserId,
                    email,
                    firstName,
                    lastName,
                }),
            });

            const result = await response.json();
            if (response.ok) {
                // If saving is successful, redirect to another page (e.g., dashboard)
                router.push("/"); // Redirect to dashboard or home page
            } else {
                // Handle any errors that occur during saving
                console.error(result.message);
            }
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };


  
    return <div
        style={{
            backgroundImage: `url(${ASSETS.HERO})`
        }}
        className="flex items-center justify-center bg-cover max-h-screen min-h-screen bg-aqua">
        <SignUp 
            // unsafeMetadata={handleSignUp}
        />
    </div>;
}