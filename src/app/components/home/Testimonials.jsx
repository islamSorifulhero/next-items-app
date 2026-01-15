const Testimonials = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Users Say
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="card bg-base-100 shadow p-6">
          <p>"Very clean and easy to use application."</p>
          <span className="font-bold mt-2 block">— Alex</span>
        </div>

        <div className="card bg-base-100 shadow p-6">
          <p>"Authentication and item management works perfectly."</p>
          <span className="font-bold mt-2 block">— John</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
