// apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Adjust the URL to match your Django server

export const getAssets = async () => {
  try {
    const response = await axios.get(`${API_URL}/assets/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching assets:', error);
    throw error;
  }
};

export const getAssetPDF = async (assetId) => {
  try {
    const response = await axios.get(`${API_URL}/assets/${assetId}/pdf`, { responseType: 'blob' });
    return response.data;
  } catch (error) {
    console.error('Error fetching asset PDF:', error);
    throw error;
  }
};

export const getAllAssetsPDF = async () => {
  try {
    const response = await axios.get(`${API_URL}/assets/pdf`, { responseType: 'blob' });
    return response.data;
  } catch (error) {
    console.error('Error fetching all assets PDF:', error);
    throw error;
  }
};

// AssetList.js
import React, { useEffect, useState } from 'react';
import { getAssets, getAssetPDF, getAllAssetsPDF } from './apiService';

const AssetList = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const data = await getAssets();
        setAssets(data);
      } catch (error) {
        console.error('Error fetching assets:', error);
      }
    };

    fetchAssets();
  }, []);

  const handleDownloadPDF = async (assetId) => {
    try {
      const pdfBlob = await getAssetPDF(assetId);
      const url = window.URL.createObjectURL(new Blob([pdfBlob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `asset_${assetId}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  const handleDownloadAllPDF = async () => {
    try {
      const pdfBlob = await getAllAssetsPDF();
      const url = window.URL.createObjectURL(new Blob([pdfBlob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'all_assets_report.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading all assets PDF:', error);
    }
  };

  return (
    <div>
      <h1>Assets</h1>
      <button onClick={handleDownloadAllPDF}>Download All Assets PDF</button>
      <ul>
        {assets.map(asset => (
          <li key={asset.id}>
            {asset.name} - {asset.model}
            <button onClick={() => handleDownloadPDF(asset.id)}>Download PDF</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetList;