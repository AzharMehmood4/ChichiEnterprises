const About = () => {
  const teamMembers = [
    { name: "John Smith", role: "CEO & Founder" },
    { name: "Emily Johnson", role: "Chief Operating Officer" },
    { name: "Michael Brown", role: "Head of Marketing" },
    { name: "Sarah Davis", role: "Lead Product Designer" },
    { name: "David Wilson", role: "Senior Software Engineer" },
    { name: "Emma Martinez", role: "Business Development Manager" },
    { name: "James Anderson", role: "Customer Success Manager" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* About Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Chichi Enterprises
        </h1>
        <p className="text-gray-600 mb-4">
          Chichi Enterprises is a forward-thinking company dedicated to
          delivering innovative solutions across various industries. Our mission
          is to provide top-quality services and products that enhance
          efficiency, drive growth, and create lasting impact.
        </p>
        <p className="text-gray-600 mb-4">
          Founded on principles of integrity and innovation, Chichi Enterprises
          has grown into a trusted name, known for its commitment to excellence.
          We believe in fostering a work culture that values creativity,
          collaboration, and continuous improvement.
        </p>
        <p className="text-gray-600">
          At Chichi Enterprises, we take pride in our ability to adapt,
          innovate, and lead. From strategic planning to execution, we ensure
          every project meets the highest standards of quality and
          professionalism.
        </p>
      </div>

      {/* Team Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-gray-700">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
