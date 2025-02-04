import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Import heart icons

const FirstCompo = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]); // Local state to manage cart items
  const [likedProducts, setLikedProducts] = useState([]); // To track which products are liked
  const navigate = useNavigate(); // Hook for navigation

  const products = [
    { id: 1, name: "Fox PILOTS PANEL TEE (OCEAN BLUE)", price: "£100", image: "https://placehold.co/300x400?text=Ocean+Blue+Tee", category: "T-Shirts" },
    { id: 2, name: "Fox PILOTS PANEL TEE (DUSTY MAUVE)", price: "£100", image: "https://placehold.co/300x400?text=Dusty+Mauve+Tee", category: "T-Shirts" },
    { id: 3, name: "Fox PILOTS PANEL TEE | JET BLACK", price: "£100", image: "https://placehold.co/300x400?text=Jet+Black+Tee", category: "T-Shirts" },
    { id: 4, name: "Fox PILOTS PANEL TEE (DESERT SAND)", price: "£100", image: "https://placehold.co/300x400?text=Desert+Sand+Tee", category: "T-Shirts" },
    { id: 5, name: "PUNK-ROCK TEE", price: "£100", image: "https://placehold.co/300x400?text=Punk-Rock+Tee", category: "T-Shirts" },
    { id: 6, name: "RAW TANK TOP", price: "£100", image: "https://placehold.co/300x400?text=Raw+Tank+Top", category: "Tops" },
    { id: 7, name: "THE Fox PILOTS CHAIN OVERSHIRT", price: "£120", image: "https://placehold.co/300x400?text=Chain+Overshirt", category: "Shirts" },
    { id: 10, name: "CULTURE POP HOODIE 22", price: "£120", image: "https://placehold.co/300x400?text=Pop+Hoodie+22", category: "Hoodies" },
    { id: 11, name: "Fox PILOTS ESSENTIAL HOODIE", price: "£120", image: "https://placehold.co/300x400?text=Essential+Hoodie", category: "Hoodies" },
    { id: 13, name: "CULTURE BEAR HOODIE", price: "£120", image: "https://placehold.co/300x400?text=Bear+Hoodie", category: "Hoodies" },
    { id: 15, name: "CULTURE POP-OVER", price: "£120", image: "https://placehold.co/300x400?text=Pop-Over", category: "Sweaters" },
  ];

  const categories = ["All", "T-Shirts", "Tops", "Shirts", "Hoodies", "Sweaters"];

  // Filter products based on selected category
  const filteredProducts = products.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Handle heart icon click
  const handleHeartClick = (productId) => {
    const isLoggedIn = localStorage.getItem("token"); // Check if the user is logged in using token (adjust as needed)

    if (!isLoggedIn) {
      navigate("/login"); // If not logged in, navigate to login page
      return;
    }

    // Toggle the liked state
    setLikedProducts((prevLikes) =>
      prevLikes.includes(productId)
        ? prevLikes.filter((id) => id !== productId) // Remove from liked
        : [...prevLikes, productId] // Add to liked
    );
  };

  // Handle adding product to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="container mx-auto max-w-7xl p-4 sm:p-10 text-wrap">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg border-2 transition-all ${
              selectedCategory === category
                ? "bg-[#D56A25] text-white border-[#D56A25]"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-2 transition-transform transform hover:scale-105">
            <Link to={`/shop/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-auto" />
              <h2 className="text-lg font-bold mt-2">{product.name}</h2>
              <p className="text-gray-700">{product.price}</p>
            </Link>

            {/* Heart Icon (like button) */}
            <div className="absolute top-2 right-2">
              <button
                onClick={() => handleHeartClick(product.id)}
                className="text-red-500"
              >
                {likedProducts.includes(product.id) ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 w-full bg-[#D56A25] text-white font-bold py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstCompo;
