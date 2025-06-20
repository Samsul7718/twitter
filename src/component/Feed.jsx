import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
// import img from "../assets/whatsapp.jpeg";
// import { db } from "../firebase";
import db from "../firebase";
import FlipMove from "react-flip-move";


import { collection, onSnapshot } from "firebase/firestore"; 

const Feed = () => {
  const [posts, setPosts] = useState([]);

// useEffect(()=>{
//   db.collection("posts").onSnapshot(snapshot=>(
//     setPosts(snapshot.docs.map(doc=>doc.data()))
//   ))
// },[])
 useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) =>  ({id: doc.id,
          ...doc.data()})));
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // const [loading, setLoading] = useState(true);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <FlipMove>
         {posts.map(post=>(
        <Post key={post.id}
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
        />
      ))}
      </FlipMove>
     
      {/* <Post
        displayName="Samsul Alam"
        username="samsul19856235648"
        verified={true}
        text="This is a test"
        avatar={img}
        image={img}
      /> */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
};

export default Feed;
