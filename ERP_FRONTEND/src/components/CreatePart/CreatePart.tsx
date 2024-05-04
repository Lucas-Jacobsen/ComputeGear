import React, { useState } from 'react';

interface AssemblyItem {
    name: string;
    quantity: string;
}

interface FormData {
    pn: string;
    description: string[];
    rev: string;
    status: string;
    pref: string;
    ecn: string;
    oh: string;
    cost: string;
    type: string;
    drawing: string[];
    used: string[];
    vendor: string[];
    assembly: AssemblyItem[];
}

function AddPartForm() {
    const [formData, setFormData] = useState<FormData>({
        pn: '',
        description: [],
        rev: '',
        status: '',
        pref: '',
        ecn: '',
        oh: '',
        cost: '',
        type: '',
        drawing: [],
        used: [],
        vendor: [],
        assembly: [{ name: '', quantity: '' }]
    });

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
        const updatedAssembly = [...formData.assembly];
        updatedAssembly[index][name as keyof AssemblyItem] = value; // Type assertion
        setFormData({
            ...formData,
            assembly: updatedAssembly
        });
    };

    const handleAddAssemblyField = () => {
        setFormData({
            ...formData,
            assembly: [...formData.assembly, { name: '', quantity: '' }]
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        fetch('http://localhost:3001/part', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Part added successfully:', data);
            // Optionally, you can redirect or show a success message here
        })
        .catch(error => {
            console.error('There was a problem adding the part:', error);
            // Handle errors, show error messages, etc.
        });
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
                        <input type="text" name="name" value={assemblyItem.name} onChange={(e) => handleAssemblyChange(index, e)} placeholder="Name" />
                        <input type="text" name="quantity" value={assemblyItem.quantity} onChange={(e) => handleAssemblyChange(index, e)} placeholder="Quantity" />
                    </div>
                ))}
                <button type="button" onClick={handleAddAssemblyField}>Add Assembly Field</button><br /><br />

                <button type="submit">Add Part</button>
            </form>
        </div>
    );
}

export default AddPartForm;
