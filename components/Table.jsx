const Table = ({ columns, data, renderRow }) => {
    return (
        <div className="glass rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-white/5 border-b border-white/10">
                        <tr>
                            {columns.map((col) => (
                                <th key={col.key} className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {data.map((item, index) => renderRow(item, index))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
