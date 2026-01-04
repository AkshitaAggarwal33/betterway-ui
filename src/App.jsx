import { useMemo, useState } from "react";
import { useProducts } from "./hooks/useProducts";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import { useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce";


function App() {
  const { products, loading } = useProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const categories = [...new Set(products.map(p => p.category))];
  const debouncedSearch = useDebounce(search, 500);

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (debouncedSearch) {
      data = data.filter(p => p.title.toLowerCase().includes(debouncedSearch.toLowerCase()));
    }

    if (category) data = data.filter(p => p.category === category);

    if (sort === "low") data.sort((a, b) => a.price - b.price);

    if (sort === "high") data.sort((a, b) => b.price - a.price);

    return data;
  }, [products, debouncedSearch, category, sort]);


  const addToCart = product => {
    setCart(prev => {
      const found = prev.find(i => i.id === product.id);
      if (found) {
        if (found.qty < product.stock) {
          return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          );
        }
        return prev;
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    setCart(prev => prev.map(i => (i.id === id ? { ...i, qty } : i)));
  };

  const removeItem = id => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setSort("");
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div className="lg:col-span-3">
          <Filters
            {...{ search, setSearch, category, setCategory, sort, setSort }}
            categories={categories}
            clearFilters={clearFilters}
          />
          <ProductGrid products={filteredProducts} addToCart={addToCart} />
        </div>

        <Cart cart={cart} updateQty={updateQty} removeItem={removeItem} />
      </div>
    </div>

    
  );
}

export default App;
