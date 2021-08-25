import React from "react";
import { Link } from "react-router-dom";

function Highlight({ highlight }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            src={highlight.thumbnail}
            className="img-fluid"
            alt={highlight.title}
          />
          <a href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">Match:{highlight.title}</h5>
          <p className="card-text">Competition: {highlight.competition}</p>
          <a href={highlight.matchviewUrl} className="btn btn-primary">
            View Highlights
          </a>
          <Link
            to={`/singlematch/${highlight.title}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
