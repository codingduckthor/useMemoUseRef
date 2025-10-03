import React, { useRef } from "react";

function RenderCounter() {
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <div className="p-4">
      <p>
        Задание 2: Сделай компонент RenderCounter, который:
        <br />- Показывает, сколько раз компонент был отрисован
        <br />- Для хранения счётчика использует useRef
      </p>
      <p>-------------------------------</p>
      <p className="">Render #{renderCount.current}</p>
    </div>
  );
}

export default RenderCounter;
