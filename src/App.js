import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [customerName, setCustomerName] = useState("");
  const [cutomerPassword, setCustomerPassword] = useState("");

  return (
    <div className="App">
      <div className='App__form'>
        <input 
          type='text'
          placeholder='Name'
          value={customerName}
          onChange={(e) => {setCustomerName(e.target.value)}}
        />
        <input
          type='text'
          placeholder='Password'
          value={setCustomerPassword}
          onChange={ (e) => {setCustomerPassword(e.target.value)}}
        />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
