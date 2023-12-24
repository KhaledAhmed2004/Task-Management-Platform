import { useContext } from "react";
import { PiHandWaving } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //   const from = location?.state?.from?.pathname || "/";
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const toastId = toast.loading("Logging in...");
      const result = await signIn(email, password);
      navigate("/");
      toast.success("Login Successful", { id: toastId });
    } catch (error) {
      toast.error(`Login failed: ${error.message}`);
    }
  };

  const handleGoogleSignUp = async () => {
    const toastId = toast.loading("Logging in with Google...");
    try {
      await signInWithGoogle();
      navigate("/");
      toast.success("Login Successful", { id: toastId });
    } catch (error) {
      toast.error(`Google Sign-In failed: ${error.message}`);
    }
  };

  return (
    <div className="h-screen flex bg-[#F5F7F8] items-center justify-center">
      <div
        style={{
          boxShadow: `
            -2px -2px 8px rgba(255, 255, 255, 1),
            -2px -2px 12px rgba(255, 255, 255, 0.5),
            inset 2px 2px 4px rgba(255, 255, 255, 0.1),
            2px 2px 8px rgba(0, 0, 0, 0.15)
          `,
        }}
        className="rounded-xl px-10 py-12"
      >
        <h2 className="text-3xl font-semibold pb-5 text-center flex items-center justify-center gap-2 mb-5">
          Hi, Welcome back <PiHandWaving />
        </h2>
        <form onSubmit={handleSubmit} className="w-[20.5rem]">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="py-3 transition-all hover:scale-95 ease-in-out duration-200 rounded-xl bg-[#1f3c87] text-white font-semibold text-lg">
              Login
            </button>
          </div>
        </form>
        <div className="divider divider-primary">OR</div>
        <div className="form-control mt-6">
          <button
            onClick={handleGoogleSignUp}
            style={{
              boxShadow: `
                -2px -2px 8px rgba(255, 255, 255, 1),
                -2px -2px 12px rgba(255, 255, 255, 0.5),
                inset 2px 2px 4px rgba(255, 255, 255, 0.1),
                2px 2px 8px rgba(0, 0, 0, 0.15)
              `,
            }}
            className="py-3 transition-all hover:scale-95 ease-in-out duration-200 rounded-xl bg-gray-100 text-black font-semibold text-lg flex items-center justify-center gap-2"
          >
            <FcGoogle />
            Google
          </button>
        </div>
        <div className="flex gap-2 pt-4">
          <h2>Don't have an account?</h2>
          <Link
            to={"/signUp"}
            className="text-blue-600 font-semibold underline underline-offset-2"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
