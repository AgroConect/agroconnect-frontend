import Link from "next/link";

export default function Page() {
  return          <div>
         <h2 className="text-2xl font-bold text-center text-green-700">Welcome Back 👋</h2>
    
    <form className="space-y-4">
  <div>
    <label>Email</label>
    <input type="email" className="w-full border rounded p-2 mt-1" placeholder="you@example.com" />
  </div>
  <div>
    <label>Password</label>
    <input type="password" className="w-full border rounded p-2 mt-1" placeholder="••••••••" />
  </div>
  <div className="flex justify-between items-center text-sm">
    <Link href="/forgot-password" className="text-green-700 hover:underline">
      Forgot password?
    </Link>
  </div>
  <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
    Login
  </button>
  <p className="text-sm text-center">
    Don’t have an account? <Link href="/register" className="text-green-700 hover:underline">Sign up</Link>
  </p>
</form></div>;
}
