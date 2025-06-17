import React, { useState } from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import img from "../assets/whatsapp.jpeg";
import db from "../firebase"

const TweetBox = () => {
  const [tweetMessage,setTweetMessage]=useState('');
  const [tweetImage,setTweetImage]=useState('');

  const sendTweet=e=>{
    e.preventDefault();

    db.collection('posts').add({
      displayName:'Sam A',
      username:'sam7718',
      verified:true,
      text:tweetMessage,
      image:tweetImage,
      avatar:'https://pbs.twimg.com/profile_images/1795159885220343810/oTg4a9Wu_400x400.jpg'
    })
    setTweetMessage("");
    setTweetImage("");
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src={img} />
          <input onChange={(e)=>setTweetMessage(e.target.value)} value={tweetMessage} placeholder="whats happening?" type="text" />
        </div>
        <input
        value={tweetImage}
        onChange={(e)=>setTweetImage(e.target.value)}
          className="tweetBox_imageInput"
          placeholder="Enter Image Url"
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
