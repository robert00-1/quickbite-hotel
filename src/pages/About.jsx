function About() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-red-500 font-semibold uppercase tracking-wider">
          About Us
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          Welcome to QuickBite Hotel
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-3xl mx-auto">
          QuickBite Hotel is a modern dining experience where great food,
          excellent service, and comfortable dining come together. Our goal is
          to make ordering food simple, fast, and enjoyable for every customer.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-900">
              Quality Food
            </h2>
            <p className="text-gray-600 mt-3">
              We provide delicious meals prepared with quality ingredients.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-900">
              Great Service
            </h2>
            <p className="text-gray-600 mt-3">
              Our team is committed to giving you a comfortable dining
              experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-900">
              Easy Ordering
            </h2>
            <p className="text-gray-600 mt-3">
              Browse our menu, select your meal, and place your order easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;