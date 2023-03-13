import {BarChart,XAxis,YAxis,Bar} from "recharts";

export default function BarChartt({data,title}) {
  return (
    <div className="text-white">
    <div className="flex justify-center items-center mb-10 text-white">
        <h1 className="subheading2">{title}</h1>
    </div>
    <BarChart width={650} height={300} data={data}>
    <XAxis
    tick={{ fill: "white" }}
    axisLine={false}
    tickLine={false}
    dataKey="name"   />
    <YAxis
    tickCount={7}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "white" }}
          type="number"
          domain={[0, 100]}
    />
    <Bar dataKey="value" barSize={20} fill="#8884d8"/>
  </BarChart>
  </div>
  );
}