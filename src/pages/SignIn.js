import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '8px' }}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
        />
        <label style={{ display: 'block', marginBottom: '8px' }}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#5b56e9',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
