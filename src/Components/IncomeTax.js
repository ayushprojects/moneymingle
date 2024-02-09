import React, { useState } from "react";
import "../CSS/tax.css";
import Navbar from "./Navbar";
import { TextField } from "@mui/material";
export default function IncomeTax() {
  const Income = {
    salary: "",
    others: "",
    interest: "",
    rentalIncome: "",
  };

  const Deductions = {
    basicDeduction: "",
    NPS: "",
    medicalInsurance: "",
    charity: "",
    educationLoan: "",
    savingDeposits: "",
  };

  const HRAexemption = {
    salaryPerAnnum: "",
    HRAreceived: "",
    totalRentPaid: "",
  };

  const [incomeInput, setIncomeInput] = useState(Income);
  const [DeductionInput, setDeductionInput] = useState(Deductions);
  const [HRAexempt, setHRAexemption] = useState(HRAexemption);
  const [tax, setTax] = useState(0);
  //Handle Evemts
  function handleIncome(e) {
    setIncomeInput({ ...incomeInput, [e.target.name]: e.target.value });
  }
  function handleDeduction(e) {
    setDeductionInput({ ...DeductionInput, [e.target.name]: e.target.value });
  }
  function handleHRA(e) {
    setHRAexemption({ ...HRAexempt, [e.target.name]: e.target.value });
  }

  //Calculations
  //   function CalculateTax(e) {
  //     //hra calculations
  //     let actualHRA = HRAexempt.HRAreceived;
  //     let rentpaid = HRAexempt.totalRentPaid - HRAexempt.salaryPerAnnum * 0.1;
  //     let fiftyOfBasic = HRAexempt.salaryPerAnnum * 0.5;

  //     let Exempted = Math.min(actualHRA, rentpaid, fiftyOfBasic);
  //     let Taxable = actualHRA - Exempted;
  //     //hra calculations

  //     let totalIncome =
  //       Income.salary + Income.others + Income.interest + Income.rentalIncome;

  //     let totalDeductions =
  //       Deductions.NPS +
  //       Deductions.basicDeduction +
  //       Deductions.charity +
  //       Deductions.educationLoan +
  //       Deductions.medicalInsurance +
  //       Deductions.savingDeposits;

  //     let taxAmount = totalIncome - totalDeductions + Taxable;

  //     if (taxAmount <= 250000) {
  //       setTax(0);
  //     } else if (taxAmount <= 300000) {
  //       setTax((taxAmount - 2500000) * 0.05);
  //     } else if (taxAmount <= 500000) {
  //       setTax((300000 - 250001) * 0.05 + (taxAmount - 300000) * 0.05);
  //     } else if (taxAmount <= 1000000) {
  //       setTax(
  //         (300000 - 250001) * 0.05 +
  //           (500000 - 300001) * 0.05 +
  //           (taxAmount - 500000) * 0.2
  //       );
  //     } else {
  //       setTax(
  //         (300000 - 250001) * 0.05 +
  //           (500000 - 300001) * 0.05 +
  //           (1000000 - 500000) * 0.2 +
  //           (taxAmount - 1000000) * 0.3
  //       );
  //     }
  //   }

  function CalculateTax(e) {
    //hra calculations
    let actualHRA = HRAexempt.HRAreceived;

    let rentpaid = HRAexempt.totalRentPaid - HRAexempt.salaryPerAnnum * 0.1;
    let fiftyOfBasic = HRAexempt.salaryPerAnnum * 0.5;

    let Exempted = Math.min(actualHRA, rentpaid, fiftyOfBasic);
    let Taxable = actualHRA - Exempted;

    let totalIncome =
      incomeInput.salary +
      incomeInput.others +
      incomeInput.interest +
      incomeInput.rentalIncome;
    console.log(totalIncome);

    let x = totalIncome - HRAexempt.HRAreceived;
    let totalDeductions =
      DeductionInput.NPS +
      DeductionInput.basicDeduction +
      DeductionInput.charity +
      DeductionInput.educationLoan +
      DeductionInput.medicalInsurance +
      DeductionInput.savingDeposits;
    console.log(totalDeductions);

    let taxableIncome = x - totalDeductions + Taxable;
    console.log(taxableIncome);

    // if (taxAmount <= 250000) {
    //   setTax(0);
    // } else if (taxAmount <= 300000) {
    //   setTax((taxAmount - 250000) * 0.05);
    // } else if (taxAmount <= 500000) {
    //   setTax((300000 - 250001) * 0.05 + (taxAmount - 300000) * 0.05);
    // } else if (taxAmount <= 1000000) {
    //   setTax(
    //     (300000 - 250001) * 0.05 +
    //       (500000 - 300001) * 0.05 +
    //       (taxAmount - 500000) * 0.2
    //   );
    // } else {
    //   setTax(
    //     (300000 - 250001) * 0.05 +
    //       (500000 - 300001) * 0.05 +
    //       (1000000 - 500000) * 0.2 +
    //       (taxAmount - 1000000) * 0.3
    //   );
    // }
    let tax;
    if (taxableIncome <= 250000) {
      tax = 0;
    } else if (taxableIncome <= 500000) {
      tax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax = (500000 - 250001) * 0.05 + (taxableIncome - 500000) * 0.2;
    } else {
      tax =
        (500000 - 250001) * 0.05 +
        (1000000 - 500001) * 0.2 +
        (taxableIncome - 1000000) * 0.3;
    }
    setTax(tax);
  }

  return (
    <>
      <Navbar />
      <div className="itx">
        <h1>Income Tax Calculator 2023-2024</h1>
        <div className="main-contaier container">
          {/* Income  */}
          <div className="Income">
            <h5>Income</h5>
            <TextField
              id="outlined-basic"
              label="  Gross Salary"
              variant="outlined"
              type="number"
              name="salary"
              value={incomeInput.salary}
              onChange={handleIncome}
            />
            <br />
            <TextField
              id="outlined-basic"
              label=" Annual income from other sources"
              variant="outlined"
              type="number"
              name="others"
              value={incomeInput.others}
              onChange={handleIncome}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="  Annual income from interest"
              variant="outlined"
              type="number"
              name="interest"
              value={incomeInput.interest}
              onChange={handleIncome}
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Annual income from house property (rental income)"
              variant="outlined"
              type="number"
              name="rentalIncome"
              value={incomeInput.rentalIncome}
              onChange={handleIncome}
            />
          </div>
          <br />
          {/* Deduction  */}
          <div className="Deductions">
            <h5>Deductions</h5>
            <TextField
              id="outlined-basic"
              label="   Basic deduction u/s 80C"
              variant="outlined"
              type="number"
              name="basicDeduction"
              value={DeductionInput.basicDeduction}
              onChange={handleDeduction}
            />
            <br />
            <TextField
              id="outlined-basic"
              label=" Contribution to NPS u/s 80CCD(1B)"
              variant="outlined"
              type="number"
              name="NPS"
              value={DeductionInput.NPS}
              onChange={handleDeduction}
            />
            <br />{" "}
            <TextField
              id="outlined-basic"
              label="Medical insurance premium u/s 80D"
              variant="outlined"
              type="number"
              name="medicalInsurance"
              value={DeductionInput.medicalInsurance}
              onChange={handleDeduction}
            />
            <br />{" "}
            <TextField
              id="outlined-basic"
              label="Donation to Charity u/s 80G"
              variant="outlined"
              type="number"
              name="charity"
              value={DeductionInput.charity}
              onChange={handleDeduction}
            />
            <br />{" "}
            <TextField
              id="outlined-basic"
              label="Interest on educational loan u/s 80E"
              variant="outlined"
              type="number"
              name="educationLoan"
              value={DeductionInput.educationLoan}
              onChange={handleDeduction}
            />
            <br />{" "}
            <TextField
              id="outlined-basic"
              label=" Interest on deposits in saving account u/s 80TTA/TTB"
              variant="outlined"
              type="number"
              name="savingDeposits"
              value={DeductionInput.savingDeposits}
              onChange={handleDeduction}
            />
          </div>
          <br />

          <div className="HRA">
            <h5>HRA Exemption</h5>
            <TextField
              id="outlined-basic"
              label=" Basic Salary"
              variant="outlined"
              type="number"
              name="salaryPerAnnum"
              value={HRAexempt.salaryPerAnnum}
              onChange={handleHRA}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="  HRA Received"
              variant="outlined"
              type="number"
              name="HRAreceived"
              value={HRAexempt.HRAreceived}
              onChange={handleHRA}
            />
            <br />

            <TextField
              id="outlined-basic"
              label="  Total Rent Paid"
              variant="outlined"
              type="number"
              name="totalRentPaid"
              value={HRAexempt.totalRentPaid}
              onChange={handleHRA}
            />
          </div>
        </div>
        <button style={{ marginTop: 20 }} onClick={(e) => CalculateTax(e)}>
          CalculateTax
        </button>
      </div>

      <div className="op">
        <h1> Total tax is : {tax}</h1>
      </div>
    </>
  );
}
