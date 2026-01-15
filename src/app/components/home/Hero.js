const Hero = () => {
  return (
    <section className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">
            Discover Amazing Products
          </h1>
          <p className="py-6 text-gray-500">
            Browse items, view details and manage products easily using our
            modern Next.js application.
          </p>
          <a href="/items" className="btn btn-primary">
            Explore Items
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
