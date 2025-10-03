import React, { useState } from "react";
import ProductSearch from "./components/ProductSearch";
import RenderCounter from "./components/RenderCounter";
import Calculator from "./components/Calculator";
import FocusInput from "./components/FocusInput";
import BigList from "./components/BigList";
import "./App.css";

function App() {
  const [active, setActive] = useState("ProductSearch");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">useMemo, useRef homework</h1>

      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setActive("ProductSearch")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          ProductSearch
        </button>
        <button
          onClick={() => setActive("RenderCounter")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          RenderCounter
        </button>
        <button
          onClick={() => setActive("Calculator")}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Calculator
        </button>
        <button
          onClick={() => setActive("FocusInput")}
          className="px-4 py-2 bg-yellow-500 text-black rounded"
        >
          FocusInput
        </button>
        <button
          onClick={() => setActive("BigList")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          BigList
        </button>
      </div>

      <div className="border p-4 rounded shadow-md">
        {active === "ProductSearch" && <ProductSearch />}
        {active === "RenderCounter" && <RenderCounter />}
        {active === "Calculator" && <Calculator />}
        {active === "FocusInput" && <FocusInput />}
        {active === "BigList" && <BigList />}
      </div>
    </div>
  );
}

export default App;
