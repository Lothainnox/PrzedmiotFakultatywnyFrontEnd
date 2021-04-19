import React from "react";

interface CounterProps {
   initialNumber?: number;
   onNumberChange?: (someNumber: number) => void;
}

const Counter: React.FC<CounterProps> = ({ initialNumber, onNumberChange }) => {
   const [counterNumber, setNumber] = React.useState(initialNumber || 0);
   const decreaseNumber = () => {
      const number = counterNumber - 1;
      setNumber(number);
      // if (onNumberChange) {
      //     onNumberChange(number);
      // } is equal to:
      onNumberChange && onNumberChange(number);
   };
   const increaseNumber = () => {
      const number = counterNumber + 1;
      setNumber(number);
      onNumberChange && onNumberChange(number);
   };
   return (
      <div>
         <button onClick={increaseNumber}>+</button>
         {counterNumber}
         <button onClick={decreaseNumber}>-</button>
      </div>
   );
};
export default Counter;
