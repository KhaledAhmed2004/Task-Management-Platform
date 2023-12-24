// import { MdEditDocument } from "react-icons/md";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import toast from "react-hot-toast";
// import imageUp from "../hooks/imageUp";
// const Registration = () => {
//   const navigate = useNavigate();
//   const axios = useAxiosSecure();
//   const { createUser, updateUserProfile, signInWithGoogle } =
//     useContext(AuthContext);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const toastId = toast.loading("Registration in progress");
//     const form = event.target;
//     const password = form.password.value;
//     if (password.length < 6) {
//       toast.error("Password must be at least 6 characters", { id: toastId });
//     } else if (!/[a-z]/.test(password)) {
//       toast.error("Password must contain at least one lowercase letter", {
//         id: toastId,
//       });
//     } else if (!/[A-Z]/.test(password)) {
//       toast.error("Password must contain at least one uppercase letter", {
//         id: toastId,
//       });
//     } else if (!/\d/.test(password)) {
//       toast.error("Password must contain at least one digit", { id: toastId });
//     } else if (!/[\W_]/.test(password)) {
//       toast.error("Password must contain at least one special character", {
//         id: toastId,
//       });
//     } else {
//       const userName = form.userName.value;
//       const email = form.email.value;
//       const profilePicture = form.profilePicture.files[0];

//       try {
//         const imageData = await imageUp(profilePicture);
//         console.log(imageData);
//         const result = await createUser(email, password);

//         await updateUserProfile(userName, imageData?.data?.display_url);
//         navigate("/");
//         toast.success("Registration Successful", { id: toastId });
//       } catch (error) {
//         toast.error(`Registration failed: ${error.code}`, { id: toastId });
//       }
//     }
//   };

//   const handleGoogleSignUp = async () => {
//     const toastId = toast.loading("Registration in progress");
//     try {
//       const { user } = await signInWithGoogle();

//       navigate("/");
//       toast.success("Registration Successful", { id: toastId });
//     } catch (error) {
//       toast.error(`Registration failed: ${error.code}`, { id: toastId });
//     }
//   };

import { useContext } from "react";
import { MdEditDocument } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import imageUp from "../hooks/imageUp";

const Registration = () => {
  const navigate = useNavigate();
  const axios = useAxiosSecure();
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Registration in progress");
    const form = event.target;
    const password = form.password.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters", { id: toastId });
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter", {
        id: toastId,
      });
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter", {
        id: toastId,
      });
    } else if (!/\d/.test(password)) {
      toast.error("Password must contain at least one digit", { id: toastId });
    } else if (!/[\W_]/.test(password)) {
      toast.error("Password must contain at least one special character", {
        id: toastId,
      });
    } else {
      const userName = form.userName.value;
      const email = form.email.value;
      const profilePicture = form.profilePicture.files[0];

      try {
        const imageData = await imageUp(profilePicture);
        const result = await createUser(email, password);
        await updateUserProfile(userName, imageData?.data?.display_url);
        navigate("/");
        toast.success("Registration Successful", { id: toastId });
      } catch (error) {
        toast.error(`Registration failed: ${error.message}`, { id: toastId });
      }
    }
  };

  const handleGoogleSignUp = async () => {
    const toastId = toast.loading("Registration in progress");
    try {
      const { user } = await signInWithGoogle();
      navigate("/");
      toast.success("Registration Successful", { id: toastId });
    } catch (error) {
      toast.error(`Registration failed: ${error.message}`, { id: toastId });
    }
  };

  return (
    <div className="p-10 flex bg-[#F5F7F8] items-center justify-center">
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
          Register <MdEditDocument />
        </h2>
        <form onSubmit={handleSubmit} className="w-[20.5rem]">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="userName"
              placeholder="user name"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">Profile Url</span>
            </label>
            <input type="file" name="profilePicture" required />
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
            <button className="py-3 transition-all hover:scale-95 ease-in-out duration-200 rounded-xl bg-gray-800 text-white font-semibold text-lg">
              Register
            </button>
          </div>
        </form>
        <div className="divider py-3">OR</div>
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
          <h2>Do you have an account?</h2>
          <Link
            to={"/login"}
            className="text-blue-600 font-semibold underline underline-offset-2"
          >
            login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
