import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="p-4">
      <p>
        Задание 4. Фокус на input с useRef
        <br />
        Сделай компонент FocusInput, где при загрузке страницы курсор сразу
        оказывается в input (автофокус).
      </p>
      <p>-------------------------------</p>
      <input
        ref={inputRef}
        type="text"
        placeholder="Autofocus here"
        className="border p-2"
      />
    </div>
  );
}

export default FocusInput;
