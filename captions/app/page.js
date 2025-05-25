'use client';
import Image from "next/image";
import Link from 'next/link'
import { useSearchParams } from "next/navigation";
import { useState } from "react";




export default function Home() {
  
  const [file, setFile] = useState(null);
  const handlechange = (e) =>
  {
    setFile(e.target.file);
  }
  async function handlesumbit(e)
  {
    e.preventDefault()
    const audio = await fetch("/api/transcribe", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ audioUrl: file }),
});
    console.log("ndnsjdds")
    return <h1>hdhnshndhnadhndhsdahdna</h1>;
    
    
    
  }
  return (
    <>
    <startTranscriptionRequest> </startTranscriptionRequest>
      <h1 className="text-red-500">CaptionX</h1>
      <p>Let us generate captions for you instantly!</p>
      <form className="my-[4vh] mx-[4vw] bg-zinc-200 flex flex-col items-center" onSubmit={handlesumbit}>
        <h1>Upload File</h1>
        <div>
          <input onChange={handlechange} type="file" accept="video/mp4, video/webm, video/ogg" className="h-[60vh]"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
