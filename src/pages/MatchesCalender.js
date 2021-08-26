import React from "react";

function MatchesCalender() {
  return (
    <div className="container">
      <h1 className="text-center">Live Scores</h1>
      <iframe
        src="https://www.scorebat.com/embed/livescore/"
        frameBorder="0"
        width="600"
        height="760"
        allowFullScreen
        allow="autoplay; fullscreen"
        style={{
          width: "600px",
          height: "760px",
          overflow: "hidden",
          display: "block",
          color: "#edf0f1",
          backgroundColor: "#24252a",
        }}
        className="_scorebatEmbeddedPlayer_"
      ></iframe>
      {(function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://www.scorebat.com/embed/embed.js?v=arrv";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "scorebat-jssdk")}
    </div>
  );
}

export default MatchesCalender;
