import React, { useState } from 'react';
import { useAuthContext } from '../lib/AuthContext';
import Button from './Button';
import DialogBox from './DialogBox';

const AuthPage: React.FC = () => {
  const { user, login, logout, register } = useAuthContext();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await register(email, password, name);
      } else {
        await login(email, password);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  const [dialogOpened, setDialogOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setDialogOpened(true)}>
        {user ? user.name : 'Login'}
      </Button>
      <DialogBox dialogOpened={dialogOpened} closeModal={
        () => setDialogOpened(false)
      }>
        <div className='flex flex-col w-full h-full'>
          {user ? <div>
            <h2>Welcome, {user.name}!</h2>
            <p>Email: {user.email}</p>
            <h3>Your Teams:</h3>
            <ul>
              {user.teams.map((team, index) => (
                <li key={index}>{team}</li>
              ))}
            </ul>
            <Button onClick={logout}>Logout</Button>
          </div> : <div>
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {
                isRegistering ? <>
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </> : null
              }
              <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
            </form>
            <button onClick={() => setIsRegistering(!isRegistering)}>
              {isRegistering ? 'Back to Login' : 'Need to Register?'}
            </button>
          </div>}
        </div>
      </DialogBox>
    </>
  )
};

export default AuthPage;