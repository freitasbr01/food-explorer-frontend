import { createContext, useContext, useState, useEffect } from 'react';
import { USER_ROLE } from '../utils/roles';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({ role: USER_ROLE.CUSTOMER }); // Apenas para fazer o front, depois excluo e uso o de baixo.
  // const [data, setData] = useState({});

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )

};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };