import React from 'react';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
