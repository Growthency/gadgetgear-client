"use client";
import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AuthContext } from "@/providers/AuthProvider";

const Register = () => {
  const router = useRouter();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value || "https://i.ibb.co/T8XZps6/user.png";

    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, image).then(() => {
          const userInfo = { name, email, image };
          fetch("https://gadgetgear-server-beta.vercel.app/register", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userInfo),
          });

          toast.success("Registration Successful!");
          window.location.replace("/");
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h1 className="text-4xl font-bold mb-4">Register Now</h1>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="image"
                placeholder="url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p className="mt-2 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-primary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
