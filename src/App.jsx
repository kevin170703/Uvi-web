import { useState } from "react";
import "./App.css";
import About from "./comoponents/About/About";
import Footer from "./comoponents/Footer/Footer";
import Form from "./comoponents/Form/Form";
import Home from "./comoponents/Home/Home";
import Navbar from "./comoponents/Navbar/Navbar";
import Plans from "./comoponents/Plans/Plans";

function App() {
  const [dataY, setDataY] = useState();
  function handleAction(y) {
    setDataY(y);
  }
  return (
    <div className="App">
      <Navbar dataAboutPosition={dataY} />
      <Home />
      <About onAction={handleAction} />
      <Plans />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
