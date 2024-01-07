// PasswordInput.js
import React, { useState } from 'react';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label>Password:</label>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleTogglePassword}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </button>
    </div>
  );
};

export default PasswordInput;
