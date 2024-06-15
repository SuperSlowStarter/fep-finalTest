import React, { useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, quantity: state.quantity + 1 };
    case "DECREMENT":
      return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
}

const CartItem = ({ item }) => {
  const [cart, dispatch] = useReducer(cartReducer, item);

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Quantity: {cart.quantity}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increase Number
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrease Number
      </button>
    </div>
  );
};

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Apple", quantity: 1 },
    { id: 2, name: "Banana", quantity: 2 },
    { id: 3, name: "Orange", quantity: 3 },
  ];

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
