"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const ItemsPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Items List</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow">
            <figure>
              <img className="h-40 w-full object-cover pt-4 px-4 rounded-3xl" src={item.image} alt={item.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.description}</p>
              <p className="font-bold">${item.price}</p>
              <Link
                href={`/items/${item.id}`}
                className="btn btn-primary mt-2"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
