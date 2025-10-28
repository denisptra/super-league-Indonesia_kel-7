import { useNavigate } from "react-router-dom";

const Unauthorized: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-bold text-rose-600 mb-2">Akses Ditolak 🚫</h1>
        <p className="text-slate-600 mb-6">
          Kamu tidak memiliki izin untuk mengakses halaman ini.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
        >
          Kembali ke Awal
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
