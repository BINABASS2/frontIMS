import React from 'react';
import FixedAsset from './FixedAsset';
import NonFixedAsset from './NonFixedAsset';
import ManageStaff from './ManageStaff';
import ManageSupplier from './ManageSupplier';

const AssetManager = () => {
  // Define the handler functions
  const handleEdit = (item) => { /* Your edit logic */ };
  const handleDelete = (itemId) => { /* Your delete logic */ };
  const handleView = (item) => { /* Your view logic */ };
  const handleAdd = () => { /* Your add logic */ };

  // Sample asset data
  const fixedAssets = [/* Array of fixed assets */];
  const nonFixedAssets = [/* Array of non-fixed assets */];

  return (
    <div>
      <FixedAsset
        assets={fixedAssets}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        onAdd={handleAdd}
      />
      <NonFixedAsset
        assets={nonFixedAssets}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        onAdd={handleAdd}
      />
      <ManageStaff
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        onAdd={handleAdd}
      />
      <ManageSupplier
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        onAdd={handleAdd}
      />
    </div>
  );
};

export default AssetManager;
