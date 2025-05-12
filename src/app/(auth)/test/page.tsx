"use client"
import { useEffect } from "react";
import api from "@/utils/api";

export default function ApiTest() {
  useEffect(() => {
    const testLogin = async () => {
      try {
        const res = await api.post("/api/auth/login", {
          email: "prime@senpai.com",
          password: "secure12345",
        });
        console.log("Login success:", res.data);
      } catch (err) {
        console.error("Login failed:", err);
      }
    };

    testLogin();
  }, []);

  return <div>Check your console for API result</div>;
}
