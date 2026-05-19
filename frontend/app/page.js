"use client";

import { useEffect, useState } from "react";

import { api } from "./services/api";

import { socket } from "./lib/socket";

export default function Home() {
 const [feeds, setFeeds] = useState([]);
 
 
   const getFeeds = async () => {
 
     const res = await api.get("/feed");
 
     setFeeds(res.data.data);
   };
 
 
   useEffect(() => {
 
     getFeeds();
 
 
     socket.on("new-feed", (newFeed) => {
 
       setFeeds((prev) => [newFeed, ...prev]);
 
     });
 
 
     return () => {
       socket.off("new-feed");
     };
 
   }, []);
 
 
   return (
     <>
     <div style={{ padding: 20 }}>
 
       <h1>Realtime Coaching Feed</h1>
 
       {
         feeds.map((feed) => (
           <div
             key={feed._id}
             style={{
               border: "1px solid #ccc",
               padding: 10,
               marginBottom: 10,
             }}
           >
             <h3>{feed.title}</h3>
 
             <p>{feed.description}</p>
           </div>
         ))
       }
 
     </div>
     </>
   );
}
