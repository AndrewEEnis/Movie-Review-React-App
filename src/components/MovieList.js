import React, { Component } from "react";
import Movie from "./Movie.js";

export default class MovieList extends Component {
  render() {
    let movies = [
      {
        id: 0,
        Title: "Casino Royale",
        Date: "11/17/2006",
        Rating: "PG-13",
        Length: "144 Minutes",
        Synopsis:
          "After receiving a license to kill, British Secret Service agent James Bond (Daniel Craig) heads to Madagascar, where he uncovers a link to Le Chiffre (Mads Mikkelsen), a man who finances terrorist organizations. Learning that Le Chiffre plans to raise money in a high-stakes poker game, MI6 sends Bond to play against him, gambling that their newest 00 operative will topple the man's organization.",
        Poster: "https://www.filmposters.com/images/posters/11118.jpg",
      },
      {
        id: 1,
        Title: "Quantum of Solace",
        Date: "10/31/2008",
        Rating: "PG-13",
        Length: "106 Minutes",
        Synopsis:
          "Following the death of Vesper Lynd, James Bond (Daniel Craig) makes his next mission personal. The hunt for those who blackmailed his lover leads him to ruthless businessman Dominic Greene (Mathieu Amalric), a key player in the organization which coerced Vesper. Bond learns that Greene is plotting to gain total control of a vital natural resource, and he must navigate a minefield of danger and treachery to foil the plan.",
        Poster: "https://www.filmposters.com/images/posters/12508.jpg",
      },
      {
        id: 2,
        Title: "Skyfall",
        Date: "11/9/2012",
        Rating: "PG-13",
        Length: "143 Minutes",
        Synopsis:
          "When James Bond's (Daniel Craig) latest assignment goes terribly wrong, it leads to a calamitous turn of events: Undercover agents around the world are exposed, and MI6 is attacked, forcing M (Judi Dench) to relocate the agency. With MI6 now compromised inside and out, M turns to the one man she can trust: Bond. Aided only by a field agent (Naomie Harris), Bond takes to the shadows and follows a trail to Silva (Javier Bardem), a man from M's past who wants to settle an old score.",
        Poster: "https://www.filmposters.com/images/posters/17222.jpg",
      },
      {
        id: 3,
        Title: "Spectre",
        Date: "11/6/2015",
        Rating: "PG-13",
        Length: "148 Minutes",
        Synopsis:
          "A cryptic message from the past leads James Bond (Daniel Craig) to Mexico City and Rome, where he meets the beautiful widow (Monica Bellucci) of an infamous criminal. After infiltrating a secret meeting, 007 uncovers the existence of the sinister organization SPECTRE. Needing the help of the daughter of an old nemesis, he embarks on a mission to find her. As Bond ventures toward the heart of SPECTRE, he discovers a chilling connection between himself and the enemy (Christoph Waltz) he seeks.",
        Poster: "https://www.filmposters.com/images/posters/19490.jpg",
      },
      {
        id: 4,
        Title: "No Time to Die",
        Date: "10/8/2021",
        Rating: "PG-13",
        Length: "163 Minutes",
        Synopsis:
          "James Bond is enjoying a tranquil life in Jamaica after leaving active service. However, his peace is short-lived as his old CIA friend, Felix Leiter, shows up and asks for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond on the trail of a mysterious villain who's armed with a dangerous new technology.",
        Poster: "https://www.filmposters.com/images/posters/22371.jpg",
      },
    ];
    return (
      <div>
        {movies.map((movie, index) => (
          <Movie
            key={index}
            title={movie.Title}
            date={movie.Date}
            rating={movie.Rating}
            length={movie.Length}
            synopsis={movie.Synopsis}
            image={movie.Poster}
          />
        ))}
      </div>
    );
  }
}
