import React, { useState, useCallback } from "react";

function Calculator() {
  const [number, setNumber] = useState(0);

  const double = useCallback(() => {
    console.log("Function double was used");
    setNumber((prev) => prev * 2);
  }, []);

  return (
    <div className="p-4">
      <p>
        Задание 3. Калькулятор с useCallback
        <br />
        Сделай компонент Calculator, который:
        <br />- Имеет поле ввода числа и кнопку «Удвоить»
        <br />- Для функции «удвоить» использует useCallback
        <br />- Добавь console.log, чтобы показать, что функция не пересоздаётся
        при каждом рендере
      </p>
      <p>-------------------------------</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={double} className="bg-blue-500 text-white px-4 py-2">
        x2
      </button>
    </div>
  );
}

export default Calculator;
