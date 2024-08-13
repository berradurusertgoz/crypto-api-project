import React, { useEffect, useState } from 'react'

import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';


const ChartComponent = ({ data }) => {
    return (
      <LineChart width={80} height={90} data={data}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    );
  };
  const Chart = ({id}) => {
    const [chartData, setChartData] = useState([]);
    
    useEffect(() => {
        const getChartData = async (id) => {
            const data = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  'x-cg-demo-api-key': 'CG-4gCqyFDZsQjzNBdZ5Wt7QgBA	'
                }
              };
              try {
                const response = await 
                fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1&interval=daily`, data);
                const result = await response.json()
                const formattedData = result.prices.map(price => ({
                    date: new Date(price[0]).toLocaleTimeString(),
                    price: price[1]
                  }));
                
                  setChartData(formattedData);
                } catch (err) {
                  console.error(err);
                }
              };
              getChartData(id);
        }, [id]);
        
    
  return (
    <div>
        <ChartComponent data={chartData}/>
    </div>
  )
}

export default Chart