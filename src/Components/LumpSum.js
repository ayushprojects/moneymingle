import React, { useState } from "react";
import { Slider, Box, Typography } from "@mui/material";
import "../CSS/style.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Navbar from "./Navbar";

export default function SipCalculator() {
  const SipData = {
    amount: 25000,
    returnrate: 12,
    timeperiod: "4",
  };

  const [input, setInput] = useState(SipData);

  //Formulas for value

  const decimalRate = input.returnrate / 100;
  var totalValue = input.amount * Math.pow(1 + decimalRate, input.timeperiod);

  const integerValue = parseInt(totalValue, 10);

  const estiReturns = integerValue - input.amount;

  //Formulas for value

  //functions to handle slider value
  const handleSliderChange = (event, newValue) => {
    setInput({ ...input, amount: newValue });
  };
  const handleSliderChange2 = (event, newValue) => {
    setInput({ ...input, returnrate: newValue });
  };
  const handleSliderChange3 = (event, newValue) => {
    setInput({ ...input, timeperiod: newValue });
  };

  function handleChange(e) {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  //functions to handle slider value

  ///code for chart doughnout
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Invested amount", "Est. Returns"],
    datasets: [
      {
        lable: "poll",
        data: [input.amount, estiReturns],
        backgroundColor: ["#6499e9", "#2ec4b9"],
        borderColor: ["#6499e9", "#2ec4b9"],
        hoverOffset: 7,
      },
    ],
  };
  const options = {};

  ///code for chart doughnout

  return (
    <>
      <Navbar />
      <div className="clac">
        <div className="left-div">
          <h1>Lumpsum Calculator</h1>
          <Box>
            <Typography id="input-slider" gutterBottom>
              Total Investment
            </Typography>
            <Slider
              value={input.amount}
              onChange={handleSliderChange}
              valueLabelDisplay="off"
              step={500}
              min={500}
              max={100000}
              style={{ color: "#6499e9" }}
            />
            <input
              className="input-box"
              name="amount"
              type="number"
              value={input.amount}
              margin="dense"
              onChange={handleChange}
              inputProps={{
                step: 500,
                min: 500,
                max: 100000,
                type: "number",
              }}
            />
          </Box>
          <br />

          <Box>
            <Typography id="input-slider" gutterBottom>
              Return Rate
            </Typography>
            <Slider
              value={input.returnrate}
              onChange={handleSliderChange2}
              valueLabelDisplay="off"
              step={0.1}
              min={1}
              max={30}
              style={{ color: "#6499e9" }}
            />
            <input
              className="input-box"
              type="number"
              placeholder="Entern return rate"
              name="returnrate"
              value={input.returnrate}
              onChange={handleChange}
              inputProps={{
                step: 0.1,
                min: 1,
                max: 30,
                type: "number",
              }}
            />
          </Box>

          <br />

          <Box>
            <Typography id="input-slider" gutterBottom>
              Time period
            </Typography>
            <Slider
              value={input.timeperiod}
              onChange={handleSliderChange3}
              valueLabelDisplay="off"
              step={1}
              min={1}
              max={40}
              style={{ color: "#6499e9" }}
            />

            <input
              className="input-box"
              type="number"
              placeholder=" Entern time period"
              name="timeperiod"
              value={input.timeperiod}
              onChange={handleChange}
              inputProps={{
                step: 1,
                min: 1,
                max: 40,
                type: "number",
              }}
            />
          </Box>

          <br />
          <h5>
            Invested amount : <span>&#x20B9;</span> {input.amount}
          </h5>
          <h5>
            Estimated returns: <span>&#x20B9;</span> {estiReturns}
          </h5>
          <h5>
            Toal amount in {input.timeperiod} year : <span>&#x20B9;</span>{" "}
            {integerValue}
          </h5>
        </div>

        <div className="doughnout">
          <Doughnut data={data} options={options}></Doughnut>
        </div>
      </div>
    </>
  );
}
