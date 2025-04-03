// components/AccessoriesPage.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";

const AccessoriesPage = () => {
  // Sample product data for accessories (this would normally come from an API or state)
  const accessories = [
    { id: 1, name: "Sunglasses", price: 50, imageUrl: "/glass1.jpg" },
    { id: 2, name: "Watch", price: 120, imageUrl: "/watch1.jpg" },
    { id: 3, name: "Leather Belt", price: 45, imageUrl: "/belt.jpg" },
    { id: 4, name: "Hat", price: 30, imageUrl: "/gat2.jpg" },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search functionality (you can filter the accessories based on the search term)
  const filteredAccessories = accessories.filter((accessory) =>
    accessory.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Accessories Collection</h1>

        {/* Search bar */}
        {showSearch ? (
          <div className="relative flex items-center">
            <Input
              type="search"
              placeholder="Search accessories..."
              className="w-[200px] md:w-[300px]"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setShowSearch(false)}>
              <span className="sr-only">Close search</span>
            </Button>
          </div>
        ) : (
          <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
            <span className="sr-only">Search</span>Search
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Render the filtered list of accessories */}
        {filteredAccessories.length > 0 ? (
          filteredAccessories.map((accessory) => (
            <div key={accessory.id} className="border rounded-lg p-4 flex flex-col items-center">
              <img src={accessory.imageUrl} alt={accessory.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="font-semibold text-lg">{accessory.name}</h3>
              <p className="text-sm text-gray-600 mb-4">${accessory.price}</p>
              <Button variant="outline" className="w-full">
                Add to Cart
              </Button>
            </div>
          ))
        ) : (
          <p>No accessories found</p>
        )}
      </div>
    </div>
  );
};

export default AccessoriesPage; // Default export
