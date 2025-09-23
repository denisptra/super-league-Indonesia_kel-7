import React from "react";

// DEFINISI TIPE YANG DIPERLUKAN
// Mendefinisikan tipe untuk sebuah tim
type Team = {
    name: string;
    logo?: string;
};

// Mendefinisikan tipe untuk data satu pertandingan
type Match = {
    id: number; // Kunci unik untuk mapping
    team_a: Team;
    team_b: Team;
    score_a: number;
    score_b: number;
    date: string;
    status: string;
};

// Definisikan tipe props untuk setiap komponen
type TeamProps = {
    team: Team 
};

type MatchCardProps = {
    match: Match
};

// Komponen kecil untuk menampilkan satu tim
const TeamDisplay = ({ team }: TeamProps) => (
    <div className="flex flex-col items-center justify-start gap-2 text-center w-20">
        <img
            className="w-12 h-12 object-contain"
            src={team.logo || "https://placehold.co/75x75"}
            alt={team.name}
        />
        <span className="text-xs font-semibold text-gray-700 truncate">{team.name}</span>
    </div>
);

// Komponen untuk menampilkan kartu pertandingan
export const MatchCard = ({ match }: MatchCardProps) => {
    const matchTime = new Date(match.date).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
    const matchDate = new Date(match.date).toLocaleDateString("id-ID", { day: "2-digit", month: "short" });
    const matchScore = `${match.score_a} - ${match.score_b}`;

    return (
        <div className="flex min-w-[300px] items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <TeamDisplay team={match.team_a} />
            <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-gray-800">
                    {match.status === "finished" ? matchScore : matchTime}
                </span>
                <span className="text-xs text-gray-400">{matchDate}</span>
            </div>
            <TeamDisplay team={match.team_b} />
        </div>
    );
};

// Komponen untuk skeleton loader
export const SkeletonCard = () => (
    <div className="flex min-w-[300px] animate-pulse items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col items-center gap-2 w-20">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <div className="h-2 w-16 rounded bg-gray-200"></div>
        </div>
        <div className="flex flex-col items-center gap-2">
            <div className="h-4 w-12 rounded bg-gray-200"></div>
            <div className="h-2 w-10 rounded bg-gray-200"></div>
        </div>
        <div className="flex flex-col items-center gap-2 w-20">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <div className="h-2 w-16 rounded bg-gray-200"></div>
        </div>
    </div>
);