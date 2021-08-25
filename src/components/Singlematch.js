import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useParams, Link } from "react-router-dom";
import { extractUrl } from "../components/Utils";
import axios from "axios";

const url = "https://www.scorebat.com/video-api/v3/";

function Singlematch() {
  const [match, setMatch] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        let matchArray = response.data.response;
        let matchData = matchArray.filter((item) => {
          return item.title === title;
        });
        setMatch(matchData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [title]);

  return (
    <div className="container">
      <h1>Match: {title}</h1>
      {/* <h2>Competion: {match[0].competition}</h2> */}
      {/* {match[0].videos[0].embed} */}
      <h1>Highlights</h1>
      {/* <div
        style={{
          width: "100%",
          height: "0px",
          position: "relative",
          paddingBottom: "56.250%",
        }}
      >
        <iframe
          src={extractUrl(match[0].videos[0].embed)}
          frameBorder="0"
          width="50%"
          height="50%"
          allowFullScreen
          allow="autoplay; fullscreen"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0px",
            top: "0px",
            overflow: "hidden",
          }}
        ></iframe>
      </div> */}
    </div>
  );
}

export default Singlematch;
