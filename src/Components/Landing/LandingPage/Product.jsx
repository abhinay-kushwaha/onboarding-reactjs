import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Payment from "../../RazorPay/Payment";

const Product = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Dummy product data
  const dummyProduct = {
    id: "1",
    name: "Premium Cotton T-Shirt",
    price: "₹999",
    image: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021474539_437Wx649H_202403071626221.jpeg",
    description: "A comfortable and stylish premium cotton t-shirt for everyday wear.",
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Blue", "Red"],
  };

  useEffect(() => {
    // Simulate fetching product details
    setProduct(dummyProduct);
  }, []);

  if (!product) {
    return <div className="text-center text-lg font-semibold">Product not found</div>;
  }

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  // Check if both size and color are selected
  const isValidSelection = selectedSize && selectedColor;

  return (
    <div className="container mx-auto max-w-5xl p-6 text-wrap">
      {/* Product Image & Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <img src={product.image} alt={product.name} className="max-w-md w-full mx-auto md:w-full rounded-lg shadow-lg" />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 text-lg my-2">Category: {product.category}</p>
          <p className="text-xl font-semibold text-blue-600">{product.price}</p>
          <p className="text-gray-700 my-4">{product.description}</p>

          {/* Size Selection */}
          <div className="my-4">
            <label className="block font-semibold mb-2">Select Size:</label>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelection(size)}
                  className={`border px-4 py-2 rounded hover:bg-gray-200 ${selectedSize === size ? "bg-blue-200" : ""}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="my-4">
            <label className="block font-semibold mb-2">Select Color:</label>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorSelection(color)}
                  className={`border px-4 py-2 rounded hover:bg-gray-200 ${selectedColor === color ? "bg-blue-200" : ""}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="my-4">
            <label className="block font-semibold mb-2">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="border p-2 rounded"
            />
          </div>

         

          {/* Pass product details to Payment if valid selection */}
          {isValidSelection && (
            <Payment
              product={product}
              selectedSize={selectedSize}
              selectedColor={selectedColor}
              quantity={quantity}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
