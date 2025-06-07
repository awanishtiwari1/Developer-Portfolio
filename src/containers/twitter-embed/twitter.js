import React, {useContext} from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const cantDisplayError =
  "<div className='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

export default function Twitter() {
  if (!twitterDetails.display) {
    return null;
  }
  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
  }


   return null;
}
