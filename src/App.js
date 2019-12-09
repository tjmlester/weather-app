import React, { Component } from "react";

import Title from "./components/Title";
import MainForm from "./components/MainForm";

import "typeface-roboto";
import Container from "@material-ui/core/Container";
import DisplayData from "./components/DisplayData";

const apiKey = "416d3bfbb71ef7c1f263d81f4d312e11";

class App extends Component {
  state = {
    info: {},
    location: undefined,
    temperature: undefined,
    humidity: undefined,
    wind: {}
  };

  handleChange = e => {
    this.setState(
      {
        location: e.target.value
      },
      () => console.log(this.state.location)
    );
  };

  findWeather = async e => {
    e.preventDefault();

    const location = this.state.location;
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
      );
      const json = await data.json();

      if (json.message === "city not found") {
        alert("city not found");
      } else {
        this.setState({
          info: json,
          temperature: json.main.temp,
          humidity: json.main.humidity,
          wind: json.wind
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container maxWidth="sm">
        <Title />
        <MainForm
          info={this.state.info}
          location={this.state.location}
          handleChange={this.handleChange}
          findWeather={this.findWeather}
        />
        <DisplayData
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          wind={this.state.wind}
          info={this.state.info}
        />
      </Container>
    );
  }
}

export default App;
