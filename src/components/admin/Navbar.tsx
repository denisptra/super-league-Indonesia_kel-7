import Logo2 from "../../assets/Logo-1.png";
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: "Administrator" | "Editor" | "Writer";
  avatar?: string;
}

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    // Coba ambil user dari localStorage dulu (lebih cepat)
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      return;
    }

    // Kalau belum ada di localStorage, fetch dari API
    if (!token) return;

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/users/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Gagal mengambil data user");

        const data: User = await res.json();
        setUser(data);

        // Simpan ke localStorage untuk next session
        localStorage.setItem("user", JSON.stringify(data));
      } catch (err) {
        console.error("Error ambil data user:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-6 py-3">
        {/* LEFT: LOGO */}
        <div className="flex items-center gap-3">
          <img src={Logo2} alt="Logo" className="w-28" />
        </div>

        {/* RIGHT: USER */}
        <div className="flex items-center gap-3">
          <img
            src={
              user?.avatar ||
              "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            }
            alt="User Avatar"
            className="w-9 h-9 rounded-full border border-gray-300 object-cover"
          />
          {user ? (
            <div className="flex flex-col text-right">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {user.name}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {user.role}
              </span>
            </div>
          ) : (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Memuat...
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
