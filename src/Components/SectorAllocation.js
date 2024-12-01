import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const SectorAllocation = ({ stockData }) => {
    // Mock sector data based on stock symbols (replace with actual sector data if available)
    const sectors = {
        "Technology": ["AAPL", "MSFT", "CSCO"],
        "Healthcare": ["JNJ", "ABBV", "MRK"],
        "Finance": ["BAC", "WFC", "MS"],
        "Consumer Goods": ["KO", "PEP"],
        "Energy": ["CVX"],
        "Industrials": ["CAT", "GE"]
    };

    // Count the number of stocks in each sector
    const sectorCounts = Object.keys(sectors).map((sector) => {
        return stockData.filter((stock) => sectors[sector].includes(stock.symbol)).length;
    });

    // Prepare Pie Chart data
    const chartData = {
        labels: Object.keys(sectors), // Sector names
        datasets: [
            {
                data: sectorCounts, // Number of stocks in each sector
                backgroundColor: [
                    "rgba(255,99,132,0.6)",
                    "rgba(54,162,235,0.6)",
                    "rgba(255,206,86,0.6)",
                    "rgba(75,192,192,0.6)",
                    "rgba(153,102,255,0.6)",
                    "rgba(255,159,64,0.6)",
                ], // Sector colors
                borderColor: "rgba(255,255,255,1)",
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
                text: "Sector Allocation",
            },
        },
    };

    return (
        <div style={{ width: "80%", margin: "20px auto" }}>
            <h2>Sector Allocation</h2>
            <Pie data={chartData} options={chartOptions} />
        </div>
    );
};

export default SectorAllocation;