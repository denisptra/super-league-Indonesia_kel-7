import { Link, useLocation, useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  role: "Administrator" | "Editor" | "Writer";
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const basePath = "/dashboard";

  // Ambil data user dari localStorage
  const storedUser = localStorage.getItem("user");
  const user: User | null = storedUser ? JSON.parse(storedUser) : null;
  const role = user?.role;

  // Menu utama (akan difilter sesuai role)
  const menuItems = [
    { name: "Dashboard", path: `${basePath}`, icon: "📊", roles: ["Administrator"] },
    { name: "Users", path: `${basePath}/users`, icon: "👥", roles: ["Administrator"] },
    { name: "Teams", path: `${basePath}/teams`, icon: "⚽", roles: ["Administrator"] },
    { name: "Matches", path: `${basePath}/matches`, icon: "🏆", roles: ["Administrator", "Editor"] },
    { name: "News", path: `${basePath}/news`, icon: "📰", roles: ["Administrator", "Editor", "Writer"] },
    { name: "Statistik", path: `${basePath}/statistics`, icon: "📈", roles: ["Administrator", "Editor"] },
  ];

  // Filter menu sesuai role user
  const filteredMenu = menuItems.filter((item) => item.roles.includes(role || ""));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 pt-20 shadow-sm">
      <nav className="px-4 space-y-2">
        {filteredMenu.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
                active ? "bg-blue-100 text-blue-600 dark:bg-gray-700" : ""
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}

        {/* Garis Pemisah */}
        <hr className="my-4 border-gray-200 dark:border-gray-700" />

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-md text-red-600 hover:bg-red-50 dark:hover:bg-gray-700 transition mt-6"
        >
          <span className="text-lg">🚪</span>
          <span className="font-medium">Logout</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
