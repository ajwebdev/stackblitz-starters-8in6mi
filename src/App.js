import React, { useState } from 'react';
import * as _ from 'lodash';
import './style.css';

export default function App() {
  const [triCount, setTriCount] = useState(0);
  const [clickedCount, setClickedCount] = useState(0);
  const debouncedCount = _.debounce(() => {
    setTriCount(clickedCount + 1);
  }, 1000);

  const handleClick = () => {
    setClickedCount(1 + clickedCount);
    debouncedCount();
  };

  return (
    <div>
      <h1> Clicked count {clickedCount}</h1>
      <h1>Triggered count {triCount}</h1>

      <button onClick={handleClick}> clickedcount count</button>
      <br />
      <br />
    </div>
  );
}
