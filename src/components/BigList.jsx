import React, { useState, useMemo } from "react";

function BigList() {
  const [numbers, setNumbers] = useState(
    Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000))
  );

  const sum = useMemo(() => {
    console.log("Sum calculated");
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);

  const regenerate = () => {
    setNumbers(
      Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000))
    );
  };

  return (
    <div className="p-4">
      <p>
        Задание 5. Таблица с подсчётом
        <br />
        Создай компонент BigList, который генерирует массив из 1000 случайных
        чисел.
        <br />- С помощью useMemo находи сумму чисел
        <br />- Добавь кнопку «Сгенерировать заново»
        <br />- Покажи, что сумма пересчитывается только при изменении массива
      </p>
      <p>-------------------------------</p>
      <p>Сумма: {sum}</p>
      <button
        onClick={regenerate}
        className="bg-green-500 text-white px-4 py-2"
      >
        Generate
      </button>
    </div>
  );
}

export default BigList;
