import React from "react";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar, CartesianGrid } from "recharts";

export default function BarChartCustom({data}) {
    return (
        <ResponsiveContainer width="100%" height="100%" className="layoutItemContainer">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* {
              data.forEach(e => {
                <Bar dataKey="value" fill="#ffc658" />
              })
            } */}
            <Bar dataKey="value" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
    );
}