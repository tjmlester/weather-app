import React from "react";

import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const DisplayData = ({ temperature, humidity, wind, info }) => (
  <div align="center">
    {Object.keys(info).length === 0 ? null : (
      <>
        <Typography variant="h4">
          {info.name}, {info.sys.country}
        </Typography>

        <List className="list">
          <div className="list-item">
            <ListItemText>
              Temperature: {temperature === undefined ? "" : temperature + "°C"}
            </ListItemText>
            <Divider variant="inset" />
            <ListItemText>
              Humidity: {humidity === undefined ? "" : humidity + "%"}
            </ListItemText>
            <Divider variant="inset" />
            <ListItemText>
              Wind:{" "}
              {Object.keys(wind).length === 0
                ? ""
                : wind.deg + "° " + wind.speed + " m/s"}
            </ListItemText>
          </div>
        </List>
      </>
    )}
  </div>
);

export default DisplayData;
