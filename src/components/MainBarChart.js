import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis,Tooltip } from 'recharts';

const data = [
  {
    name: '1395',
    uv: 4000,
    pv: 30,
    amt: 2400,
  },
  {
    name: '1396',
    uv: 3000,
    pv: 35,
    amt: 2210,
  },
  {
    name: '1397',
    uv: 2000,
    pv: 40,
    amt: 2290,
  },
  {
    name: '1398',
    uv: 2780,
    pv: 45,
    amt: 2000,
  },
  {
    name: '1399',
    uv: 1890,
    pv: 55,
    amt: 2181,
  },
  {
    name: '1400',
    uv: 2390,
    pv: 60,
    amt: 2500,
  },
  {
    name: '1401',
    uv: 3490,
    pv: 70,
    amt: 2100,
  },
];

 const MainBarChart=()=> {
    return (
      <ResponsiveContainer width="100%" height={200}>
        <BarChart  data={data}>
          <Bar dataKey="pv" fill="#329d9c" />
          <XAxis dataKey="name" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  export default MainBarChart;
