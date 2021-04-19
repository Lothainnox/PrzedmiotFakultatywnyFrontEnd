import React from 'react';

interface CustomButtonProps {
   name: string;
   behaviourOnClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ name, behaviourOnClick }) => {
   return <button onClick={behaviourOnClick}>{name}</button>;
};

export default CustomButton;
