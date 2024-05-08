import React, { useState, useEffect } from 'react';
import { IPart } from '../../models/Part';

const PartTable: React.FC = () => {
  const [parts, setParts] = useState<IPart[]>([]);
  const [selectedPart, setSelectedPart] = useState<IPart | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/part');
        const data = await response.json();
        setParts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAssemblyToggle = (part: IPart) => {
    setSelectedPart(selectedPart === part ? null : part);
  };

  return (
    <div>
      <h2>Parts Table</h2>
      <table>
        <thead>
          <tr>
            <th>Part Number</th>
            <th>Description</th>
            <th>Revision</th>
            <th>Status</th>
            <th>Preferred</th>
            <th>ECN</th>
            <th>OH</th>
            <th>Cost</th>
            <th>Type</th>
            <th>Drawing</th>
            <th>Assembly</th>
            <th>Used</th>
            <th>Vendor</th>
          </tr>
        </thead>
        <tbody>
          {parts.map(part => (
            <tr key={part._id}>
              <td>{part.pn}</td>
              <td>{part.description.join(', ')}</td>
              <td>{part.rev}</td>
              <td>{part.status}</td>
              <td>{part.pref}</td>
              <td>{part.ecn}</td>
              <td>{part.oh}</td>
              <td>{part.cost}</td>
              <td>{part.type}</td>
              <td>
                <select>
                  {part.drawing.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              </td>
              <td>
                <button onClick={() => handleAssemblyToggle(part)}>
                  {selectedPart === part ? 'Collapse' : 'Expand'}
                </button>
              </td>
              <td>
                <select>
                  {part.used.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              </td>
              <td>
                <select>
                  {part.vendor.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPart && (
        <div>
          <h2>Selected Part Assembly</h2>
          <table>
            <thead>
              <tr>
                <th>Assembly Part</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {selectedPart.assembly.map((assemblyItem, index) => (
                <tr key={index}>
                  <td>{assemblyItem[0]}</td>
                  <td>{assemblyItem[1].toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PartTable;
