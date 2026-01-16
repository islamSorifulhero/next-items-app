"use client";
import Link from "next/link";

// Example: 6 featured items (you can pick from your 10 item JSON)
const featuredItems = [
  {
    "id": 1,
    "name": "Eco Water Bottle",
    "description": "Reusable eco-friendly water bottle made from BPA-free materials.",
    "price": 15,
    "image": "https://i.ibb.co.com/spg9KyGQ/eco.jpg"
  },
  {
    "id": 2,
    "name": "Wireless Mouse Pro",
    "description": "High precision wireless mouse suitable for office and gaming use.",
    "price": 35,
    "image": "https://i.ibb.co.com/jZ91RKD0/mouse.jpg"
  },
  {
    "id": 3,
    "name": "Smart LED Lamp",
    "description": "Energy-efficient smart LED lamp with adjustable brightness.",
    "price": 28,
    "image": "https://i.ibb.co.com/FPfwd9Q/led.jpg"
  },
  {
    "id": 4,
    "name": "Minimal Desk Organizer",
    "description": "Modern desk organizer to keep your workspace clean and tidy.",
    "price": 22,
    "image": "https://i.ibb.co.com/8n4FMvwP/desk.jpg"
  },
  {
    "id": 5,
    "name": "Noise Cancelling Headphones",
    "description": "Over-ear headphones with active noise cancellation feature.",
    "price": 120,
    "image": "https://i.ibb.co.com/0VzVcxZ2/noise.jpg"
  },
  {
    "id": 6,
    "name": "Portable Power Bank",
    "description": "10000mAh fast-charging portable power bank for daily use.",
    "price": 45,
    "image": "https://i.ibb.co.com/Fkhch04w/power.jpg"
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-center mb-16">
          <motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-base-content uppercase tracking-tighter"
          >
            Features <span className="text-primary">items</span>
          </motion>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Check out some of our popular items. Click "All Items" to explore the full collection.
          </p>
        </div>

        {/* Item Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 shadow hover:shadow-lg transition-all duration-300"
            >
              <figure>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover rounded-t-2xl"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-base-content/70 line-clamp-2">
                  {item.description}
                </p>
                <p className="font-bold text-lg mt-2">${item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* All Items Button */}
        <div className="text-center mt-10">
          <Link
            href="/items"
            className="btn btn-primary btn-lg"
          >
            All Items
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
