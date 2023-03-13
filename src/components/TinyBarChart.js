import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



 const  TinyBarChart=({data})=>  {
    return (
      <ResponsiveContainer width="100%" aspect={2} >
        <BarChart  data={data} >
          <Bar dataKey="value" fill="#329d9c" margin={{
            right: 20,
            left: 20,
            top:10,
            bottom: 10
          }} />
          <XAxis dataKey="name" tick={{fontSize: 9}} />
          <Tooltip wrapperStyle={{ top: -100, left: -40 }} cursor={false}  />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  export default TinyBarChart;
