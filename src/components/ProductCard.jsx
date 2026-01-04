import React from "react";

const ProductCard = React.memo(({ product, addToCart }) => {
  const outOfStock = product.rating?.count < 100;

  return (
    <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      <h3 className="font-semibold text-slate-800 line-clamp-2">
        {product.title}
      </h3>

      <p className="text-xs uppercase tracking-wide text-slate-500 mt-1">
        {product.category}
      </p>

      <p className="text-lg font-bold text-slate-900 mt-3">
        ₹ {product.price}
      </p>

      <p
        className={`text-sm font-medium mt-1 ${outOfStock ? "text-red-500" : "text-emerald-600"}`}>
        ● {outOfStock ? "Out of stock" : "In stock"}
      </p>

      <button
        disabled={outOfStock}
        onClick={() => addToCart(product)}
        className={`mt-4 w-full rounded-xl py-2.5 text-white font-medium transition-all
          ${
            outOfStock? "bg-slate-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          }`}
      >
        Add to Cart
      </button>
    </div>
  );
});

export default ProductCard;
