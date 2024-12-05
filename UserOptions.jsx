// components/UserOptions.jsx
import React from "react";

const UserOptionCard = ({ title, description, link }) => (
  <div className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg text-center transform hover:scale-105 transition duration-300">
    <h5 className="text-xl font-semibold">{title}</h5>
    <p className="text-gray-600 mt-2">{description}</p>
    <a
      href={link}
      className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
    >
      Go to {title} Portal
    </a>
  </div>
);

const UserOptions = () => {
  const options = [
    { title: "Applicant", description: "Looking for a job? Apply now and track your application status.", link: "login.html" },
    { title: "HR", description: "Manage applications, forward or reject, and send offers to applicants.", link: "login.html" },
    { title: "Manager", description: "Schedule interviews and make final decisions on applicants.", link: "login.html" },
    { title: "Interviewer", description: "Conduct interviews and provide feedback for each applicant.", link: "login.html" },
  ];

  return (
    <section className="container mx-auto my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Select Your Role</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {options.map((option, index) => (
          <UserOptionCard
            key={index}
            title={option.title}
            description={option.description}
            link={option.link}
          />
        ))}
      </div>
    </section>
  );
};

export default UserOptions;
