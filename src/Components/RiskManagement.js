import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RiskManagement = ({ stockData }) => {
    const chartData = {
        labels: stockData.map((stock) => stock.symbol), // X-axis labels: stock symbols
        datasets: [
            {
                label: "Percent Change",
                data: stockData.map((stock) => parseFloat(stock.pctchange.replace('%', ''))), // Y-axis data: percent changes
                backgroundColor: "rgba(255,99,132,0.6)", // Bar color
                borderColor: "rgba(255,99,132,1)", // Border color
                borderWidth: 1,
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
                text: "Risk Management - Percent Changes",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Percent Change (%)",
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
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default RiskManagement;
