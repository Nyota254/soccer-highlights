import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";
import { extractUrl } from "../components/Utils";
import axios from "axios";

const url = "https://www.scorebat.com/video-api/v3/";

function Singlematch() {
  const [match, setMatch] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [title]);

  return (
    <>
      {match[0] ? (
        <div className="container">
          <h1>Match: {title}</h1>
          <h2>Competion: {match[0].competition}</h2>
          <h1>Highlights</h1>
          <div
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
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Spinner loading={loading} />
        </div>
      )}
    </>
  );
}

export default Singlematch;
