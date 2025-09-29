
function HomePage() {
    const endPoint = fetch('https://localhost:3000/api/users');

    async function hitAPI() {
        const api = await endPoint;
        const { data } = await api.json();
        console.log(data);
    }

    hitAPI();
    return (
        <>
            <div className="self-stretch inline-flex justify-between items-start">
                <div className="w-80 h-[877px] bg-white rounded-2xl shadow-[1px_1px_5px_1px_rgba(0,0,0,0.05)] inline-flex flex-col justify-start items-start gap-[5px]">
                    <div className="self-stretch h-12 px-5 py-3.5 bg-cyan-700 rounded-tl-2xl rounded-tr-2xl inline-flex justify-start items-center gap-2.5">
                        <div className="justify-center text-white text-base font-medium font-['Roboto']">Liga teratas</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Persija Jakarta</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Borneo Samarinda</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Arema Malang</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">PSIM Yogyakarta</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Persebaya Surabaya</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Bali United FC</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Malut United</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Persijap Jepara</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Persib Bandung</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Bhayangkara FC</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Madura United</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Persis Solo</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Persik Kediri</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Semen Padang</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">PSM Makasar</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Dewa United FC</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">PSBS Biak Numfor</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-10 px-7 inline-flex justify-start items-center gap-2.5">
                        <img className="w-7 h-7" src="https://placehold.co/30x30" />
                        <div className="w-64 h-7 justify-center text-zinc-600 text-sm font-medium font-['Roboto']">Persita Tanggerang</div>
                    </div>
                </div>
                <div className="h-[672px] inline-flex flex-col justify-start items-center gap-3.5">
                    <div className="w-[660px] h-96 bg-white rounded-2xl shadow-[1px_1px_5px_1px_rgba(0,0,0,0.05)] flex flex-col justify-start items-center gap-2.5">
                        <div className="self-stretch h-12 px-5 py-3.5 bg-cyan-700 rounded-tl-2xl rounded-tr-2xl inline-flex justify-between items-center">
                            <div data-property-1="Default" className="w-7 p-2.5 bg-neutral-400 rounded-[100px] flex justify-center items-center gap-2.5">
                                <div className="w-1.5 h-2.5 outline outline-2 outline-offset-[-1px] outline-white" />
                            </div>
                            <div className="justify-center text-neutral-50 text-base font-medium font-['Roboto']">Hari Ini</div>
                            <div data-property-1="Default" className="w-7 p-2.5 origin-top-left rotate-180 bg-neutral-400 rounded-[100px] flex justify-center items-center gap-2.5">
                                <div className="w-1.5 h-2.5 outline outline-2 outline-offset-[-1px] outline-white" />
                            </div>
                        </div>
                        <div data-property-1="Default" className="self-stretch h-12 inline-flex justify-center items-center gap-8">
                            <div className="w-60 flex justify-end items-center gap-1.5">
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persija Jakarta</div>
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                            </div>
                            <div className="w-16 h-8 inline-flex flex-col justify-center items-center gap-3.5">
                                <div className="text-center justify-center text-neutral-400 text-lg font-medium font-['Roboto']">2 - 1</div>
                            </div>
                            <div className="w-60 flex justify-start items-center gap-1.5">
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persib Bandung</div>
                            </div>
                        </div>
                        <div data-property-1="Default" className="self-stretch h-12 inline-flex justify-center items-center gap-8">
                            <div className="w-60 flex justify-end items-center gap-1.5">
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persija Jakarta</div>
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                            </div>
                            <div className="w-16 h-8 inline-flex flex-col justify-center items-center gap-3.5">
                                <div className="text-center justify-center text-neutral-400 text-lg font-medium font-['Roboto']">2 - 1</div>
                            </div>
                            <div className="w-60 flex justify-start items-center gap-1.5">
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persib Bandung</div>
                            </div>
                        </div>
                        <div data-property-1="Default" className="self-stretch h-12 inline-flex justify-center items-center gap-8">
                            <div className="w-60 flex justify-end items-center gap-1.5">
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persija Jakarta</div>
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                            </div>
                            <div className="w-16 h-8 inline-flex flex-col justify-center items-center gap-3.5">
                                <div className="text-center justify-center text-neutral-400 text-lg font-medium font-['Roboto']">2 - 1</div>
                            </div>
                            <div className="w-60 flex justify-start items-center gap-1.5">
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persib Bandung</div>
                            </div>
                        </div>
                        <div data-property-1="Default" className="self-stretch h-12 inline-flex justify-center items-center gap-8">
                            <div className="w-60 flex justify-end items-center gap-1.5">
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persija Jakarta</div>
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                            </div>
                            <div className="w-16 h-8 inline-flex flex-col justify-center items-center gap-3.5">
                                <div className="text-center justify-center text-neutral-400 text-lg font-medium font-['Roboto']">2 - 1</div>
                            </div>
                            <div className="w-60 flex justify-start items-center gap-1.5">
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persib Bandung</div>
                            </div>
                        </div>
                        <div data-property-1="Default" className="self-stretch h-12 inline-flex justify-center items-center gap-8">
                            <div className="w-60 flex justify-end items-center gap-1.5">
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persija Jakarta</div>
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                            </div>
                            <div className="w-16 h-8 inline-flex flex-col justify-center items-center gap-3.5">
                                <div className="text-center justify-center text-neutral-400 text-lg font-medium font-['Roboto']">2 - 1</div>
                            </div>
                            <div className="w-60 flex justify-start items-center gap-1.5">
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persib Bandung</div>
                            </div>
                        </div>
                        <div className="w-[660px] h-12" />
                    </div>
                    <div className="w-[660px] h-80 pb-2.5 bg-white rounded-2xl shadow-[1px_1px_5px_1px_rgba(0,0,0,0.05)] flex flex-col justify-start items-center gap-2.5">
                        <div className="self-stretch h-12 px-5 py-3.5 bg-cyan-700 rounded-tl-2xl rounded-tr-2xl inline-flex justify-start items-center gap-2.5">
                            <div className="justify-center text-neutral-50 text-base font-medium font-['Roboto']">Indonesia - Super League</div>
                        </div>
                        <div data-property-1="Default" className="self-stretch h-12 inline-flex justify-center items-center gap-8">
                            <div className="w-60 flex justify-end items-center gap-1.5">
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persebaya Surabaya</div>
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                            </div>
                            <div className="w-16 h-8 inline-flex flex-col justify-center items-center gap-3.5">
                                <div className="text-center justify-center text-neutral-400 text-lg font-medium font-['Roboto']">2 - 1</div>
                            </div>
                            <div className="w-60 flex justify-start items-center gap-1.5">
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persija Jakarta</div>
                            </div>
                        </div>
                        <div data-property-1="Default" className="self-stretch h-12 inline-flex justify-center items-center gap-8">
                            <div className="w-60 flex justify-end items-center gap-1.5">
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Dewa United</div>
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                            </div>
                            <div className="w-16 h-8 inline-flex flex-col justify-center items-center gap-3.5">
                                <div className="text-center justify-center text-neutral-400 text-lg font-medium font-['Roboto']">2 - 1</div>
                            </div>
                            <div className="w-60 flex justify-start items-center gap-1.5">
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persija Jakarta</div>
                            </div>
                        </div>
                        <div data-property-1="Default" className="self-stretch h-12 inline-flex justify-center items-center gap-8">
                            <div className="w-60 flex justify-end items-center gap-1.5">
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Arema Malang</div>
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                            </div>
                            <div className="w-16 h-8 inline-flex flex-col justify-center items-center gap-3.5">
                                <div className="text-center justify-center text-neutral-400 text-lg font-medium font-['Roboto']">2 - 1</div>
                            </div>
                            <div className="w-60 flex justify-start items-center gap-1.5">
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persija Jakarta</div>
                            </div>
                        </div>
                        <div data-property-1="Default" className="self-stretch h-12 inline-flex justify-center items-center gap-8">
                            <div className="w-60 flex justify-end items-center gap-1.5">
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persija Jakarta</div>
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                            </div>
                            <div className="w-16 h-8 inline-flex flex-col justify-center items-center gap-3.5">
                                <div className="text-center justify-center text-neutral-400 text-lg font-medium font-['Roboto']">2 - 1</div>
                            </div>
                            <div className="w-60 flex justify-start items-center gap-1.5">
                                <img className="w-8 h-8" src="https://placehold.co/31x31" />
                                <div className="text-center justify-center text-zinc-600 text-xs font-medium font-['Roboto']">Persija Jakarta</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-80 h-[877px] bg-white rounded-2xl shadow-[1px_1px_5px_1px_rgba(0,0,0,0.05)] inline-flex flex-col justify-start items-center gap-2.5">
                    <div className="w-80 h-12 px-5 py-3.5 bg-cyan-700 rounded-tl-2xl rounded-tr-2xl inline-flex justify-start items-center gap-2.5">
                        <div className="justify-center text-neutral-50 text-base font-medium font-['Roboto']">Berita</div>
                    </div>
                    <div data-property-1="Default" className="w-80 px-3.5 flex flex-col justify-center items-center gap-2.5">
                        <img className="self-stretch h-48 rounded-[10px]" src="https://placehold.co/290x186" />
                        <div className="w-72 justify-center text-neutral-400 text-sm font-medium font-['Roboto'] leading-tight">Real Madrid Explore Vinicius Junior Swap Liverpool’s Final Konate Offer</div>
                        <div className="w-72 justify-center text-neutral-400 text-xs font-medium font-['Roboto'] leading-tight">SI . 1 jam Lalu</div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-16 px-3.5 border-t-[0.30px] border-zinc-600 inline-flex justify-center items-center gap-2.5">
                        <img className="w-11 h-11 rounded-[10px]" src="https://placehold.co/43x43" />
                        <div className="w-56 h-11 inline-flex flex-col justify-center items-start gap-[5px]">
                            <div className="self-stretch justify-center text-neutral-400 text-xs font-medium font-['Roboto'] leading-none">Real Madrid Explore Vinicius Junior Swap Liverpool’s Final Konate Offer</div>
                            <div className="justify-center text-neutral-400 text-[10px] font-medium font-['Roboto']">SI . 1 jam Lalu</div>
                        </div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-16 px-3.5 border-t-[0.30px] border-zinc-600 inline-flex justify-center items-center gap-2.5">
                        <img className="w-11 h-11 rounded-[10px]" src="https://placehold.co/43x43" />
                        <div className="w-56 h-11 inline-flex flex-col justify-center items-start gap-[5px]">
                            <div className="self-stretch justify-center text-neutral-400 text-xs font-medium font-['Roboto'] leading-none">Real Madrid Explore Vinicius Junior Swap Liverpool’s Final Konate Offer</div>
                            <div className="justify-center text-neutral-400 text-[10px] font-medium font-['Roboto']">SI . 1 jam Lalu</div>
                        </div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-16 px-3.5 border-t-[0.30px] border-zinc-600 inline-flex justify-center items-center gap-2.5">
                        <img className="w-11 h-11 rounded-[10px]" src="https://placehold.co/43x43" />
                        <div className="w-56 h-11 inline-flex flex-col justify-center items-start gap-[5px]">
                            <div className="self-stretch justify-center text-neutral-400 text-xs font-medium font-['Roboto'] leading-none">Real Madrid Explore Vinicius Junior Swap Liverpool’s Final Konate Offer</div>
                            <div className="justify-center text-neutral-400 text-[10px] font-medium font-['Roboto']">SI . 1 jam Lalu</div>
                        </div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-16 px-3.5 border-t-[0.30px] border-zinc-600 inline-flex justify-center items-center gap-2.5">
                        <img className="w-11 h-11 rounded-[10px]" src="https://placehold.co/43x43" />
                        <div className="w-56 h-11 inline-flex flex-col justify-center items-start gap-[5px]">
                            <div className="self-stretch justify-center text-neutral-400 text-xs font-medium font-['Roboto'] leading-none">Real Madrid Explore Vinicius Junior Swap Liverpool’s Final Konate Offer</div>
                            <div className="justify-center text-neutral-400 text-[10px] font-medium font-['Roboto']">SI . 1 jam Lalu</div>
                        </div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-16 px-3.5 border-t-[0.30px] border-zinc-600 inline-flex justify-center items-center gap-2.5">
                        <img className="w-11 h-11 rounded-[10px]" src="https://placehold.co/43x43" />
                        <div className="w-56 h-11 inline-flex flex-col justify-center items-start gap-[5px]">
                            <div className="self-stretch justify-center text-neutral-400 text-xs font-medium font-['Roboto'] leading-none">Real Madrid Explore Vinicius Junior Swap Liverpool’s Final Konate Offer</div>
                            <div className="justify-center text-neutral-400 text-[10px] font-medium font-['Roboto']">SI . 1 jam Lalu</div>
                        </div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-16 px-3.5 border-t-[0.30px] border-zinc-600 inline-flex justify-center items-center gap-2.5">
                        <img className="w-11 h-11 rounded-[10px]" src="https://placehold.co/43x43" />
                        <div className="w-56 h-11 inline-flex flex-col justify-center items-start gap-[5px]">
                            <div className="self-stretch justify-center text-neutral-400 text-xs font-medium font-['Roboto'] leading-none">Real Madrid Explore Vinicius Junior Swap Liverpool’s Final Konate Offer</div>
                            <div className="justify-center text-neutral-400 text-[10px] font-medium font-['Roboto']">SI . 1 jam Lalu</div>
                        </div>
                    </div>
                    <div data-property-1="Default" className="w-80 h-16 px-3.5 border-t-[0.30px] border-zinc-600 inline-flex justify-center items-center gap-2.5">
                        <img className="w-11 h-11 rounded-[10px]" src="https://placehold.co/43x43" />
                        <div className="w-56 h-11 inline-flex flex-col justify-center items-start gap-[5px]">
                            <div className="self-stretch justify-center text-neutral-400 text-xs font-medium font-['Roboto'] leading-none">Real Madrid Explore Vinicius Junior Swap Liverpool’s Final Konate Offer</div>
                            <div className="justify-center text-neutral-400 text-[10px] font-medium font-['Roboto']">SI . 1 jam Lalu</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// 5. Ekspor komponen HomePage
export default HomePage;