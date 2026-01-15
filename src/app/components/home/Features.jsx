const Features = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="card-title">Fast Performance</h3>
            <p>Optimized using Next.js App Router.</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="card-title">Secure Login</h3>
            <p>Cookie-based authentication system.</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="card-title">Modern UI</h3>
            <p>Tailwind CSS & DaisyUI powered design.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
