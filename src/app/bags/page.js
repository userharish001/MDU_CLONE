// components/BagsPage.tsx
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";

const BagsPage = () => {
  // Sample product data for bags (this would normally come from an API or state)
  const bags = [
    { id: 1, name: "Leather Tote Bag", price: 120, imageUrl: "/bag.jpg" },
    { id: 2, name: "Mini Leather Crossbody", price: 90, imageUrl: "/bag1.jpg" },
    { id: 3, name: "Handcrafted Messenger Bag", price: 150, imageUrl: "/bag3.jpg" },
    { id: 4, name: "Leather Backpack", price: 180, imageUrl: "/bag5.jpg" },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search functionality (you can filter the bags based on the search term)
  const filteredBags = bags.filter((bag) =>
    bag.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Bags Collection</h1>

        {/* Search bar */}
        {showSearch ? (
          <div className="relative flex items-center">
            <Input
              type="search"
              placeholder="Search bags..."
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
        {/* Render the filtered list of bags */}
        {filteredBags.length > 0 ? (
          filteredBags.map((bag) => (
            <div key={bag.id} className="border rounded-lg p-4 flex flex-col items-center">
              <img src={bag.imageUrl} alt={bag.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="font-semibold text-lg">{bag.name}</h3>
              <p className="text-sm text-gray-600 mb-4">${bag.price}</p>
              <Button variant="outline" className="w-full">
                Add to Cart
              </Button>
            </div>
          ))
        ) : (
          <p>No bags found</p>
        )}
      </div>
    </div>
  );
};

export default BagsPage; // Default export
