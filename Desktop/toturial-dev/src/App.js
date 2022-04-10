import React, { useState} from 'react';
import { Header } from './components/Header';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance'
import './App.css';

function App() {
  const [updatedFlag, setUpdatedFlag] = useState(false);

  const toggleUpdatedFlag = () => {
    setUpdatedFlag(updatedFlag => !updatedFlag);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <Balance updatedFlag={updatedFlag} />
        <TransactionHistory updatedFlag={updatedFlag} />
        <AddTransaction toggleUpdatedFlag={toggleUpdatedFlag} />
      </div>
    </div>
  );
}

export default App;
