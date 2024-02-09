import React from "react";
import Navbar from "./Navbar";
import "../CSS/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container whole">
        <div className="row">
          <div className="col-md-6 coloumn">
            <div className="box">
              <h5>SIP Calculator</h5>
              <p>
                A SIP calculator is a tool that helps you determine the returns
                you can avail when parking your funds in such investment tools.
              </p>
              <Link to="/SipCalculator">
                <button>calculate</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 coloumn">
            <div className="box">
              <h5>Lumpsum Calculator</h5>
              <p>
                A lumpsum investment is when the depositor invests a significant
                sum of money on a particular mutual fund scheme.
              </p>
              <Link to="/LumpSum">
                <button>calculate</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 coloumn">
            <div className="box">
              {" "}
              <h5>EMI Calculator</h5>
              <p>
                There are several EMI calculators available online; one must
                choose an accurate EMI calculator and learn its usage to
                calculate the exact EMI amount they are liable to pay for a
                loan.
              </p>
              <Link to="/EmiCalculator">
                <button>calculate</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 coloumn">
            <div className="box">
              {" "}
              <h5>Income Tax Calculator</h5>
              <p>
                Income Tax Calculator Assessment year Age category CALCULATE
                What is Income Tax Calculator An Income-tax calculator is an
                online tool that helps to evaluate taxes based on a person’s
                income once the Union Budget for the year is announced.
              </p>
              <Link to="/IncomeTax">
                <button>calculate</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content"></div>
    </>
  );
}

export default Home;
