import React from "react";

const StockStatistics = ({ stockData }) => {
    return (
        <div style={{ width: "80%", margin: "20px auto" }}>
            <h2>Stock Statistics</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
                <thead>
                    <tr>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Symbol</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Market Cap</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Net Change</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Percent Change</th>
                    </tr>
                </thead>
                <tbody>
                    {stockData.map((stock, index) => (
                        <tr key={index}>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{stock.symbol}</td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                                {stock.marketCap}
                            </td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                                {stock.netchange}
                            </td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                                {stock.pctchange}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockStatistics;
