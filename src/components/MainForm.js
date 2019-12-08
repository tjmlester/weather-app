import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class MainForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.findWeather} align="center">
          <TextField
            id="location-input"
            label="location"
            variant="outlined"
            placeholder="city"
            margin="normal"
            value={this.props.location}
            InputLabelProps={{
              shrink: true
            }}
            onChange={this.props.handleChange}
            color="primary"
          />
          <div>
            <Button type="submit" variant="contained">
              Find the weather
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default MainForm;
