/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';

interface ConfigurationProps {}

interface ConfigurationState {
  partNumberInput: string;
  partDescriptionInput: string;
  partNumberData: any[]; // Assuming it's an array of objects
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  partDescriptionData: any[]; // Assuming it's an array of objects
}

class Configuration extends Component<ConfigurationProps, ConfigurationState> {
  constructor(props: ConfigurationProps) {
    super(props);
    this.state = {
      partNumberInput: '',
      partDescriptionInput: '',
      partNumberData: [],
      partDescriptionData: [],
    };
  }

  handlePartNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ partNumberInput: event.target.value });
  };

  handlePartDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ partDescriptionInput: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Fetch data based on part number and part description inputs
    // Populate partNumberData and partDescriptionData arrays with fetched data
    // Example fetch implementation:
    // fetch('api/data', {
    //   method: 'POST',
    //   body: JSON.stringify({ partNumber: this.state.partNumberInput, partDescription: this.state.partDescriptionInput }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({ partNumberData: data.partNumberData, partDescriptionData: data.partDescriptionData });
    // })
    // .catch(error => console.error('Error:', error));

    // Simulated data for demonstration
    const simulatedPartNumberData = [{ id: 1, partNumber: '12345', description: 'Part 1' }];
    const simulatedPartDescriptionData = [{ id: 2, partNumber: '54321', description: 'Part 2' }];

    this.setState({
      partNumberData: simulatedPartNumberData,
      partDescriptionData: simulatedPartDescriptionData,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Part Number:
            <input type="text" value={this.state.partNumberInput} onChange={this.handlePartNumberChange} />
          </label>
          <label>
            Part Description:
            <input type="text" value={this.state.partDescriptionInput} onChange={this.handlePartDescriptionChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h2>Part Number Data</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Part Number</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {this.state.partNumberData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.partNumber}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2>Part Description Data</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Part Number</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {this.state.partDescriptionData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.partNumber}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Configuration;
