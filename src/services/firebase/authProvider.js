import React, {createContext, useState} from 'react';
import { showToast } from '../toast/shortToast';
import axios from 'axios';
import qs from 'qs';
import { baseUrl } from '../../global/constants';

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
            console.log('email:',email)
            console.log('password:',password)
            var headers = {
              'Authorization': 'cy5cyKw0yYiFZOevjelQ5rn9Pbk03eB7etaCwrjNTSXmEpeIBa7UYSPfWe90MpGg',
              'Content-Type': 'application/x-www-form-urlencoded',
          };
            await fetch(baseUrl+"/auth/validation", {
              method: 'POST',
              headers: headers,
              body: qs.stringify({
                  'email': email,
                  'password': password
              }),
          })
          .then(response => response.json())
              .then(response => {
                console.log('response',response)
                if(response.status){
                  changeLoader(true);
                  setUser(response.data)
                }else{
                  showToast(response.message)
                  changeLoader(false);
                }
              })
              .catch(error => {
                showToast("Something went wrong kindly try again")
                console.log('Something went wrong' + error);
                changeLoader(false);
            });
          } catch (e) {
            showToast("Something went wrong")
            changeLoader(false);
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
