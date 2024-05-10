import React, { Component } from 'react';
import './Configuration.css';

interface ConfigurationProps {}

interface ConfigurationState {
  selectedOptions: {
    initial: string | null;
    additional: string | null;
  };
  expandedOptions: { [key: string]: boolean };
}

class Configuration extends Component<ConfigurationProps, ConfigurationState> {
  constructor(props: ConfigurationProps) {
    super(props);
    this.state = {
      selectedOptions: {
        initial: null,
        additional: null,
      },
      expandedOptions: {
        '1U': false,
        '2U': false,
        '3U': false,
        '4U': false,
        'additionalOptions': false,
      },
    };
  }

  handleButtonClick = (option: string) => {
    this.setState((prevState) => ({
      expandedOptions: {
        ...prevState.expandedOptions,
        [option]: !prevState.expandedOptions[option],
      },
    }));
  };

  handleOptionSelect = (option: string) => {
    this.setState((prevState) => ({
      selectedOptions: {
        ...prevState.selectedOptions,
        initial: option,
      },
    }));
  };

  handleAdditionalOptionSelect = (option: string) => {
    this.setState((prevState) => ({
      selectedOptions: {
        ...prevState.selectedOptions,
        additional: option,
      },
    }));
  };

  render() {
    return (
      <div className="container">
        {/* Original 4 buttons */}
        <div className="initial-buttons">
          {['1U', '2U', '3U', '4U'].map((option) => (
            <div key={option} className="initial-button">
              <button onClick={() => this.handleButtonClick(option)}>{option}</button>
             
            </div>
          ))}
        </div>

        <table className="table-with-buttons">
          <tbody>
            {[1, 2, 3, 4].map((index) => (
              <tr key={index}>
                <td>
                  <button onClick={() => this.handleButtonClick(`Table${index}`)}>Press me</button>
                </td>
                <td>Column 2</td>
                <td>Column 3</td>
                <td>Column 4</td>
              </tr>
            ))}
          </tbody>
        </table>

       
      </div>
    );
  }
}

export default Configuration;
