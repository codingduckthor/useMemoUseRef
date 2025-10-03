import React, { useState, useEffect, useMemo } from "react";

function ProductSearch() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredProducts = useMemo(() => {
    console.log("Filtering completed");
    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div className="p-4">
      <p className="text-base font-bold">
        Задание 1: Фильтрация с useMemo. <br /> Сделай компонент ProductSearch,
        который: <br />- Загружает товары с API https://dummyjson.com/products{" "}
        <br />- Имеет поле поиска по названию <br />- Использует useMemo, чтобы
        не пересчитывать фильтрацию при каждом рендере <br />
        👉 Ожидаемый результат: товары фильтруются только при изменении строки
        поиска.
      </p>
      <p>-------------------------------</p>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4"
      />
      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;
