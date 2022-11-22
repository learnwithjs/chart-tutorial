import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    Iphone: 4000,
  },
  {
    name: 'Febuary',
    Iphone: 3000,
  },
  {
    name: 'March',
    Iphone: 2000,
  },
  {
    name: 'April',
    Iphone: 2780,
  },
  {
    name: 'May',
    Iphone: 1890,
  },
  {
    name: 'June',
    Iphone: 2390,
  },
  {
    name: 'July',
    Iphone: 3490,
  },
];
function App() {
  return (
    <>
      <h2>Quarterly sales figures for mobile phones</h2>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal="true" vertical="" stroke="#243240" />
          <XAxis dataKey="name" tick={{ fill: "#fff" }} />
          <YAxis tick={{ fill: "#fff" }} />
          <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false} />
          <Line type="monotone" dataKey="Iphone" stroke="#8884d8" strokeWidth="5" dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 5, r: 10 }} />

        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;
