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

  const totalInvestedAmount = input.amount * input.timeperiod * 12;

  const months = input.timeperiod * 12;

  var totalValue =
    (input.amount * (Math.pow(1 + input.returnrate / 100 / 12, months) - 1)) /
    (input.returnrate / 100 / 12);
  const integerValue = parseInt(totalValue, 10);

  const estiReturns = integerValue - totalInvestedAmount;

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
    labels: ["totalInvestedAmount", "estiReturns"],
    datasets: [
      {
        lable: "poll",
        data: [totalInvestedAmount, estiReturns],
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
      <div className="clac ">
        <div className="left-div ">
          <h1>SIP Calculator</h1>

          <Box>
            <Typography id="input-slider" gutterBottom>
              Monthly Investment
            </Typography>
            <Slider
              style={{ color: "#6499e9" }}
              value={input.amount}
              onChange={handleSliderChange}
              valueLabelDisplay="off"
              step={500}
              min={500}
              max={100000}
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
              style={{ color: "#6499e9" }}
              value={input.returnrate}
              onChange={handleSliderChange2}
              valueLabelDisplay="off"
              step={0.1}
              min={1}
              max={30}
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
              style={{ color: "#6499e9" }}
              value={input.timeperiod}
              onChange={handleSliderChange3}
              valueLabelDisplay="off"
              step={1}
              min={1}
              max={40}
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
            Invested amount : <span>&#x20B9;</span> {totalInvestedAmount}
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
