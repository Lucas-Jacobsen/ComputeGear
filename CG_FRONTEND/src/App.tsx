import React from 'react';
import PartTable from './components/PartTable/PartTable';
import CreatePart from './components/CreatePart/CreatePart';
import POTS from './components/POTS/POTS';
import Configuration from './components/Configuration/Configuration';
const App: React.FC = () => {
  return (
    <div>
      <header>
        <h1>My Parts Application</h1>
      </header>
      <main>
        <PartTable />
        <CreatePart /><br/> <hr/> <br/>
        <Configuration /> <br/> <hr/> <br/>
        <POTS /> 
      </main>
      <footer>
        <p>Footer content goes here</p>
      </footer>
    </div>
  );
};

export default App;
