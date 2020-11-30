/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {View} from 'react-native'
import WelcomeComponent from '../../../components/Welcome'
import { useTheme } from '@react-navigation/native';
const WelcomeScreen=(props)=> {
    const { colors } = useTheme();
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerStyle: {
                backgroundColor: colors.background,
              },
            headerTitle:global.const.welcomeTitle
        });
      }, []);
//action for navgation
const navigationaction=()=>{

}
    return (  
      
              <WelcomeComponent 
        Touch={()=>navigationaction()}
      />
     
    
    )
     
  }

export default WelcomeScreen;
