// components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center text-white py-20 text-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?office')",
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">Welcome to Our Recruitment Portal</h1>
        <p className="text-lg mt-4">
          Streamline your journey to finding the perfect job or applicant.
        </p>
        <a
          href="login.html"
          className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
