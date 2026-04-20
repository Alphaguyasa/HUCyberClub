interface StatItem {
    value: string;
    label: string;
    color?: string;
}

interface StatsSectionProps {
    stats?: StatItem[];
}

const defaultStats: StatItem[] = [
    { value: "128", label: "Total Members", color: "#C9C73C" },
    { value: "42", label: "Active Today", color: "#C9C73C" },
    { value: "89", label: "Active This Week", color: "#C9C73C" },
    { value: "15", label: "Inactive (30d)", color: "#C9C73C" },
];

export default function StatsSection({ stats = defaultStats }: StatsSectionProps) {
    return (
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}>
            {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl text-center" style={{ backgroundColor: '#2E3338' }}>
                    <div className="text-5xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                    <p className="font-light" style={{ fontSize: '14px', color: 'rgba(246,248,250,0.6)' }}>{stat.label}</p>
                </div>
            ))}
        </div>
    );
}