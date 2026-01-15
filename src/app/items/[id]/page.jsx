"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ItemDetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/items/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  if (!item) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
      <img src={item.image} alt={item.name} className="mb-4" />
      <p className="mb-2">{item.description}</p>
      <p className="font-bold text-xl">${item.price}</p>
    </div>
  );
};

export default ItemDetailsPage;
