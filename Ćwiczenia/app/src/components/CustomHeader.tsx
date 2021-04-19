import React from "react";

const CustomHeader: React.FC = ({ children }) => {
   return (
      <div>
         <p>Custom Header</p>
         {children}
      </div>
   );
};

export default CustomHeader;
