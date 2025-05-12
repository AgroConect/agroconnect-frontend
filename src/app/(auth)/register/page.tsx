/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/utils/api";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
const [form, setForm] = useState({
firstName: "",
lastName: "",
email: "",
password: "",
role: "",
street: "",
city: "",
state: "",
postcode: "",
phoneNumber: ""
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
try {
await registerUser(form);
alert("Registration successful! You can now log in.");
router.push("/login");
} catch (err: any) {
alert("Registration failed: " + err.message);
}
};
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
        Create Account 🌱
      </h2>
      <form className="space-y-4"  onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
            name="firstName" value={form.firstName} onChange={handleChange} required 
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="Jane"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
            name="lastName" value={form.lastName} onChange={handleChange} required 
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border rounded p-2 mt-1" placeholder="you@example.com" />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required className="w-full border rounded p-2 mt-1" placeholder="••••••••" />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium">Role</label>
          <select name="role" className="w-full border rounded p-2 mt-1" value={form.role} onChange={handleChange} required>
          <option value="">Select Role</option>
      <option value="CUSTOMER">Customer</option>
      <option value="FARMER">Farmer</option>
      <option value="DELIVERYMAN">Delivery Man</option>
    </select>

        </div>

        {/* Street */}
        <div>
          <label className="block text-sm font-medium">Street</label>
          <input
           name="street" value={form.street} onChange={handleChange} 
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
             name="city" value={form.city} onChange={handleChange}
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="Cityville"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">State</label>
            <input
            name="state" value={form.state} onChange={handleChange}
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
             name="postcode" value={form.postcode} onChange={handleChange} 
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="12345"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
             name="phoneNumber" value={form.phoneNumber} onChange={handleChange}
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="+1234567890"
            />
          </div>
        </div>

        {/* Button */}
        <button  type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
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