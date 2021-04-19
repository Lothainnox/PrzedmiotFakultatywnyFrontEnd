import React from 'react';
import './App.css';
import CustomHeader from './components/CustomHeader';
import Counter from './components/Counter';

const App = () => {
   const [changedNumber, setChangedNumber] = React.useState(0);
   const handleNumberChange = (newNumber: number) => {
      setChangedNumber(newNumber);
   };
   const checkValue = (number: number) => {
      if (changedNumber < -10) {
         return 'Liczba jest mniejsza od -10';
      }
      if (changedNumber > 10 && changedNumber <= 15) {
         return 'Liczba jest większa od 10';
      }
      if (changedNumber > 15) {
         return 'Liczba przekroczona';
      }
   };

   return (
      <div className="App">
         <CustomHeader>
            <Counter onNumberChange={handleNumberChange} />
            {checkValue(changedNumber)}
         </CustomHeader>
      </div>
   );
};

export default App;
