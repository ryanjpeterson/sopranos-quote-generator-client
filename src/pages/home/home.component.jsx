import React from "react";
import axios from "axios";
import "./home.styles.css";

// Components
import Navbar from "../../components/navbar/navbar.component";
import QuoteContainer from "../../components/quote-container/quote-container.component";

class HomePage extends React.Component {
  state = {
    quotes: [],
    errors: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    if (!sessionStorage.getItem("quotes")) {
      axios
        .get("/getQuotes")
        .then((res) => {
          sessionStorage.setItem("quotes", JSON.stringify(res.data));
          this.setState({ quotes: res.data });
        })
        .catch((err) => {
          this.setState({ errors: err });
        });
    } else {
      const quotes = JSON.parse(sessionStorage.getItem("quotes"));
      this.setState({
        quotes: quotes,
      });
    }

    this.setState({ loading: false });
  }

  render() {
    const { quotes, loading } = this.state;

    const placeholder = <p>Loading...</p>;

    return (
      <div className="home-page">
        <Navbar />
        {loading ? placeholder : <QuoteContainer quotes={quotes} />}
      </div>
    );
  }
}

export default HomePage;
