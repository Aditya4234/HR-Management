const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }) => {
    return (
        <div className="glass p-6 rounded-2xl border border-white/10 group hover:border-indigo-500/50 transition-all duration-300">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-gray-400 text-sm font-medium">{title}</p>
                    <h3 className="text-3xl font-bold mt-2 text-white">{value}</h3>

                    {trend && (
                        <div className="flex items-center mt-3">
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${trend === 'up' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                                }`}>
                                {trend === 'up' ? '+' : '-'}{trendValue}%
                            </span>
                            <span className="text-xs text-gray-500 ml-2">from last month</span>
                        </div>
                    )}
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${color} text-white shadow-lg`}>
                    <Icon className="h-7 w-7" />
                </div>
            </div>
        </div>
    );
};

export default StatCard;
