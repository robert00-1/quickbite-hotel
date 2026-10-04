function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-red-500 font-semibold uppercase tracking-wider">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            We'd Love to Hear From You
          </h1>

          <p className="text-gray-600 text-lg mt-5">
            Have a question or need assistance? Get in touch with the
            QuickBite Hotel team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-bold text-gray-900">
              Phone
            </h2>
            <p className="text-gray-600 mt-3">
              +254 700 000 000
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-bold text-gray-900">
              Email
            </h2>
            <p className="text-gray-600 mt-3">
              info@quickbitehotel.com
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-bold text-gray-900">
              Location
            </h2>
            <p className="text-gray-600 mt-3">
              Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;