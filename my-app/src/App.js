import React, { useState } from 'react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      id="root"
      className={isDarkMode ? 'dark-mode' : ''}
      onClick={toggleDarkMode}
    >
      <h1>나는 신발이 없음을 한탄했는데, <br /> 길에서 발이 없는 사람을 만났다.</h1>
    </div>
  );
};

export default App;
