import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VarifiedUserIcon from "@mui/icons-material/VerifiedUser";

import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
} from "@mui/icons-material";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              {displayName}
              <span className="post_headerSpecial">
                {verified && <VarifiedUserIcon className="post_badge" />}
                {username}
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="post" />
        <div className="post_footer">
          <ChatBubbleOutline fontSize="small" className="post_icon" />
          <Repeat fontSize="small" className="post_icon" />
          <FavoriteBorder fontSize="small" className="post_icon" />
          <Publish fontSize="small" className="post_icon" />
        </div>
      </div>
    </div>
  );
};

export default Post;
