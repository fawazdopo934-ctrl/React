import About from "../composants/About";
import Navbar from "../composants/Navbar";
import Contact from "../composants/Contact";
import Test from "../composants/Test";
import Boutique from "./pages/boutique";
import "../styles/style.css";
import Services from "../composants/Services";
import Articles from "./pages/articles";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  function gestionClickIncrease() {
    setCount(count + 1);
  }
  function gestionClickDecrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <Navbar />
      <h1 className="text-blue-800">Bonjour Tout le monde</h1>
      <p>Comment allez vous</p>
      {/* useState */}
      <div className="h-24 w-72 rounded-2xl bg-gray-400 mx-auto my-5 flex justify-between items-center p-3">
        <button
          className="text-white border-0 bg-blue-600 rounded-2xl p-2 text-3xl"
          onClick={gestionClickDecrease}
        >
          -
        </button>
        <p className="text-4xl font-bold">{count}</p>
        <button
          className="text-white border-0 bg-blue-600 rounded-2xl p-2 text-3xl"
          onClick={gestionClickIncrease}
        >
          +
        </button>
      </div>

      <About />
      <Contact />
      <Test />
      <Articles />
      <Services />
      <Boutique />
    </>
  );
}
export default App;
