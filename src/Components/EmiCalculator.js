import React, { useState } from "react";
import { Slider, Box, Typography } from "@mui/material";
import "../CSS/style.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Navbar from "./Navbar";
export default function EmiCalculator() {
  const SipData = {
    Loanamount: 25000,
    Interest: 12,
    tenure: "4",
  };

  const [input, setInput] = useState(SipData);

  //Formulas for value

  const principal = input.Loanamount;
  const annualInterestRate = input.Interest;
  const tenureInYears = input.tenure;

  // Convert annual interest rate to monthly interest rate
  const monthlyInterestRate = annualInterestRate / 12 / 100;

  // Convert tenure to months
  const numberOfPayments = tenureInYears * 12;

  // EMI formula
  const emi =
    (principal *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  const finalemi = parseInt(emi, 10);
  const TotalInterest = finalemi * numberOfPayments - principal;
  const TotalAmount = principal + TotalInterest;

  //Formulas for value

  //functions to handle slider value
  const handleSliderChange = (event, newValue) => {
    setInput({ ...input, Loanamount: newValue });
  };
  const handleSliderChange2 = (event, newValue) => {
    setInput({ ...input, Interest: newValue });
  };
  const handleSliderChange3 = (event, newValue) => {
    setInput({ ...input, tenure: newValue });
  };

  function handleChange(e) {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  //functions to handle slider value

  ///code for chart doughnout
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Principal Amount", "Interest Amount"],
    datasets: [
      {
        lable: "poll",
        data: [principal, TotalInterest],
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
          <h1>EMI Calculator</h1>

          <Box>
            <Typography id="input-slider" gutterBottom>
              Loan Amount
            </Typography>
            <Slider
              style={{ color: "#6499e9" }}
              value={input.Loanamount}
              onChange={handleSliderChange}
              valueLabelDisplay="off"
              step={500}
              min={500}
              max={100000}
            />
            <input
              className="input-box"
              name="Loanamount"
              type="number"
              value={input.Loanamount}
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
              Interest Rate
            </Typography>
            <Slider
              style={{ color: "#6499e9" }}
              value={input.Interest}
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
              name="Interest"
              value={input.Interest}
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
              Loan Tenure
            </Typography>
            <Slider
              style={{ color: "#6499e9" }}
              value={input.tenure}
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
              name="tenure"
              value={input.tenure}
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
            Monthly Emi: <span>&#x20B9;</span>
            {finalemi}
          </h5>
          <h5>
            Principal Amount : <span>&#x20B9;</span>
            {principal}
          </h5>
          <h5>
            Total Interest : <span>&#x20B9;</span>
            {TotalInterest}
          </h5>
          <h5>
            Total Amount : <span>&#x20B9;</span>
            {TotalAmount}
          </h5>
        </div>

        <div className="doughnout">
          <Doughnut data={data} options={options}></Doughnut>
        </div>
      </div>
    </>
  );
}
