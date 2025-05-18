"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Generate = () => {
  const searchParams = useSearchParams();
  // const [link, setlink] = useState("");
  // const [linktext, setlinktext] = useState("");
  const [links, setLinks] = useState([{link:"", linktext: ""}])
  const [handle, sethandle] = useState(searchParams.get("handle"));
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")
  const { data: session, update } = useSession()
  const router = useRouter()

  useEffect(() => {
       

    if (!session) {
        router.push('/login')
        
    }
    // else {
    //   handlechange ()
    // }
}, [router, session])

  const handlechange = (index,link,linktext) => {
    setLinks(initialLinks => {
       return initialLinks.map((item, i) => {
        if (i === index) {
          return {link,linktext}
       }
       else{
        return item
       }
    })
  })
}

const addlink = ()=>{
  setLinks(links.concat({link:"", linktext: ""}))
}
  

  const submitlinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
      "handle": handle,
      "pic": pic,
      "desc": desc,
    });
console.log(raw)
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions);
    const result = await r.json();
    if (result.success) {
      toast.success(result.message);
      // Redirect to the user's profile page
      router.push(`/${handle}`);
      
      setLinks([{link:"", linktext: ""}]); // Reset to initial state
     setpic("")
     sethandle("")
     setdesc("")
    
    }
    else {
      toast.error(result.message);
    }
   
   
  };
  // const notify = () => toast('Wow so easy !');

  return (
    <div className="bg-[#d5a334] min-h-[120vh] grid grid-cols-1 md:grid-cols-2">
      <div className="col1 flex items-center justify-center flex-col p-4 md:ml-5">
      <div className="flex flex-col gap-3 w-full max-w-md md:mt-0 mt-[100px]">
        <h1 className="font-bold text-xl text-center md:text-left">Create your ProfileHub</h1>
        <div className="item">
        <h2 className="font-semibold text-md">Step 1: Claim your Handle</h2>
        <div className="mx-2 md:mx-4">
          <input
          onChange={e => {sethandle(e.target.value)}}
          value={handle || ""}
          className="w-full bg-white px-4 py-2 my-2 focus:outline-[#d5a334] rounded-full"
          type="text"
          placeholder="Choose a Handle"
          />
        </div>
        </div>
        <div className="item flex flex-col">
        <h2 className="font-semibold text-md">Step 2: Add Links</h2>
        {links && links.map((item, index)=>{
          return <div key={index} className="mx-2 md:mx-4 flex flex-col md:flex-row gap-2">
          <input
            onChange={e => {handlechange(index,item.link,e.target.value)}}
            value={item.linktext ||""}
            className="w-full bg-white px-4 py-2 my-1 focus:outline-[#d5a334] rounded-full"
            type="text"
            placeholder="Enter link text"
          />
          <input
            onChange={e => {handlechange(index,e.target.value,item.linktext)}}
            value={item.link ||""}
            className="w-full bg-white px-4 py-2 my-1 focus:outline-[#d5a334] rounded-full"
            type="text"
            placeholder="Enter link"
          />
          </div>
        })}
        <button onClick={()=> addlink()} className="p-4 py-2 mt-2 w-full md:w-[30%] mx-auto bg-[#502274] text-white rounded-full">
          +Add Link
        </button>
        </div>
        <div className="item">
        <h2 className="font-semibold text-md">Step 3: Add Picture and Finalize</h2>
        <div className="mx-2 md:mx-4 flex flex-col">
          <input
          onChange={e => {setpic(e.target.value)}}
          value={pic ||""}
          className="w-full bg-white px-4 py-2 my-2 focus:outline-[#d5a334] rounded-full"
          type="text"
          placeholder="Enter link to your pic"
          />
          <input
          onChange={e => {setdesc(e.target.value)}}
          value={desc ||""}
          className="w-full bg-white px-4 py-2 my-2 focus:outline-[#d5a334] rounded-full"
          type="text"
          placeholder="Enter Description"
          />
          <button 
          disabled={pic == "" || handle =="" || links[0].linktext == ""} 
          onClick={()=>{submitlinks()}} 
          className="disabled:bg-gray-500 p-4 py-2 mt-2 w-full md:w-[45%] mx-auto bg-[#502274] text-white rounded-full"
          >
          Create ProfileHub
          </button>
        </div>
        </div>
      </div>
      </div>
      <div className="col2 w-full h-screen bg-[#d5a334]    ">
      <img
        className="h-[80%] w-full object-contain px-4 mt-[100px] "
        src="/generate1.png"
        alt="Generate Your Links"
      />
      <ToastContainer />
      </div>
    </div>
  );
};

export default Generate;
