const Cart = ({ cart, updateQty, removeItem }) => {
  const totalItems = cart.reduce((a, c) => a + c.qty, 0);
  const totalPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);

  if (!cart.length) {
    return <p className="bg-white p-6 rounded-xl shadow-sm text-center text-gray-500">Cart is empty</p>;
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md sticky top-6">
      <h2 className="font-bold text-lg mb-4 text-gray-800">Cart</h2>

      {cart.map(item => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.title}</span>

          <input
            type="number"
            min="1"
            max={item.stock}
            value={item.qty}
            onChange={e => updateQty(item.id, +e.target.value)}
            className="w-16 border"
          />

          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500"
          >
            ✕
          </button>
        </div>
      ))}

      <p className="mt-2">Total Items: {totalItems}</p>
      <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
