"use client";
import Image from "next/image";
import { useState,useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  const [text, setText] = useState("")

  // const createHub = () => {
  //   // text is the handle redirect to /generate page
  //   // and pass the handle as query parameter
  //  router.push(`/generate?handle=${text}`)
  
  // }

  const createHub = () => {
    if (!text) {
      alert("Please enter a handle");
      return;
    }

    if (session) {
      // If user is logged in, redirect to generate page with handle
      router.push(`/generate?handle=${text}`);
    } else {
      // If user is not logged in, redirect to login page with handle as state
      
      router.push(`/login?redirect=/generate&handle=${text}`);
    }
  };

  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const { data: session, status } = useSession();
  // const [text, setText] = useState("");

  // // Check if user just logged in with a handle parameter
  // useEffect(() => {
  //   const handle = searchParams.get("handle");
  //   if (handle && session) {
  //     router.push(`/generate?handle=${handle}`);
  //   }
  // }, [session, searchParams]);

  // const createHub = async () => {
  //   if (!text) {
  //     alert("Please enter a handle");
  //     return;
  //   }

  //   if (session) {
  //     // If user is logged in, redirect to generate page with handle
  //     router.push(`/generate?handle=${text}`);
  //   } else {
  //     // If user is not logged in, use signIn with redirect
  //     await signIn("your-auth-provider", {
  //       callbackUrl: `/generate?handle=${text}`,
  //     });
  //   }
  // };
  
  
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[120vh] md:h-[500px] pb-16 md:pb-20 ">
        <div className="container mx-auto px-4 py-12 ">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className=" flex flex-col gap-4 md:gap-6 text-center lg:text-left md:mt-0 mt-[100px]">
              <h1 className="text-[#d2e823] font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Everything you are.<br />
                In one, simple link in bio.
              </h1>
              <p className="text-[#d2e823] text-base sm:text-lg lg:text-xl my-4">
                Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <input 
                  value={text} 
                  onChange={(e)=> setText(e.target.value)} 
                  className="bg-white px-4 py-3 rounded-md focus:outline-green-800 w-full sm:w-64"
                  type="text" 
                  placeholder="Enter Your Handle" 
                />
                <button 
                  onClick={createHub} 
                  className="bg-[#e9c0e9] rounded-full px-6 py-3 hover:bg-[#d9a6d9] transition-colors duration-300 whitespace-nowrap"
                >
                  Claim your ProfileHub
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex justify-center items-center">
              <img 
                src="/Home.png" 
                alt="homepage image"
                className="max-w-full "
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" min-h-screen">
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Analyze your audience and keep your followers engaged
        </h1>
        
        {/* Description Paragraph */}
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Track your engagement over time, monitor revenue and learn what's converting your audience. 
          Make informed updates on the fly to keep them coming back.
        </p>
        
        {/* CTA Button */}
        <Link href={"/login"}><button   className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          Get started for free
        </button></Link> 
        
        {/* Optional Stats or Features Grid - Add if needed */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example stat block - customize as needed */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">Engagement Tracking</h3>
            <p className="text-gray-600 mt-2">Monitor clicks and interactions in real-time</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">Revenue Insights</h3>
            <p className="text-gray-600 mt-2">Track conversions and earnings</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">Smart Updates</h3>
            <p className="text-gray-600 mt-2">Optimize content based on data</p>
          </div>
        </div>
      </div>
    </div>
  
      </section>
    </main>
  );


}
