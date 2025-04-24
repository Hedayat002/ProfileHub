
import React from 'react'
import Link from 'next/link'
import clientPromise from '@/lib/mongodb'
import { notFound } from 'next/navigation'


export default async function Page({ params }) {
    const handle  = (await params).handle
    const client = await clientPromise;
    const db = client.db("profilehub")
    const collection = db.collection("links")
   
     //if the handle is alredy claimed you cannot create the ProfileHub
     const item = await collection.findOne({ handle:handle})
    
if(!item){
  return notFound()
}

    const item2 ={
      "_id": {
        "$oid": "67ff9b9c39133e47221c4ae0"
      },
      "links": [
        {
          "link": "https://www.facebook.com/",
          "linktext": "facebook"
        },
        {
          "link": "https://www.instagram.com/",
          "linktext": "insta"
        }
      ],
      "handle": "hadimalik04",
      "pic": "https://avatars.githubusercontent.com/u/132713488?v=4&size=64"
    }
    return <div className="flex min-h-screen bg-[#e9c0e9] justify-center items-start py-10">
      {item && <div className="flex flex-col items-center gap-4">
      <img className="bg-[#e9c0e9] rounded-full w-24 h-24 object-cover border-4 border-purple-400" src={item.pic} alt="" />
      <span className="font-bold text-center mt-2">@{item.handle}</span>
      <span className="desc w-8- text-center">{item.desc}</span>
      <div className="links">
        {item.links.map((item,index)=>{
        return<Link key={index} href={item.link} > <div className=" flex justify-center py-4 px-2 min-w-96 shadow-lg bg-purple-100 rounded-md my-3" >
          {item.linktext}
          
          
        </div></Link>
        })}
      </div>
      </div>}
    </div>
  }