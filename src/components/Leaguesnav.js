import React, { useState, useEffect } from "react";

function Leaguesnav({ highlights }) {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    let leagueTypes = [];

    highlights.map((highlight) => {
      let competionType = highlight.competition;
      leagueTypes.push(competionType);
    });

    let uniqueLeagues = [...new Set(leagueTypes)];

    setLeagues(uniqueLeagues);
  }, [highlights]);

  return (
    <>
      <div className="text-center">
        <h1>Latest Competitions</h1>
      </div>
      <div className="container">
        <div className="row">
          {leagues.map((league, index) => {
            return (
              <div className="col-md-4">
                <p key={index}>{league}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Leaguesnav;
