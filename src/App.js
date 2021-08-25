import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Highlight from "./components/Highlight";
import { extractUrl } from "./components/Utils";
import Spinner from "./components/Spinner";
import "./App.css";

//Api https://www.scorebat.com/video-api/v3/

const url = "https://www.scorebat.com/video-api/v3/";

function App() {
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
      <Navbar />
      <div className="spinner">
        <Spinner />
      </div>
      <div className="row">
        {highlights.map((highlight, index) => {
          return (
            <Highlight
              key={index}
              highlight={highlight}
              extractUrl={extractUrl}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
