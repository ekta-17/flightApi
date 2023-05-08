const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT || 3001;
//DEFINE MIDDLEWARE
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.get("/api/flight", (req, res) => {
  console.log("input=", req.body);
  const flightList = [];
  const flightdata = [
    {
      source: "Delhi",
      destination: "Jaipur",
      flightName: "AirAsia",
      fair: 1614,
      date: "15 April 2023",
    },
    {
      source: "Delhi",
      destination: "Jaipur",
      flightName: "GoIndia",
      fair: 2560,
      date: "15 April 2023",
    },
    {
      source: "Delhi",
      destination: "Jaipur",
      flightName: "indigo",
      fair: 2133,
      date: "15 April 2023",
    },
    {
      source: "jaipur",
      destination: "delhi",
      flightName: "AirAsia",
      fair: 1614,
      date: "15 April 2023",
    },
    {
      source: "jaipur",
      destination: "delhi",
      flightName: "indigo",
      fair: 2133,
      date: "15 April 2023",
    },
  ];
  if (req.body.source && req.body.destination && req.body.date) {
    flightdata.forEach(function (arrayitem) {
      if (
        arrayitem.source == req.body.source &&
        arrayitem.destination == req.body.destination &&
        arrayitem.date == req.body.date
      ) {
        flightList.push({
          flightName: arrayitem.flightName,
          fair: arrayitem.fair,
        });
      }
    });
  } else {
    res.status(200).json({ message: "data not found" });
  }
  res.status(200).json({
    FlightDetail: flightList,
  });
});
app.listen(port, () => {
  console.log("server is running on port" + port);
});
