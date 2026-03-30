import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  { name: 'Credit cards', value: 38 },
  { name: 'Student loans', value: 28 },
  { name: 'Mortgage', value: 20 },
  { name: 'Other', value: 14 },
]

const colors = ['#818cf8', '#06b6d4', '#f59e0b', '#22c55e']

export default function DebtBreakdownPieChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={4}
          label
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip
          wrapperStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }}
          contentStyle={{ backgroundColor: '#0f172a', borderRadius: 8 }}
        />
        <Legend layout="horizontal" verticalAlign="bottom" align="center" />
      </PieChart>
    </ResponsiveContainer>
  )
}