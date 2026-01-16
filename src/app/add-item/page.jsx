"use client";
import { useState } from "react";
import { useProtectedRoute } from "../utils/protect";
import { toast } from "react-toastify";

const AddItemPage = () => {
  useProtectedRoute(); // 🔐 Protect route

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newItem = {
      name: e.target.name.value,
      description: e.target.description.value,
      price: parseFloat(e.target.price.value),
      image: e.target.image.value,
    };

    try {
      const res = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (res.ok) {
        toast.success("Item added successfully!");
        e.target.reset();
      } else {
        toast.error("Failed to add item");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Item</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          className="input input-bordered w-full"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
        />

        <button
          type="submit"
          className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Item"}
        </button>
      </form>
    </div>
  );
};

export default AddItemPage;
