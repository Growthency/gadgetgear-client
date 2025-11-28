"use client";
import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AuthContext } from "@/providers/AuthProvider";

const Login = () => {
  const router = useRouter();
  const { signIn, googleLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        toast.success("Login Successful!");
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogle = () => {
    googleLogin().then(() => {
      toast.success("Google Login Successful!");
      router.push("/");
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h1 className="text-4xl font-bold mb-4">Login Now</h1>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="divider">OR</div>
            <button
              type="button"
              onClick={handleGoogle}
              className="btn btn-outline"
            >
              Google Login
            </button>
            <p className="mt-2 text-center">
              New here?{" "}
              <Link href="/register" className="text-primary">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
