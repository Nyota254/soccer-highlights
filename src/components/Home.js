import React, { useState, useEffect } from "react";
import axios from "axios";
import Highlight from "./Highlight";
import Leaguesnav from "./Leaguesnav";
import { extractUrl } from "../components/Utils";
import Spinner from "../components/Spinner";
import "../App.css";

//Api https://www.scorebat.com/video-api/v3/

const url = "https://www.scorebat.com/video-api/v3/";

function Home() {
  const [loading, setLoading] = useState(true);
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setHighlights(response.data.response);
      setLoading(false);
    });
  }, []);

  return (
    <main className="container-fluid">
      <div className="spinner">
        <Spinner loading={loading} />
      </div>
      <Leaguesnav highlights={highlights} />
      <div className="text-center">
        <h1>All Matches</h1>
      </div>
      <div className="row">
        {highlights.map((highlight) => {
          return (
            <Highlight
              key={highlight.title}
              highlight={highlight}
              extractUrl={extractUrl}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Home;
