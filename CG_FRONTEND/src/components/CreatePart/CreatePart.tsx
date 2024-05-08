import React, { useState } from 'react';
import Service from '../../service/service';
import { IPart } from '../../models/Part';

interface FormData {
  _id: string;
  pn: string;
  description: string[];
  rev: string;
  status: number;
  pref: number;
  ecn: string;
  oh: number;
  cost: number;
  type: number;
  drawing: string[];
  assembly: [string, number][];
  used: string[];
  vendor: string[];
}

function AddPartForm() {
  const [formData, setFormData] = useState<FormData>({
    _id: '0',
    pn: '',
    description: [],
    rev: '',
    status: 0,
    pref: 0,
    ecn: '',
    oh: 0,
    cost: 0,
    type: 0,
    drawing: [],
    assembly: [['', 0]],
    used: [],
    vendor: [],
  });

  const service = new Service();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleArrayChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      [field]: value.split(',').map(item => item.trim())
    });
  };

  const handleAssemblyChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedAssembly: [string, number][] = formData.assembly.map((item, i) => {
      if (i === index) {
        return name === 'name' ? [value, item[1]] : [item[0], parseInt(value || '0')];
      }
      return item;
    });
    setFormData({
      ...formData,
      assembly: updatedAssembly
    });
  };
  
  const handleAddAssemblyField = () => {
    setFormData({
      ...formData,
      assembly: [...formData.assembly, ['', 0]]
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submissionSuccess = await service.submitPart(formData as IPart);

    if (!submissionSuccess) {
      console.log("Submission failed");
    } else {
      console.log("Part submitted successfully");
    }
  };

  return (
    <div>
      <h2>Add Part</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pn">Part Number:</label>
        <input type="text" id="pn" name="pn" value={formData.pn} onChange={handleInputChange} required /><br /><br />

        <label htmlFor="description">Description (comma-separated):</label>
        <input type="text" id="description" name="description" value={formData.description.join(',')} onChange={(e) => handleArrayChange(e, 'description')} required /><br /><br />

        <label htmlFor="rev">Revision:</label>
        <input type="text" id="rev" name="rev" value={formData.rev} onChange={handleInputChange} required /><br /><br />

        <label htmlFor="status">Status:</label>
        <input type="number" id="status" name="status" value={formData.status} onChange={handleInputChange} required /><br /><br />

        <label htmlFor="pref">Preference:</label>
        <input type="number" id="pref" name="pref" value={formData.pref} onChange={handleInputChange} required /><br /><br />

        <label htmlFor="ecn">ECN:</label>
        <input type="text" id="ecn" name="ecn" value={formData.ecn} onChange={handleInputChange} required /><br /><br />

        <label htmlFor="oh">OH:</label>
        <input type="number" id="oh" name="oh" value={formData.oh} onChange={handleInputChange} required /><br /><br />

        <label htmlFor="cost">Cost:</label>
        <input type="number" id="cost" name="cost" step="0.01" value={formData.cost} onChange={handleInputChange} required /><br /><br />

        <label htmlFor="type">Type:</label>
        <input type="number" id="type" name="type" value={formData.type} onChange={handleInputChange} required /><br /><br />

        <label htmlFor="drawing">Drawing (comma-separated):</label>
        <input type="text" id="drawing" name="drawing" value={formData.drawing.join(',')} onChange={(e) => handleArrayChange(e, 'drawing')} required /><br /><br />

        <label htmlFor="used">Used (comma-separated):</label>
        <input type="text" id="used" name="used" value={formData.used.join(',')} onChange={(e) => handleArrayChange(e, 'used')} required /><br /><br />

        <label htmlFor="vendor">Vendor (comma-separated):</label>
        <input type="text" id="vendor" name="vendor" value={formData.vendor.join(',')} onChange={(e) => handleArrayChange(e, 'vendor')} required /><br /><br />

        <label>Assembly:</label><br />
        {formData.assembly.map((assemblyItem, index) => (
          <div key={index}>
            <input type="text" value={assemblyItem[0]} onChange={(e) => handleAssemblyChange(index, e)} placeholder="Name" />
            <input type="number" value={assemblyItem[1]} onChange={(e) => handleAssemblyChange(index, e)} placeholder="Quantity" />
          </div>
        ))}
        <button type="button" onClick={handleAddAssemblyField}>Add Assembly Field</button><br /><br />

        <button type="submit">Add Part</button>
      </form>
    </div>
  );
}

export default AddPartForm;
