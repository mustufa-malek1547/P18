
import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 }
  ]);

  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function selectProduct(product) {
    setEditId(product.id);
    setName(product.name);
    setPrice(String(product.price));
  }

  function updateProduct(event) {
    event.preventDefault();

    setProducts(
      products.map((product) =>
        product.id === editId
          ? {
              ...product,
              name: name,
              price: Number(price)
            }
          : product
      )
    );

    setEditId(null);
    setName("");
    setPrice("");
  }

  return (
    <div>
      <h1>Product Management</h1>

      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - Rs. {product.price}{" "}
            <button onClick={() => selectProduct(product)}>
              Edit
            </button>
          </p>
        </div>
      ))}

      {editId !== null && (
        <form onSubmit={updateProduct}>
          <h2>Edit Product</h2>

          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <br /><br />

          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            min="0"
            required
          />
          <br /><br />

          <button type="submit">Update Product</button>
        </form>
      )}
    </div>
  );
}
