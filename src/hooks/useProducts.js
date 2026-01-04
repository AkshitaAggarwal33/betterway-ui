import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        // mock stock status
        const updated = data.slice(0, 20).map(p => ({
          ...p,
          stock: Math.floor(Math.random() * 6), // 0–5
        }));
        setProducts(updated);
        setLoading(false);
      });
  }, []);

  return { products, loading };
};
