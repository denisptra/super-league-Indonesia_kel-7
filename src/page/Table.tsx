function TablePage() {
    return (
        <div className="p-4">
            <div className="rounded-lg border-2" style={{ borderColor: '#0A518C' }}>
                <div className="px-4 py-2 font-semibold text-white" style={{ backgroundColor: '#0A518C' }}>
                    Liga teratas
                </div>


                <div className="p-4 bg-white">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead>
                                <tr className="text-left text-xs text-gray-600">
                                    <th className="w-10">#</th>
                                    <th>Team</th>
                                    <th className="w-12 text-center">M</th>
                                    <th className="w-12 text-center">W</th>
                                    <th className="w-12 text-center">D</th>
                                    <th className="w-12 text-center">L</th>
                                    <th className="w-16 text-center">GD</th>
                                    <th className="w-16 text-center">Poin</th>
                                    <th className="w-40 text-right">Form</th>
                                </tr>
                            </thead>


                            <tbody>
                                {/* Single hard-coded row */}
                                <tr className="border-t">
                                    <td className="py-3 align-middle">1.</td>


                                    <td className="py-2 align-middle">
                                        <div className="flex items-center">
                                            <img
                                                src="/logo-club.png" 
                                                alt="club logo"
                                                className="w-6 h-6 rounded-full mr-3 object-cover"
                                            />

                                            {/* klub */}
                                            <div>
                                                <div className="font-medium">Persija Jakarta</div>
                                                <div className="text-xs text-gray-500">Persija Jakarta</div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Statistik */}
                                    <td className="text-center align-middle">4</td>
                                    <td className="text-center align-middle">4</td>
                                    <td className="text-center align-middle">0</td>
                                    <td className="text-center align-middle">0</td>
                                    <td className="text-center align-middle">+4</td>
                                    <td className="text-center align-middle">12</td>

                                    {/* Keterangan WLD */}
                                    <td className="align-middle">
                                        <div className="flex justify-end items-center space-x-2">
                                            <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-green-500 text-white">W</span>
                                            <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-gray-500 text-white">D</span>
                                            <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-red-500 text-white">L</span>
                                            <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-green-500 text-white">W</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TablePage;