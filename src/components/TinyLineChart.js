import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


   const TinyLineChart=({data})=> {

    return (
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart  data={data}  margin={{
            right: 20,
            left: 20,
            top:10,
            bottom: 10
            
          }}>
          <Line type="monotone" dataKey="value" fill="#329d9c"  stroke="#329d9c" />
          <XAxis dataKey="name" tick={{fontSize: 9}}  />
          <Tooltip wrapperStyle={{ top: -100, left: -40 }} cursor={false} />
        </LineChart>
      </ResponsiveContainer>
    );
}
export default TinyLineChart;