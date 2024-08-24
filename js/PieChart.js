import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required elements
Chart.register(ArcElement, Tooltip, Legend);

function PieChart({ data }) {
  const labels = Object.keys(data);
  const values = Object.values(data);
  const backgroundColor = labels.map((_, index) => hsl(${(index * 50) % 360}, 70%, 50%));

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor,
      },
    ],
  };

  return (
    <div className="pie-chart">
      <Pie 
        data={chartData} 
        options={{
          maintainAspectRatio: false,
          responsive: true,
          width: 300,  /* Set fixed width */
          height: 300  /* Set fixed height */
        }} 
      />
    </div>
  );
}

export default PieChart;
