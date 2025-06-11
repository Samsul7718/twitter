import React from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import img from "../assets/whatsapp.jpeg";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src={img} />
          <input placeholder="whats happening?" type="text" />
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="Enter Image Url"
          type="text"
        />
        <Button className="tweetBox_tweetButton">tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
