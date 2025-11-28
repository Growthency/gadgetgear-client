"use client";
import toast from "react-hot-toast";

const ContactPage = () => {
  const handleContact = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-base-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-base-100 shadow-xl border border-base-200 rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <form onSubmit={handleContact} className="space-y-4">
          <div className="form-control">
            <label className="label">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Message</label>
            <textarea
              className="textarea textarea-bordered h-32"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button className="btn btn-primary w-full mt-4">Send Message</button>
        </form>

        <div className="divider my-8">OR</div>

        <div className="text-center space-y-2">
          <p className="font-semibold">
            📍 Address: 123 Tech Street, Dhaka, Bangladesh
          </p>
          <p className="font-semibold">📧 Email: support@gadgetgear.com</p>
          <p className="font-semibold">📞 Phone: +880 1234 567 890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
