import React, { Component } from "react";
import ProfileCard from "./ProfileCard";

class Profiles extends Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
  }

  render() {
    return (
      <div>
        {this.state.profiles.map((person, index) => {
          return <ProfileCard key={index} person={person} />;
        })}
      </div>
    );
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=100")
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({ profiles: data.results });
      });
  }
}

export default Profiles;
