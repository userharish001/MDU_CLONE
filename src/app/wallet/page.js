// components/WalletsPage.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";

const WalletsPage = () => {
  // Sample product data for wallets (this would normally come from an API or state)
  const wallets = [
    { id: 1, name: "Leather Wallet", price: 75, imageUrl: "/wallet1.jpg" },
    { id: 2, name: "Slim Card Wallet", price: 50, imageUrl: "/wallet2.jpg" },
    { id: 3, name: "Bifold Wallet", price: 80, imageUrl: "/wallet3.jpg" },
    { id: 4, name: "Zip Around Wallet", price: 120, imageUrl: "/wallet4.jpg" },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search functionality (you can filter the wallets based on the search term)
  const filteredWallets = wallets.filter((wallet) =>
    wallet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Wallet Collection</h1>

        {/* Search bar */}
        {showSearch ? (
          <div className="relative flex items-center">
            <Input
              type="search"
              placeholder="Search wallets..."
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
        {/* Render the filtered list of wallets */}
        {filteredWallets.length > 0 ? (
          filteredWallets.map((wallet) => (
            <div key={wallet.id} className="border rounded-lg p-4 flex flex-col items-center">
              <img src={wallet.imageUrl} alt={wallet.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="font-semibold text-lg">{wallet.name}</h3>
              <p className="text-sm text-gray-600 mb-4">${wallet.price}</p>
              <Button variant="outline" className="w-full">
                Add to Cart
              </Button>
            </div>
          ))
        ) : (
          <p>No wallets found</p>
        )}
      </div>
    </div>
  );
};

export default WalletsPage; // Default export
