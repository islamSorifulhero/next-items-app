const PopularItems = () => {
  return (
    <section className="bg-base-200 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Popular Items
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="card bg-base-100 shadow p-6">
          <h3 className="font-bold">Item One</h3>
          <p className="text-gray-500">$25</p>
        </div>

        <div className="card bg-base-100 shadow p-6">
          <h3 className="font-bold">Item Two</h3>
          <p className="text-gray-500">$40</p>
        </div>

        <div className="card bg-base-100 shadow p-6">
          <h3 className="font-bold">Item Three</h3>
          <p className="text-gray-500">$60</p>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
