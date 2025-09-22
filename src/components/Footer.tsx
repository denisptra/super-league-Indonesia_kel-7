import Logo from '../assets/logo-1.png';

const FooterComponent = () => {
    return (
        <>
            <footer className="text-white py-6 w-full" style={{ backgroundColor: "#0A518C", fontFamily: "Roboto" }}>
                <div className="flex flex-col md:flex-row md:justify-between px-35 gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <img className="w-auto h-12" src={Logo} alt="Logo" />
                        </div>
                        <p className="text-xs max-w-xs">Super League Indonesia adalah Website Sepak bola wajib orang Indonesia</p>
                    </div>
                    <div>
                        <div className="font-semibold mb-3">Media</div>
                        <ul className="text-xs space-y-1">
                            <li className="hover:underline mb-2">Berita</li>
                            <li className="hover:underline mb-2">Rilis</li>
                            <li className="hover:underline mb-2">Foto</li>
                            <li className="hover:underline mb-2">Video</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold mb-3">Unduh</div>
                        <ul className="text-xs space-y-1">
                            <li className="hover:underline mb-2">Regulasi</li>
                            <li className="hover:underline mb-2">Laporan</li>
                            <li className="hover:underline mb-2">Kode Disiplin</li>
                            <li className="hover:underline mb-2">FIFA Laws of The Game</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold mb-3">Liga Indonesia</div>
                        <ul className="text-xs space-y-1">
                            <li className="hover:underline mb-2">Beranda</li>
                            <li className="hover:underline mb-2">Pertandingan</li>
                            <li className="hover:underline mb-2">Table</li>
                            <li className="hover:underline mb-2">Berita</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold mb-3">Kontak</div>
                        <ul className="text-xs space-y-1">
                            <li className="hover:underline mb-2">PT Liga Indonesia Baru</li>
                            <li className="hover:underline mb-2">Menara Mandiri 2, Lt 19</li>
                            <li className="hover:underline mb-2">Jl. Jend. Sudirman, Kav 54-55</li>
                            <li className="hover:underline mb-2">Jakarta 12190</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-sky-700 mt-8 pt-4 text-center text-xs">
                    © 2025 ILeague. All Rights Reserved
                </div>
            </footer>
        </>
    );
};

export default FooterComponent;