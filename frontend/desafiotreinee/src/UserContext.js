import React from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  return (
    <UserContext.Provider value={{ error }}>{children}</UserContext.Provider>
  );
};
