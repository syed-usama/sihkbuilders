import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import {AuthContext} from '../services/firebase/authProvider';

import { Provider as StoreProvider } from 'react-redux'
import store from '../redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DashboardStackNavigator, OnBoardStackNavigator } from './stackNavigator';

const Stack = createStackNavigator();
export default function Routes() {
  const {user, setUser} = useContext(AuthContext);
  const [initial , setInitial] = useState('Home');
  const [loading , setLoading] = useState(true);
  const checkDetails = async () => {
    try {
      const useremail = await AsyncStorage.getItem('useremail');
      if (useremail !== null) {
          setInitial('Onboarding5');
          setLoading(false)
      }else{
        setLoading(false)
      }
    } catch (e) {
      console.log(e);
      setLoading(false)
    }
  };
  useEffect(()=>{
    checkDetails()
  },[])
  if(loading){
    return null;
  }
  return (
    <NavigationContainer>
      {user ? 
      <StoreProvider store={store()}>
        <DashboardStackNavigator />
      </StoreProvider>
      : 
      <StoreProvider store={store()}>
        <OnBoardStackNavigator initial={initial}/>
      </StoreProvider>
      }
    </NavigationContainer> 
  );
}
