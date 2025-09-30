import React from 'react';

const News = () => {
  return (
    <>
      <div className="w-full max-w-[1340px] h-auto bg-white rounded-2xl shadow-lg flex flex-wrap lg:flex-nowrap justify-center gap-7 p-5 mx-auto">

        {/* Kolom Berita Utama (Kiri) */}
        <div className="w-full lg:w-[620px] flex flex-col gap-6">
          {/* Gambar Utama: height 96 = 24rem */}
          <img
            className="w-full h-96 rounded-lg object-cover"
            src="https://placehold.co/600x370"
            alt="Berita Utama"
          />

          {/* Detail Berita Utama */}
          <div className="flex flex-col gap-3.5">
            {/* Judul: Dibuat lebih jelas, menggunakan text-neutral-800 */}
            <h2 className="text-neutral-800 text-2xl font-bold font-['Roboto'] leading-9">
              Real Madrid Explore Vinicius Junior Swap Liverpool’s Final Konate Offer
            </h2>
            {/* Waktu/Sumber */}
            <p className="text-neutral-500 text-base font-medium font-['Roboto']">
              SI . 1 jam Lalu
            </p>
          </div>
        </div>

        {/* Kolom Daftar Berita Populer (Kanan) */}
        <div className="w-full lg:w-[670px] flex flex-col pt-2.5">
          <h3 className="text-neutral-800 text-xl font-bold mb-4">Berita Populer</h3>

          {/* Item Berita Populer (Ulangi 4 kali) */}
          {[1, 2, 3, 4].map((number, index) => (
            <div
              key={number}
              className={`flex items-start gap-5 py-3 ${index < 3 ? 'border-b border-gray-200' : ''}`}
            >
              {/* Nomor Urut */}
              <div className="w-9 h-9 bg-sky-800 rounded-full flex-shrink-0 flex justify-center items-center">
                <span className="text-white text-xl font-medium">{number}</span>
              </div>

              {/* Teks Konten */}
              <div className="flex-grow flex flex-col justify-start gap-2.5">
                <p className="text-neutral-800 text-lg font-medium leading-normal">
                  Real Madrid Explore Vinicius Junior Swap Liverpool’s Final Konate Offer
                </p>
                <p className="text-neutral-500 text-sm font-medium">
                  SI . 1 jam Lalu
                </p>
              </div>

              {/* Gambar Mini */}
              <img
                className="w-20 h-20 rounded-lg flex-shrink-0 object-cover"
                src="https://placehold.co/85x85"
                alt={`Berita Populer ${number}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1340px] h-auto bg-white rounded-2xl shadow-lg flex flex-wrap lg:flex-nowrap justify-center gap-7 p-5 mx-auto my-5">

        {/* Kolom Daftar Berita Populer (Kanan) */}
        <div className="w-full lg:w-[670px] flex flex-col pt-2.5">
          <h3 className="text-neutral-800 text-xl font-bold mb-4">Berita Populer</h3>

          {/* Item Berita Populer (Ulangi 4 kali) */}
          {[1, 2, 3, 4].map((number, index) => (
            <div
              key={number}
              className={`flex items-start gap-5 py-3 ${index < 3 ? 'border-b border-gray-200' : ''}`}
            >
              {/* Nomor Urut */}
              <div className="w-9 h-9 bg-sky-800 rounded-full flex-shrink-0 flex justify-center items-center">
                <span className="text-white text-xl font-medium">{number}</span>
              </div>

              {/* Teks Konten */}
              <div className="flex-grow flex flex-col justify-start gap-2.5">
                <p className="text-neutral-800 text-lg font-medium leading-normal">
                  Real Madrid Explore Vinicius Junior Swap Liverpool’s Final Konate Offer
                </p>
                <p className="text-neutral-500 text-sm font-medium">
                  SI . 1 jam Lalu
                </p>
              </div>

              {/* Gambar Mini */}
              <img
                className="w-20 h-20 rounded-lg flex-shrink-0 object-cover"
                src="https://placehold.co/85x85"
                alt={`Berita Populer ${number}`}
              />
            </div>
          ))}
        </div>
        {/* Kolom Berita Utama (Kiri) */}
        <div className="w-full lg:w-[620px] flex flex-col gap-6">
          {/* Gambar Utama: height 96 = 24rem */}
          <img
            className="w-full h-96 rounded-lg object-cover"
            src="https://placehold.co/600x370"
            alt="Berita Utama"
          />

          {/* Detail Berita Utama */}
          <div className="flex flex-col gap-3.5">
            {/* Judul: Dibuat lebih jelas, menggunakan text-neutral-800 */}
            <h2 className="text-neutral-800 text-2xl font-bold font-['Roboto'] leading-9">
              Real Madrid Explore Vinicius Junior Swap Liverpool’s Final Konate Offer
            </h2>
            {/* Waktu/Sumber */}
            <p className="text-neutral-500 text-base font-medium font-['Roboto']">
              SI . 1 jam Lalu
            </p>
          </div>
        </div>


      </div>
    </>
  );
};

export default News;