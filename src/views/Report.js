import React, { useState } from 'react';
import './Report.css'


const Report = () => {
  const [setSelectedAsset] = useState(null);

  // Sample assets data (Initially empty, you can populate it later)
  const assets = [
    {
      name: 'Asset 1',
      type: 'Fixed',
      description: 'Asset 1 Description',
      purchasedValue: 1000,
      currentValue: 1200,
      conclusion: 'Appreciation',
      percentageChange: 20,
    },
    {
      name: 'Asset 2',
      type: 'Variable',
      description: 'Asset 2 Description',
      purchasedValue: 2000,
      currentValue: 1800,
      conclusion: 'Depreciation',
      percentageChange: -10,
    },
    {
      name: 'Asset 3',
      type: 'Variable',
      description: 'Asset 3 Description',
      purchasedValue: 56000,
      currentValue: 52800,
      conclusion: 'Depreciation',
      percentageChange: -50,
    },
    // Add more assets as needed
  ];

  const handleView = (asset) => {
    setSelectedAsset(asset);
    // Implement your logic for viewing asset details
    alert(`Viewing asset: ${asset.name}`);
  };

  const handleEdit = (asset) => {
    setSelectedAsset(asset);
    // Implement your logic for editing the asset
    alert(`Editing asset: ${asset.name}`);
  };

  const handlePrint = (asset) => {
    // Implement your logic to generate a PDF (e.g., using jsPDF library)
    alert(`Printing asset: ${asset.name}`);
  };

  return (
    <div className='content asset-list-container'>
      <h2 id='report'>Annual Asset Report</h2>
      <table className="asset-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Purchased Value</th>
            <th>Current Value</th>
            <th>Conclusion</th>
            <th>Percentage Change</th>
            {/* Conditionally render the Actions header */}
            {assets.length > 0 && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {assets.length > 0 ? (
            assets.map((asset, index) => (
              <tr key={index}>
                <td>{asset.name}</td>
                <td>{asset.type}</td>
                <td>{asset.description}</td>
                <td>{asset.purchasedValue}</td>
                <td>{asset.currentValue}</td>
                <td>{asset.conclusion}</td>
                <td>{asset.percentageChange}%</td>
                {/* Conditionally render the action buttons */}
                <td>
                  <button onClick={() => handleView(asset)}>View</button>
                  <button onClick={() => handleEdit(asset)}>Edit</button>
                  <button onClick={() => handlePrint(asset)}>Print PDF</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center' }}>
                No data available. Please insert data.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
