import React, { useState, useEffect } from "react";
import PerformanceAnalysis from "./components/PerformanceAnalysis";
import RiskManagement from "./components/RiskManagement";
import StockStatistics from "./components/StockStatistics";
import SectorAllocation from "./components/SectorAllocation";
import TopPerformers from "./Components/TopPerformers"; // Importing the new component

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

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Stock Market Dashboard</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && stockData.length > 0 && (
                <>
                    <PerformanceAnalysis stockData={stockData} />
                    <RiskManagement stockData={stockData} />
                    <StockStatistics stockData={stockData} />
                    <SectorAllocation stockData={stockData} />
                    <TopPerformers stockData={stockData} /> {/* Render Top Performers */}
                </>
            )}
        </div>
    );
};

export default App;
