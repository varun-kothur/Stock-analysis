import React from "react";

const StockDataDisplay = ({ data }) => {
    return (
        <table style={{ margin: "0 auto", borderCollapse: "collapse", width: "80%" }}>
            <thead>
                <tr style={{ backgroundColor: "#f4f4f4", borderBottom: "2px solid #ddd" }}>
                    <th style={{ padding: "10px" }}>Symbol</th>
                    <th style={{ padding: "10px" }}>Price</th>
                    <th style={{ padding: "10px" }}>Name</th>
                </tr>
            </thead>
            <tbody>
                {data.map((stock) => (
                    <tr key={stock.symbol} style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}>
                        <td style={{ padding: "10px" }}>{stock.symbol}</td>
                        <td style={{ padding: "10px" }}>{stock.regularMarketPrice || "N/A"}</td>
                        <td style={{ padding: "10px" }}>{stock.shortName || "N/A"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StockDataDisplay;
