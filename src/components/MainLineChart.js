import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1395',
    uv: 4000,
    pv: 50,
    amt: 2400,
  },
  {
    name: '1396',
    uv: 3000,
    pv: 70,
    amt: 2210,
  },
  {
    name: '1397',
    uv: 2000,
    pv: 85,
    amt: 2290,
  },
  {
    name: '1398',
    uv: 2780,
    pv: 70,
    amt: 2000,
  },
  {
    name: '1399',
    uv: 1890,
    pv: 90,
    amt: 2181,
  },
  {
    name: '1400',
    uv: 2390,
    pv: 110,
    amt: 2500,
  },
  {
    name: '1401',
    uv: 3490,
    pv: 150,
    amt: 2100,
  },
];

 const MainLineChart =()=> {
    return (
      <ResponsiveContainer width="100%" height={200}>
        <LineChart width={350} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#329d9c" strokeWidth={2} />
          <XAxis dataKey="name"/>
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      
    );
}
export default MainLineChart;
