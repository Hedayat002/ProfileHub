import clientPromise from "@/lib/mongodb"



export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("profilehub")
    const collection = db.collection("links")
   
    //if the handle is alredy claimed you cannot create the ProfileHub
    const doc = await collection.findOne({ handle: body.handle })
    if(doc){
        return Response.json({ success: false, error: true, message: 'Handle already claimed!', result: null })
    }
    const result = await collection.insertOne(body)
    return Response.json({ success: true, error: false, message: 'Added your ProfileHub Enjoy!', result: result, })
  }