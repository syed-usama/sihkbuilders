import React, {createContext, useState} from 'react';
import { showToast } from '../toast/shortToast';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password,changeLoader) => {
          try {
            setUser({
              id:'12345',
              name:'admin',
              phone:'+923017508089',
              email:email,
              password:password,
            })
            changeLoader();
          } catch (e) {
            showToast("Incorrect Email or Password")
            changeLoader();
          }
        },
        logout: async () => {
          try {
            setUser('')
          } catch (e) {
            console.log(e);
          }
        },
        passwordReset: async (email , changeLoader) => {
            changeLoader('true');
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
