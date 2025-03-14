import banner from "../assets/banner1.avif";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-16">
      {/* Heading Image with Overlay */}
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
        <img
          src={banner}
          alt="Contact Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Get in Touch with Chichi Enterprises
          </h1>
        </div>
      </div>

      {/* Paragraph Below Image */}
      <div className="text-start mx-auto space-y-4">
        <p className="text-lg text-gray-600">
          We would love to hear from you! Whether you are an employer looking
          for top talent or a job seeker searching for the perfect opportunity,
          Chichi Enterprises is here to assist you. Our team of dedicated
          professionals is ready to answer your queries and <br /> provide the
          support you need. Contact us today to learn more about our services
          and how we can help you achieve your goals.
        </p>
      </div>

      {/* Contact Details & Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="bg-gray-100 shadow-lg rounded-xl p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              <strong>Office:</strong> New Road, Mingora, Swat
            </p>
            <p>
              <strong>Phone:</strong> <br />
              0092-946729685,
              <br /> 0092-946713083, <br />
              0092-346 9338816,
              <br /> 0092 300 9320418
            </p>
            <p>
              <strong>Email:</strong> chichienterprises@hotmail.com
            </p>
            <p>
              <strong>Business Hours:</strong> <br />
              Mon-Fri: 8:00 AM - 5:00 PM <br />
              Sat: 8:00 AM - 2:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204.8276869001715!2d72.35722011581194!3d34.774657667687066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc22c7d5f82adf%3A0x512eaec8f75d2e21!2sCHICHI%20ENTERPRISES!5e0!3m2!1sen!2s!4v1741972284305!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
