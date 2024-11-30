const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Your RapidAPI key
const RAPID_API_KEY = "294893c5dcmsh1af4e07567b7f80p1152bdjsn24775047cbe9";

app.get("/api/stock-data", async (req, res) => {
    const url =
        "https://yahoo-finance15.p.rapidapi.com/api/v2/markets/tickers?page=1&type=STOCKS";
    
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": RAPID_API_KEY,
            "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
        },
    };

    try {
        const response = await axios.get(url, options);
        console.log("Stock data received from API:", response.data);  // Log the data
        res.json(response.data); // Send the API response to the frontend
    } catch (error) {
        console.error("Error fetching stock data:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to fetch stock data" });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
