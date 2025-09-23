import CardComponent from "../components/Card";

function HomePage() {
    return (
        <>
            <div className="px-30">
                <CardComponent />
            </div>
            <h1>Ini adalah Halaman Utama</h1>
            <p>Konten ini akan ditampilkan di dalam layout.</p>
        </>
    );
}

// 5. Ekspor komponen HomePage
export default HomePage;