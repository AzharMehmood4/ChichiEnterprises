import heroImage from "../assets/banner1.avif";

const OurServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
        <img
          src={heroImage}
          alt="Services Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Our Services
            {/* Tailored Staffing Solutions for KSA & Beyond */}
          </h1>
        </div>
      </div>

      {/* Services Overview */}
      <div className="text-center sm:text-left max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-start mb-4">
          Tailored Staffing Solutions for KSA & Beyond
        </h2>
        <p className="text-gray-700 text-lg text-start leading-relaxed">
          At Chichi Enterprises, we specialize in the recruitment and placement
          of skilled workers in Saudi Arabia across multiple sectors. Whether
          you are looking for experienced laborers, skilled tradespeople, or
          professional staff, we have the expertise to deliver high-quality
          workers that meet your specific needs.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-5xl mx-auto space-y-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Skilled Labor Recruitment
          </h2>
          <p className="text-gray-600 text-lg">
            We provide workers for industries such as construction,
            manufacturing, hospitality, healthcare, and more.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Talent Acquisition
          </h2>
          <p className="text-gray-600 text-lg">
            Our expert team is dedicated to sourcing and identifying top talent
            to meet the specific requirements of our clients. We ensure that
            every candidate we recommend is thoroughly vetted and qualified.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Consultation Services
          </h2>
          <p className="text-gray-600 text-lg">
            We provide professional consultation services to employers and job
            seekers, offering valuable insights and guidance to help them make
            informed decisions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Visa Processing & Documentation
          </h2>
          <p className="text-gray-600 text-lg">
            With our vast knowledge of KSA regulations, we ensure smooth
            processing of all necessary visa and work permits.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            License Verification
          </h2>
          <p className="text-gray-600 text-lg">
            We proudly display our genuine license, issued in 2007, to assure
            our clients and candidates of our credibility and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
