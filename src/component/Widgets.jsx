import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Widgets = () => {
  return (
    <>
      <div className="widgets">
        <div className="widgets_input">
          <SearchIcon className="widgets_searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>
        <div className="widgets_widgetContainer">
          <h2>What's Happening</h2>
          <TwitterTweetEmbed tweetId={"1904594367853322530"} />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="samsul"
            options={{ height: 400 }}
          />
          <TwitterShareButton
            url={"https://www.facebook.com/samsul.rahman.5203"}
            options={{ text: "#reactjs is awesome", via: "samsul" }}
          />
        </div>
      </div>
    </>
  );
};

export default Widgets;
