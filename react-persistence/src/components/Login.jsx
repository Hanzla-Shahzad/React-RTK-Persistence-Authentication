import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/mainSlice";
export default function LoginForm() {
  const { token } = useSelector((state) => state.persist);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [inpData, setInpData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ inpData: inpData }));
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      {/* Transparent card */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30">
        <h2 className="text-3xl font-bold text-center text-white drop-shadow-md">
          Welcome Back
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-white"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={inpData.email}
              onChange={(e) =>
                setInpData({ ...inpData, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-gray-900 placeholder-gray-500 bg-white/70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={inpData.password}
              onChange={(e) =>
                setInpData({ ...inpData, password: e.target.value })
              }
              placeholder="••••••••"
              className="w-full px-4 py-2 text-gray-900 placeholder-gray-500 bg-white/70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Extra link */}
        <p className="text-sm text-center text-white/90">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="font-semibold text-yellow-300 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
