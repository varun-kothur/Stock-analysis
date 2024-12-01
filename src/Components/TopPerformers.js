import React from "react";

const TopPerformers = ({ stockData }) => {
    // Sort stocks by percent change in descending order
    const sortedStocks = [...stockData].sort((a, b) => 
        parseFloat(b.pctchange.replace('%', '')) - parseFloat(a.pctchange.replace('%', ''))
    );

    // Select the top 5 performers
    const topPerformers = sortedStocks.slice(0, 5);

    return (
        <div style={{ width: "80%", margin: "20px auto" }}>
            <h2>Top Performers</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
                <thead>
                    <tr>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Symbol</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Name</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Percent Change</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {topPerformers.map((stock, index) => (
                        <tr key={index}>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{stock.symbol}</td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{stock.name}</td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                                {stock.pctchange}
                            </td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                                {stock.marketCap}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopPerformers;
