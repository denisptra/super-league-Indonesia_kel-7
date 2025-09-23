import React, { useEffect, useState, useRef } from "react";

// Tipe data untuk API
type Team = {
    name: string;
    logo?: string;
};

type Match = {
    id: number;
    team_a: Team;
    team_b: Team;
    score_a: number;
    score_b: number;
    date: string;
    status: string;
    location: string;
};

const CardComponent = () => {
    // 1. State untuk menyimpan data pertandingan dan status loading
    const [matches, setMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // 2. useEffect untuk mengambil data dari API saat komponen pertama kali muncul
    useEffect(() => {
        fetch("http://localhost:3000/api/matches")
            .then((response) => response.json())
            .then((apiResponse) => {
                // Ambil data array dari dalam properti 'data'
                setMatches(apiResponse.data);
            })
            .catch((error) => {
                console.error("Gagal mengambil data:", error);
                setMatches([]); // Jika error, pastikan data adalah array kosong
            })
            .finally(() => {
                setLoading(false); // Apapun hasilnya, loading selesai
            });
    }, []); // Array kosong berarti useEffect hanya berjalan sekali

    // 3. Fungsi untuk menggeser daftar kartu
    const handleScroll = (scrollOffset: number) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };

    // 4. JSX (Tampilan Komponen)
    return (
        <div className="w-full p-4 bg-white rounded-xl shadow-md">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-medium text-gray-600">Pertandingan</h2>
                <a href="#" className="text-sm text-blue-600 hover:underline">Semua Pertandingan</a>
            </div>

            {/* Konten Utama (Slider) */}
            <div className="flex items-center gap-2">
                {/* Tombol Kiri */}
                <button onClick={() => handleScroll(-320)} className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>

                {/* Daftar Kartu Pertandingan */}
                <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto scrollbar-hide">
                    {/* Logika Tampilan: Loading -> Data Kosong -> Tampilkan Data */}
                    {loading ? (
                        <p className="w-full text-center text-gray-500">Memuat data...</p>
                    ) : matches.length === 0 ? (
                        <p className="w-full text-center text-gray-500">Tidak ada data pertandingan.</p>
                    ) : (
                        matches.map((match) => (
                            // Desain untuk satu kartu pertandingan
                            <div key={match.id} className="flex min-w-[300px] items-center justify-between gap-4 rounded-lg border-b-gray-500 p-4 shadow-sm">
                                {/* Tim A */}
                                <div className="flex flex-col items-center gap-2 text-center w-20">
                                    <img src={match.team_a.logo || "https://placehold.co/75x75"} alt={match.team_a.name} className="w-12 h-12 object-contain" />
                                    <span className="text-xs font-semibold text-gray-700">{match.team_a.name}</span>
                                </div>
                                {/* Info Skor/Waktu */}
                                <div className="flex flex-col items-center">
                                    <span className="text-xl font-bold text-gray-800">
                                        {match.status === 'finished'
                                            ? `${match.score_a} - ${match.score_b}`
                                            : new Date(match.date).toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {new Date(match.date).toLocaleDateString("id-ID", { day: '2-digit', month: 'short' })}
                                    </span>
                                </div>
                                {/* Tim B */}
                                <div className="flex flex-col items-center gap-2 text-center w-20">
                                    <img src={match.team_b.logo || "https://placehold.co/75x75"} alt={match.team_b.name} className="w-12 h-12 object-contain" />
                                    <span className="text-xs font-semibold text-gray-700">{match.team_b.name}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Tombol Kanan */}
                <button onClick={() => handleScroll(320)} className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
};

export default CardComponent;