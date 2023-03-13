import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '1395',
      uv: 4000,
      pv: 65,
      amt: 2400,
    },
    {
      name: '1396',
      uv: 3000,
      pv: 75,
      amt: 2210,
    },
    {
      name: '1397',
      uv: 2000,
      pv: 90,
      amt: 2290,
    },
    {
      name: '1398',
      uv: 2780,
      pv: 110,
      amt: 2000,
    },
    {
      name: '1399',
      uv: 1890,
      pv: 130,
      amt: 2181,
    },
    {
      name: '1400',
      uv: 2390,
      pv: 145,
      amt: 2500,
    },
    {
      name: '1401',
      uv: 3490,
      pv: 170,
      amt: 2100,
    },
  ];
  

const  MainAreaChart=()=> {
  

    return (
      <>
        <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <Area type="monotone" dataKey="pv" stroke="#329d9c" fill="#329d9c" />
          <Tooltip />
          <XAxis dataKey="name"/>
        </AreaChart>
        </ResponsiveContainer>
      </>
    );
  }
export default MainAreaChart;
