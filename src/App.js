import SipCalculator from "./Components/SipCalculator";
import LumpSum from "./Components/LumpSum";
import EmiCalculator from "./Components/EmiCalculator";
import IncomeTax from "./Components/IncomeTax";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SipCalculator" element={<SipCalculator />} />
          <Route path="/LumpSum" element={<LumpSum />} />
          <Route path="/EmiCalculator" element={<EmiCalculator />} />
          <Route path="/IncomeTax" element={<IncomeTax />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
/* *{

blue :#6499E9
mint :#9EDDFF

lightmint :#A6F6FF

moreligth :#BEFFF7
} */
