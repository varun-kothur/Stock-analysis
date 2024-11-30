import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register the necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const App = () => {
    const [stockData, setStockData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch stock data from the backend
    const fetchStockData = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:5000/api/stock-data");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();

            // Log the result to inspect the data structure
            console.log("Data received from backend:", result);

            // Extract the stock data from the 'body' field
            const stockList = result.body || [];
            setStockData(stockList); // Store the stock data in state
        } catch (error) {
            console.error("Error fetching stock data:", error);
            setError("Failed to fetch stock data. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStockData(); // Fetch stock data when the component mounts
    }, []);

    // Prepare Line Chart data
    const chartData = {
        labels: stockData.map((stock) => stock.symbol),  // X-axis labels: stock symbols
        datasets: [
            {
                label: "Stock Price (Last Sale)",
                data: stockData.map((stock) => parseFloat(stock.lastsale.replace('$', '').replace(',', ''))),  // Y-axis data: stock prices
                borderColor: "rgba(75,192,192,1)", // Line color
                backgroundColor: "rgba(75,192,192,0.2)", // Area under the line
                borderWidth: 2,
                pointRadius: 4, // Customize point size
                pointHoverRadius: 6, // Point size on hover
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
                text: "Stock Prices Line Graph",
            },
        },
        scales: {
            y: {
                beginAtZero: true, // Start Y-axis at 0
                title: {
                    display: true,
                    text: "Stock Price (USD)", // Label for Y-axis
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Stock Symbols", // Label for X-axis
                },
            },
        },
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Stock Market Tickers - Line Graph</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && stockData.length > 0 && (
                <div style={{ width: "80%", margin: "auto", paddingTop: "30px" }}>
                    <Line data={chartData} options={chartOptions} />
                </div>
            )}
        </div>
    );
};

export default App;
