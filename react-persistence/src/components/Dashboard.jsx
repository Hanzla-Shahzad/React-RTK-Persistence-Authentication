import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/mainSlice";

export default function Dashboard() {
  const { token } = useSelector((state) => state.persist);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-10 text-center space-y-6">
        {/* Greeting */}
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
          👋 Welcome
        </h1>
        <p className="text-lg text-white/90">
          You’re now logged in. Here’s your personal dashboard.
        </p>

        {/* Stats / Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-white/30 rounded-2xl shadow-md hover:scale-105 transition">
            <h2 className="text-xl font-bold text-white">🛒 Cart</h2>
            <p className="text-white/80">Check your shopping cart items</p>
          </div>
          <div className="p-6 bg-white/30 rounded-2xl shadow-md hover:scale-105 transition">
            <h2 className="text-xl font-bold text-white">📦 Orders</h2>
            <p className="text-white/80">View your past orders easily</p>
          </div>
          <div className="p-6 bg-white/30 rounded-2xl shadow-md hover:scale-105 transition">
            <h2 className="text-xl font-bold text-white">⚙️ Settings</h2>
            <p className="text-white/80">Update your profile & preferences</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          className="mt-8 px-6 py-3 bg-red-600 text-white rounded-full font-semibold shadow-lg hover:bg-red-700 transition"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
