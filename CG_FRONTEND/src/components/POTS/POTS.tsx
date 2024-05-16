import React, { useState } from 'react';

interface RowData {
  type: string;
  requirement: string;
  pn: string;
  description: string;
  quantity: string;
  cost: string;
  notes: string;
  price: string;
}

//https://stackoverflow.com/questions/75830686/read-excel-xlsx-file-in-typescript

const POTS: React.FC = () => {
  const [tableData, setTableData] = useState<RowData[]>([
    { type: "CHK", requirement: "", pn: "", description: "", quantity: "", cost: "", notes: "", price: "" }
  ]);

  const handleInputChange = (index: number, column: keyof RowData, value: string) => {
    const newData = [...tableData];
    newData[index][column] = value;
    setTableData(newData);
  };

  const handleSubmitRow = (index: number) => {
    console.log("Submitted data for row", index, ":", tableData[index]);
  };

  const handleSubmitAll = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted all data:", tableData);
    // Add logic to handle submitting all rows here
  };

  return (
    <form onSubmit={handleSubmitAll}>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Requirement</th>
            <th>PN</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th>Notes</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(rowData).map((key) => (
                <td key={key}>
                  {key === 'type' ? rowData[key] : (
                    <input
                      type="text"
                      value={rowData[key as keyof RowData]}
                      onChange={(e) => handleInputChange(rowIndex, key as keyof RowData, e.target.value)}
                    />
                  )}
                </td>
              ))}
              <td>
                <button type="button" onClick={() => handleSubmitRow(rowIndex)}>Submit Row</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit">Submit All</button>
    </form>
  );
};

export default POTS;
