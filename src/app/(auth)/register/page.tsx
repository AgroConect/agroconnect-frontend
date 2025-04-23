import { Link } from "lucide-react";

export default function Page() {
  return          (<div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6 z-40">
         <h2 className="text-2xl font-bold text-center text-green-700">Create Account 🌱</h2>
    <form className="space-y-4">
  <div>
    <label>Full Name</label>
    <input type="text" className="w-full border rounded p-2 mt-1" placeholder="Jane Doe" />
  </div>
  <div>
    <label>Email</label>
    <input type="email" className="w-full border rounded p-2 mt-1" placeholder="you@example.com" />
  </div>
  <div>
    <label>Password</label>
    <input type="password" className="w-full border rounded p-2 mt-1" placeholder="••••••••" />
  </div>
  <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
    Sign Up
  </button>
  <p className="text-sm text-center">
    Already have an account? <Link href="/login" className="text-green-700 hover:underline">Log in</Link>
  </p>
</form></div>);
}
