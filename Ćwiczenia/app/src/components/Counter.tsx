import React from 'react';
import CustomButton from './CustomButton';

interface CounterProps {
   initialNumber?: number;
   onNumberChange?: (someNumber: number) => void;
}

const Counter: React.FC<CounterProps> = ({ initialNumber, onNumberChange }) => {
   const [counterNumber, setNumber] = React.useState(initialNumber || 0);

   const decreaseNumber = () => {
      const number = counterNumber - 1;
      setNumber(number);
      onNumberChange && onNumberChange(number);
   };

   const increaseNumber = () => {
      const number = counterNumber + 1;
      setNumber(number);
      onNumberChange && onNumberChange(number);
   };

   const setInitialOrZero = () => {
      const number = initialNumber || 0;
      setNumber(number);
      onNumberChange && onNumberChange(number);
   };

   return (
      <div>
         <CustomButton name="Set 0" behaviourOnClick={setInitialOrZero}></CustomButton>
         <CustomButton name="Decrease" behaviourOnClick={decreaseNumber}></CustomButton>
         {counterNumber}
         <CustomButton name="Increase" behaviourOnClick={increaseNumber}></CustomButton>
      </div>
   );
};
export default Counter;
