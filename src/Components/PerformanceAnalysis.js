import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PerformanceAnalysis = ({ stockData }) => {
    const chartData = {
        labels: stockData.map((stock) => stock.symbol), // X-axis labels: stock symbols
        datasets: [
            {
                label: "Stock Price (Last Sale)",
                data: stockData.map((stock) => parseFloat(stock.lastsale.replace('$', '').replace(',', ''))), // Y-axis data: stock prices
                borderColor: "rgba(75,192,192,1)", // Line color
                backgroundColor: "rgba(75,192,192,0.2)", // Area under the line
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Performance Analysis - Stock Prices",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Stock Price (USD)",
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Stock Symbols",
                },
            },
        },
    };

    return (
        <div style={{ width: "80%", margin: "20px auto" }}>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default PerformanceAnalysis;
