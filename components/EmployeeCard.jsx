import Link from 'next/link';

const EmployeeCard = ({ employee }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-500/10 text-green-400 border-green-500/20';
            case 'On Leave': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
            case 'Inactive': return 'bg-red-500/10 text-red-400 border-red-500/20';
            default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
        }
    };

    return (
        <div className="glass rounded-2xl p-5 border border-white/10 hover:border-indigo-500/40 transition-all group">
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <img
                        src={employee.avatar}
                        alt={employee.name}
                        className="h-16 w-16 rounded-2xl object-cover border border-white/10 group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-black ${employee.status === 'Active' ? 'bg-green-500' : employee.status === 'On Leave' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></span>
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold text-white truncate">{employee.name}</h4>
                    <p className="text-sm text-gray-400 truncate">{employee.role}</p>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <p className="text-gray-500 text-[10px] uppercase font-bold">Department</p>
                    <p className="text-gray-300 font-medium truncate">{employee.department}</p>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <p className="text-gray-500 text-[10px] uppercase font-bold">Status</p>
                    <span className={`inline-block px-2 text-[10px] rounded-full border mt-0.5 ${getStatusColor(employee.status)}`}>
                        {employee.status}
                    </span>
                </div>
            </div>

            <Link
                href={`/employees/${employee.id}`}
                className="mt-5 w-full flex items-center justify-center py-2.5 bg-white/5 hover:bg-indigo-600 transition-colors rounded-xl text-sm font-semibold border border-white/10 hover:border-indigo-500"
            >
                View Profile
            </Link>
        </div>
    );
};

export default EmployeeCard;
