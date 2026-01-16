"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ItemDetailsPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`https://backend-navy-five-38.vercel.app/api/items/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Item not found");
                return res.json();
            })
            .then((data) => setItem(data))
            .catch(() => setError(true));
    }, [id]);

    if (error) {
        return <p className="p-10 text-center text-red-500">Item not found</p>;
    }

    if (!item) {
        return (
            <div className="min-h-[60vh] flex justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="p-10 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mt-8 mb-2">{item.name}</h1>
            <img
                className="h-100 w-full object-cover py-4 rounded-3xl"
                src={item.image}
                alt={item.name}
            />
            <p className="mb-2 text-lg">{item.description}</p>
            <p className="font-bold text-xl">${item.price}</p>
        </div>
    );
};

export default ItemDetailsPage;
