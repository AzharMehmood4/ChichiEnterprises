import logo from "../assets/Logo.png";
import heroImage from "../assets/banner1.avif"; // Add your heading image

const About = () => {
  const teamMembers = [
    { name: "Muhammad Karim", role: "CEO", image: logo },
    { name: "Muhammad Farooq", role: "Managing Director", image: logo },
    { name: "Muhammad Fayyaz", role: "Managing Partner", image: logo },
    { name: "Muhammad Hanif", role: "Sales Specialist", image: logo },
    { name: "Salman Ghaffer", role: "Finance Specialist", image: logo },
    { name: "Muhammad Sohaib", role: "Chief Technology Officer", image: logo },
    { name: "Muhammad Junaid", role: "Marketing Specialist", image: logo },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
      {/* Hero Section */}
      <div
        className="relative text-white text-center py-20 sm:py-28 rounded-lg mb-16 bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <h1 className="relative text-4xl sm:text-5xl font-bold z-10">
          About Chichi Enterprises
        </h1>
      </div>

      {/* About Text */}
      <div className="text-center sm:text-left max-w-5xl mx-auto mb-16">
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Founded in 2007, Chichi Enterprises is a leading recruitment agency
          specializing in providing top-tier manpower to the Kingdom of Saudi
          Arabia (KSA). With over a decade of experience in the industry, we
          have earned a reputation for delivering reliable, skilled, and
          hardworking professionals to meet the growing demands of diverse
          sectors.
        </p>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Our agency is licensed under the name of our Managing Director,
          Muhammad Farooq, ensuring that we operate with transparency,
          professionalism, and compliance. We pride ourselves on our commitment
          to both our clients and workers, building long-term partnerships based
          on trust and mutual respect.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          At the helm of our company is Muhammad Karim, our CEO, whose visionary
          leadership and deep understanding of the manpower industry have been
          pivotal to our success. Our dedicated team also includes experienced
          professionals across various fields:
        </p>
      </div>

      {/* Team Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mb-5"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600 text-base">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          We offer a comprehensive range of services and are ready to serve
          clients in various industries with customized staffing solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
