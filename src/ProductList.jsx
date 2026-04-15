import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantsData = [
  // Category 1: Tropical Plants
  {
    id: 1, category: "Tropical Plants", name: "Monstera Deliciosa",
    description: "Iconic split leaves, easy to grow indoors.",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400",
  },
  {
    id: 2, category: "Tropical Plants", name: "Bird of Paradise",
    description: "Dramatic large leaves, tropical statement plant.",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
  },
  {
    id: 3, category: "Tropical Plants", name: "Peace Lily",
    description: "Elegant white blooms, air purifying.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400",
  },
  {
    id: 4, category: "Tropical Plants", name: "Philodendron",
    description: "Heart-shaped leaves, low maintenance.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?w=400",
  },
  {
    id: 5, category: "Tropical Plants", name: "Anthurium",
    description: "Waxy red flowers, long lasting blooms.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400",
  },
  {
    id: 6, category: "Tropical Plants", name: "Calathea",
    description: "Stunning patterned leaves, pet-friendly.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1567502640263-3d8f5d2c3d73?w=400",
  },
  // Category 2: Succulents & Cacti
  {
    id: 7, category: "Succulents & Cacti", name: "Aloe Vera",
    description: "Medicinal gel, thrives in bright light.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400",
  },
  {
    id: 8, category: "Succulents & Cacti", name: "Echeveria",
    description: "Rosette-shaped, perfect for small spaces.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400",
  },
  {
    id: 9, category: "Succulents & Cacti", name: "Barrel Cactus",
    description: "Classic round cactus, minimal watering.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400",
  },
  {
    id: 10, category: "Succulents & Cacti", name: "Jade Plant",
    description: "Symbol of good luck, lives for decades.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400",
  },
  {
    id: 11, category: "Succulents & Cacti", name: "Haworthia",
    description: "Zebra-striped succulent, tolerates low light.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400",
  },
  {
    id: 12, category: "Succulents & Cacti", name: "String of Pearls",
    description: "Trailing beads, stunning in hanging baskets.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400",
  },
  // Category 3: Air Purifying Plants
  {
    id: 13, category: "Air Purifying Plants", name: "Snake Plant",
    description: "Nearly indestructible, cleans indoor air.",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1567333971983-7f48f5e2d3dd?w=400",
  },
  {
    id: 14, category: "Air Purifying Plants", name: "Spider Plant",
    description: "Removes toxins, produces cute offshoots.",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400",
  },
  {
    id: 15, category: "Air Purifying Plants", name: "Pothos",
    description: "Golden pothos, beginner-friendly trailing vine.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?w=400",
  },
  {
    id: 16, category: "Air Purifying Plants", name: "Boston Fern",
    description: "Lush fronds, excellent humidity lover.",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=400",
  },
  {
    id: 17, category: "Air Purifying Plants", name: "Rubber Plant",
    description: "Glossy dark leaves, easy care.",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=400",
  },
  {
    id: 18, category: "Air Purifying Plants", name: "Dracaena",
    description: "Tall and striking, removes airborne toxins.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1530968033775-2c92736b131e?w=400",
  },
];

const categories = ["Tropical Plants", "Succulents & Cacti", "Air Purifying Plants"];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [added, setAdded] = useState({});

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAdded((prev) => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div className="product-listing">
      {categories.map((cat) => (
        <div className="category-section" key={cat}>
          <h2>{cat}</h2>
          <div className="plants-grid">
            {plantsData
              .filter((p) => p.category === cat)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="plant-info">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <div className="plant-price">${plant.price}</div>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id) ? "Added to Cart ✓" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
