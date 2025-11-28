import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-100">

      <div className="hero h-64 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">
              We are passionate about bringing the best tech gadgets to your
              doorstep.
            </p>
          </div>
        </div>
      </div>


      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Team"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At GadgetGear, our mission is to simplify technology for everyone.
              We carefully curate the latest and most reliable gadgets to
              enhance your lifestyle.
            </p>
            <p className="text-gray-600">
              Whether you are a tech enthusiast or just looking for an upgrade,
              we have something for everyone. Quality and customer satisfaction
              are our top priorities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
