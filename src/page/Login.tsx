import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo2 from "../assets/Logo-2.svg";

interface LoginResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: "Administrator" | "Editor" | "Writer";
  };
  message?: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email dan password wajib diisi!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data: LoginResponse = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login gagal");
      }

      // Simpan token & user info di localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect sesuai role
      if (data.user.role === "Administrator") {
        navigate("/dashboard");
      } else if (data.user.role === "Editor") {
        navigate("/dashboard/news");
      } else if (data.user.role === "Writer") {
        navigate("/dashboard/statistics");
      } else {
        alert("Role tidak dikenali!");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan tidak terduga.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-sky-50 px-4 shadow">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-6 flex flex-col items-center">
          <img
            src={Logo2}
            alt="Logo"
            className="mb-4 h-16 w-16"
          />

          <h1 className="text-2xl font-semibold text-gray-700">
            Masuk ke Akun Anda
          </h1>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-rose-50 px-4 py-2 text-sm text-rose-600 border border-rose-200">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Masukkan Email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className={`w-full rounded-xl bg-sky-600 px-4 py-2 text-white font-medium hover:bg-sky-700 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
