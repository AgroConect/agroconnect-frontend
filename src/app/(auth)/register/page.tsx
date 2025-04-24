import { Link } from "lucide-react";

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
        Create Account 🌱
      </h2>
      <form className="space-y-4">
        {/* Full Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="Jane"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded p-2 mt-1"
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded p-2 mt-1"
            placeholder="••••••••"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium">Role</label>
          <select className="w-full border rounded p-2 mt-1">
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
            <option value="farmer">Farmer</option>
            <option value="deliveryman">Delivery Man</option>
          </select>
        </div>

        {/* Street */}
        <div>
          <label className="block text-sm font-medium">Street</label>
          <input
            type="text"
            className="w-full border rounded p-2 mt-1"
            placeholder="123 Main St"
          />
        </div>

        {/* City and State */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="Cityville"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">State</label>
            <input
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="California"
            />
          </div>
        </div>

        {/* Postcode and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Postcode</label>
            <input
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="12345"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="+1234567890"
            />
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Sign Up
        </button>

        {/* Footer Link */}
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-green-700 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}