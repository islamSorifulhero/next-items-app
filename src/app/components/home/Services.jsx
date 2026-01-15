const Services = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="card bg-base-100 shadow p-6 text-center">
          Item Listing
        </div>
        <div className="card bg-base-100 shadow p-6 text-center">
          Product Details
        </div>
        <div className="card bg-base-100 shadow p-6 text-center">
          Secure Access
        </div>
        <div className="card bg-base-100 shadow p-6 text-center">
          Admin Control
        </div>
      </div>
    </section>
  );
};

export default Services;
