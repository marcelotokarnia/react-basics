import { useState } from 'react';
import logo from './logo.svg';

const Rotating = () => {
  const [isRotating, setIsRotating] = useState(true);
  return (
    <div
      onMouseEnter={() => setIsRotating(false)}
      onMouseLeave={() => setIsRotating(true)}
    >
      <img
        src={logo}
        className={isRotating ? 'App-logo App-logo-rotating' : 'App-logo'}
        alt="logo"
      />
    </div>
  );
};

export default Rotating;
