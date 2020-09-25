import React from "react";
import axios from "axios";
import "./post.styles.css";

import ErrorBox from "../../components/error-box/error-box.component";

const characters = [
  "AJ Soprano",
  "Adriana La Cerva",
  "Bobby Baccalieri",
  "Carmela Soprano",
  "Christopher Moltisanti",
  "Dr. Jennifer Melfi",
  "Furio Giunta",
  "Jackie Aprile Jr.",
  "Janice Soprano",
  "John Sacramoni",
  "Junior Soprano",
  "Meadow Soprano",
  "Paulie 'Walnuts' Gualtieri",
  "Ralph Cifaretto",
  "Richie Aprile",
  "Salvatore Bonpensiero",
  "Silvio Dante",
  "Tony Soprano",
  "Vito Spatafore",
];

const episodes = [
  {
    season: 1,
    seriesEpisode: 1,
    seasonEpisode: 1,
    episodeTitle: "The Sopranos",
  },
  {
    season: 1,
    seriesEpisode: 2,
    seasonEpisode: 2,
    episodeTitle: "46 Long",
  },
  {
    season: 1,
    seriesEpisode: 3,
    seasonEpisode: 3,
    episodeTitle: "Denial, Anger, Acceptance",
  },
  {
    season: 1,
    seriesEpisode: 4,
    seasonEpisode: 4,
    episodeTitle: "Meadowlands",
  },
  { season: 1, seriesEpisode: 5, seasonEpisode: 5, episodeTitle: "College" },
  {
    season: 1,
    seriesEpisode: 6,
    seasonEpisode: 6,
    episodeTitle: "Pax Soprana",
  },
  { season: 1, seriesEpisode: 7, seasonEpisode: 7, episodeTitle: "Down Neck" },
  {
    season: 1,
    seriesEpisode: 8,
    seasonEpisode: 8,
    episodeTitle: "The Legend of Tennessee Moltisanti",
  },
  { season: 1, seriesEpisode: 9, seasonEpisode: 9, episodeTitle: "Boca" },
  {
    season: 1,
    seriesEpisode: 10,
    seasonEpisode: 10,
    episodeTitle: "A Hit Is a Hit",
  },
  {
    season: 1,
    seriesEpisode: 11,
    seasonEpisode: 11,
    episodeTitle: "Nobody Knows Anything",
  },
  { season: 1, seriesEpisode: 12, seasonEpisode: 12, episodeTitle: "Isabella" },
  {
    season: 1,
    seriesEpisode: 13,
    seasonEpisode: 13,
    episodeTitle: "I Dream of Jeannie Cusamano",
  },
  {
    season: 2,
    seriesEpisode: 14,
    seasonEpisode: 1,
    episodeTitle: "Guy Walks into a Psychiatrist's Office...",
  },
  {
    season: 2,
    seriesEpisode: 15,
    seasonEpisode: 2,
    episodeTitle: "Do Not Resuscitate",
  },
  {
    season: 2,
    seriesEpisode: 16,
    seasonEpisode: 3,
    episodeTitle: "Toodle-Fucking-Oo",
  },
  {
    season: 2,
    seriesEpisode: 17,
    seasonEpisode: 4,
    episodeTitle: "Commendatori",
  },
  {
    season: 2,
    seriesEpisode: 18,
    seasonEpisode: 5,
    episodeTitle: "Big Girls Don't Cry",
  },
  {
    season: 2,
    seriesEpisode: 19,
    seasonEpisode: 6,
    episodeTitle: "The Happy Wanderer",
  },
  { season: 2, seriesEpisode: 20, seasonEpisode: 7, episodeTitle: "D-Girl" },
  {
    season: 2,
    seriesEpisode: 21,
    seasonEpisode: 8,
    episodeTitle: "Full Leather Jacket",
  },
  {
    season: 2,
    seriesEpisode: 22,
    seasonEpisode: 9,
    episodeTitle: "From Where to Eternity",
  },
  { season: 2, seriesEpisode: 23, seasonEpisode: 10, episodeTitle: "Bust Out" },
  {
    season: 2,
    seriesEpisode: 24,
    seasonEpisode: 11,
    episodeTitle: "House Arrest",
  },
  {
    season: 2,
    seriesEpisode: 25,
    seasonEpisode: 12,
    episodeTitle: "The Knight in White Satin Armor",
  },
  { season: 2, seriesEpisode: 26, seasonEpisode: 13, episodeTitle: "Funhouse" },
  {
    season: 3,
    seriesEpisode: 27,
    seasonEpisode: 1,
    episodeTitle: "Mr. Ruggerio's Neighborhood",
  },
  {
    season: 3,
    seriesEpisode: 28,
    seasonEpisode: 2,
    episodeTitle: "Proshai, Livushka",
  },
  {
    season: 3,
    seriesEpisode: 29,
    seasonEpisode: 3,
    episodeTitle: "Fortunate Son",
  },
  {
    season: 3,
    seriesEpisode: 30,
    seasonEpisode: 4,
    episodeTitle: "Employee of the Month",
  },
  {
    season: 3,
    seriesEpisode: 31,
    seasonEpisode: 5,
    episodeTitle: "Another Toothpick",
  },
  {
    season: 3,
    seriesEpisode: 32,
    seasonEpisode: 6,
    episodeTitle: "University",
  },
  {
    season: 3,
    seriesEpisode: 33,
    seasonEpisode: 7,
    episodeTitle: "Second Opinion",
  },
  {
    season: 3,
    seriesEpisode: 34,
    seasonEpisode: 8,
    episodeTitle: "He Is Risen",
  },
  {
    season: 3,
    seriesEpisode: 35,
    seasonEpisode: 9,
    episodeTitle: "The Telltale Moozadell",
  },
  {
    season: 3,
    seriesEpisode: 36,
    seasonEpisode: 10,
    episodeTitle: "...To Save Us All from Satan's Power",
  },
  {
    season: 3,
    seriesEpisode: 37,
    seasonEpisode: 11,
    episodeTitle: "Pine Barrens",
  },
  {
    season: 3,
    seriesEpisode: 38,
    seasonEpisode: 12,
    episodeTitle: "Amour Fou",
  },
  {
    season: 3,
    seriesEpisode: 39,
    seasonEpisode: 13,
    episodeTitle: "Army of One",
  },
  {
    season: 4,
    seriesEpisode: 40,
    seasonEpisode: 1,
    episodeTitle: "For All Debts Public and Private",
  },
  { season: 4, seriesEpisode: 41, seasonEpisode: 2, episodeTitle: "No Show" },
  {
    season: 4,
    seriesEpisode: 42,
    seasonEpisode: 3,
    episodeTitle: "Christopher",
  },
  {
    season: 4,
    seriesEpisode: 43,
    seasonEpisode: 4,
    episodeTitle: "The Weight",
  },
  { season: 4, seriesEpisode: 44, seasonEpisode: 5, episodeTitle: "Pie-O-My" },
  {
    season: 4,
    seriesEpisode: 45,
    seasonEpisode: 6,
    episodeTitle: "Everybody Hurts",
  },
  {
    season: 4,
    seriesEpisode: 46,
    seasonEpisode: 7,
    episodeTitle: "Watching Too Much Television",
  },
  {
    season: 4,
    seriesEpisode: 47,
    seasonEpisode: 8,
    episodeTitle: "Mergers and Acquisitions",
  },
  {
    season: 4,
    seriesEpisode: 48,
    seasonEpisode: 9,
    episodeTitle: "Whoever Did This",
  },
  {
    season: 4,
    seriesEpisode: 49,
    seasonEpisode: 10,
    episodeTitle: "The Strong, Silent Type",
  },
  {
    season: 4,
    seriesEpisode: 50,
    seasonEpisode: 11,
    episodeTitle: "Calling All Cars",
  },
  {
    season: 4,
    seriesEpisode: 51,
    seasonEpisode: 12,
    episodeTitle: "Eloise",
  },
  {
    season: 4,
    seriesEpisode: 52,
    seasonEpisode: 13,
    episodeTitle: "Whitecaps",
  },
  {
    season: 5,
    seriesEpisode: 53,
    seasonEpisode: 1,
    episodeTitle: "Two Tonys",
  },
  {
    season: 5,
    seriesEpisode: 54,
    seasonEpisode: 2,
    episodeTitle: "Rat Pack",
  },
  {
    season: 5,
    seriesEpisode: 55,
    seasonEpisode: 3,
    episodeTitle: "Where's Johnny?",
  },
  {
    season: 5,
    seriesEpisode: 56,
    seasonEpisode: 4,
    episodeTitle: "All Happy Families...",
  },
  {
    season: 5,
    seriesEpisode: 57,
    seasonEpisode: 5,
    episodeTitle: "Irregular Around the Margins",
  },
  {
    season: 5,
    seriesEpisode: 58,
    seasonEpisode: 6,
    episodeTitle: "Sentimental Education",
  },
  {
    season: 5,
    seriesEpisode: 59,
    seasonEpisode: 7,
    episodeTitle: "In Camelot",
  },
  {
    season: 5,
    seriesEpisode: 60,
    seasonEpisode: 8,
    episodeTitle: "Marco Polo",
  },
  {
    season: 5,
    seriesEpisode: 61,
    seasonEpisode: 9,
    episodeTitle: "Unidentified Black Males",
  },
  {
    season: 5,
    seriesEpisode: 62,
    seasonEpisode: 10,
    episodeTitle: "Cold Cuts",
  },
  {
    season: 5,
    seriesEpisode: 63,
    seasonEpisode: 11,
    episodeTitle: "The Test Dream",
  },
  {
    season: 5,
    seriesEpisode: 64,
    seasonEpisode: 12,
    episodeTitle: "Long Term Parking",
  },
  {
    season: 5,
    seriesEpisode: 65,
    seasonEpisode: 13,
    episodeTitle: "All Due Respect",
  },
  {
    season: 6,
    seriesEpisode: 66,
    seasonEpisode: 1,
    episodeTitle: "Members Only",
  },
  {
    season: 6,
    seriesEpisode: 67,
    seasonEpisode: 2,
    episodeTitle: "Join the Club",
  },
  {
    season: 6,
    seriesEpisode: 68,
    seasonEpisode: 3,
    episodeTitle: "Mayham",
  },
  {
    season: 6,
    seriesEpisode: 69,
    seasonEpisode: 4,
    episodeTitle: "The Fleshy Part of the Thigh",
  },
  {
    season: 6,
    seriesEpisode: 70,
    seasonEpisode: 5,
    episodeTitle: "Mr. & Mrs. John Sacrimoni Request...",
  },
  {
    season: 6,
    seriesEpisode: 71,
    seasonEpisode: 6,
    episodeTitle: "Live Free or Die",
  },
  {
    season: 6,
    seriesEpisode: 72,
    seasonEpisode: 7,
    episodeTitle: "Luxury Lounge",
  },
  {
    season: 6,
    seriesEpisode: 73,
    seasonEpisode: 8,
    episodeTitle: "Johnny Cakes",
  },
  {
    season: 6,
    seriesEpisode: 74,
    seasonEpisode: 9,
    episodeTitle: "The Ride",
  },
  {
    season: 6,
    seriesEpisode: 75,
    seasonEpisode: 10,
    episodeTitle: "Moe n' Joe",
  },
  {
    season: 6,
    seriesEpisode: 76,
    seasonEpisode: 11,
    episodeTitle: "Cold Stones",
  },
  {
    season: 6,
    seriesEpisode: 77,
    seasonEpisode: 12,
    episodeTitle: "Kaisha",
  },
  {
    season: 6,
    seriesEpisode: 79,
    seasonEpisode: 14,
    episodeTitle: "Stage 5",
  },
  {
    season: 6,
    seriesEpisode: 80,
    seasonEpisode: 15,
    episodeTitle: "Remember When",
  },
  {
    season: 6,
    seriesEpisode: 81,
    seasonEpisode: 16,
    episodeTitle: "Chasing It",
  },
  {
    season: 6,
    seriesEpisode: 82,
    seasonEpisode: 17,
    episodeTitle: "Walk Like a Man",
  },
  {
    season: 6,
    seriesEpisode: 83,
    seasonEpisode: 18,
    episodeTitle: "Kennedy and Heidi",
  },
  {
    season: 6,
    seriesEpisode: 84,
    seasonEpisode: 19,
    episodeTitle: "The Second Coming",
  },
  {
    season: 6,
    seriesEpisode: 85,
    seasonEpisode: 20,
    episodeTitle: "The Blue Comet",
  },
  {
    season: 6,
    seriesEpisode: 86,
    seasonEpisode: 21,
    episodeTitle: "Made in America",
  },
];

class PostPage extends React.Component {
  state = {
    character: "",
    quote: "",
    season: "",
    seriesEpisode: "",
    seasonEpisode: "",
    episodeTitle: "",
    errors: [],
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: [],
    });
  };

  onCharacterSelect = (e) => {
    this.setState({
      character: e.target.value,
    });
  };

  onEpisodeSelect = (e) => {
    const selectedEpisode = episodes.filter(
      (episode) => episode.seriesEpisode === parseInt(e.target.value)
    );

    this.setState({
      season: selectedEpisode[0].season,
      seriesEpisode: selectedEpisode[0].seriesEpisode,
      seasonEpisode: selectedEpisode[0].seasonEpisode,
      episodeTitle: selectedEpisode[0].episodeTitle,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const post = {
      character: this.state.character,
      quote: this.state.quote,
      season: this.state.season,
      seriesEpisode: this.state.seriesEpisode,
      seasonEpisode: this.state.seasonEpisode,
      episodeTitle: this.state.episodeTitle,
    };

    axios.post("/postQuote", post).then((res) => {
      const { errors } = res.data;
      if (errors) {
        this.setState({ errors: Object.values(errors) });
      } else {
        alert(`${res.data}`);
        this.setState({
          character: "",
          quote: "",
          season: "",
          seriesEpisode: "",
          seasonEpisode: "",
          episodeTitle: "",
          errors: [],
        });
      }
    });
  };

  render() {
    const errors = this.state.errors;
    return (
      <div className="post-page">
        <h1 className="page-title">Post a new quote</h1>
        <ErrorBox errors={errors} />
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onInputChange}
            className="form-input"
            type="text"
            name="quote"
            placeholder="Quote"
            value={this.state.quote}
          />

          <select
            onChange={this.onCharacterSelect}
            className="form-input"
            name="character"
            id="character-select"
            value={this.state.character}
          >
            <option default disabled value="">
              Select a character...
            </option>
            {characters.map((char) => (
              <option key={char} value={char}>
                {char}
              </option>
            ))}
          </select>

          <select
            onChange={this.onEpisodeSelect}
            className="form-input"
            name="episode-select"
            id="episode-select"
            value={this.state.seriesEpisode}
          >
            <option default disabled value="">
              Select an episode...
            </option>
            {episodes.map((episode) => (
              <option key={episode.seriesEpisode} value={episode.seriesEpisode}>
                {`S${episode.season}E${episode.seasonEpisode} ${episode.episodeTitle}`}
              </option>
            ))}
          </select>
          <button className="form-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostPage;
