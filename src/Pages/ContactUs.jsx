import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import banner from "../assets/banner1.avif";

const ContactUs = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) {
      console.error("Form reference is null");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_domt0kh",
        "template_cax5fkt",
        form.current,
        "ls8hVvyU9nLGnUpB3"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email sending failed!", error);
          toast.error("Failed to send message. Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16">
      <Toaster position="top-center" reverseOrder={false} />
      {/* UI remains unchanged */}
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

      <div className="text-start mx-auto space-y-4">
        <p className="text-lg text-gray-600 leading-relaxed">
          We would love to hear from you! Whether you're an employer looking for
          top talent or a job seeker searching for opportunities, Chichi
          Enterprises is here to assist. Contact us today to learn more about
          our services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-100 shadow-lg rounded-xl p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              <strong>Office:</strong>
              <br /> Chichi Tower, Opposite Nawab city Tower, New Road, Mingora,
              Swat
            </p>
            <p>
              <strong>Phone:</strong>
              <br /> 0092-946729685, <br />
              0092-946713083, <br />
              0092-346 9338816, <br />
              0092-300 9320418
            </p>
            <p>
              <strong>Email:</strong> <br />
              chichienterprises@hotmail.com
            </p>
            <p>
              <strong>Business Hours:</strong> <br />
              Mon-Fri: 9:00 AM - 5:00 PM <br />
              Sat: 9:00 AM - 2:00 PM
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

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
