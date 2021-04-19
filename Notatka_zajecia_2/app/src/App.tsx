import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CustomHeader2 from './components/CustomHeader';
import Counter from './components/Counter'
// import { Divider } from '@material-ui/core';

// const CustomHeader = () => (
//   <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
// )

const App = () => {
  const [changedNumber, setChangedNumber] = React.useState(0);

  const handleNumberChange = (newNumber: number) => {
    setChangedNumber(newNumber);
  }

  const numberBelowZero = (number: number) => {
    if (number < 0) {
      return (<div>Number is smaller than 0!</div>)
    }
  }
  return (
    <div className="App">
      <CustomHeader2>
        <Counter onNumberChange={handleNumberChange} />
        {
          changedNumber > 0 && (<div>Number is greater than 0!</div>)
        }
        {numberBelowZero(changedNumber)};
      </CustomHeader2>
    </div>
  );
}

export default App;
