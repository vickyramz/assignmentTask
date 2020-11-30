/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Easing,
  SafeAreaView,
  View,
  Dimensions,

} from 'react-native';
const WIDTH=Dimensions.get('window').width
import { useTheme } from '@react-navigation/native';
import styles from '../containers/styles/welcomeStyles/welcomeStyle'
import { TextInput ,Button} from 'react-native-paper';
function Welcome(props) {
  const [Name,setName]=useState('')  
  const animatedValue = new Animated.Value(0);
  const animatedValuescale=new Animated.Value(0);
  const animatedValueswiprtranslate=new Animated.Value(0);
  const { colors } = useTheme();
  const scale = {
    transform: [
      {
        translateY:animatedValuescale.interpolate({
          inputRange: [0, 1],
          outputRange: [60, 0],
        })
      }
    ]
  };
  const InitianlAnimate=()=> {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 350,
      useNativeDriver:true,
      easing: Easing.linear,
    }).start()
    Animated.timing(animatedValuescale, {
      toValue: 1,
      duration: 350,
      useNativeDriver:true,
      easing: Easing.linear,
    }).start()
    Animated.timing(animatedValueswiprtranslate, {
      toValue: 1,
      duration: 350,
      useNativeDriver:true,
      easing: Easing.linear,
    }).start(()=>{setTimeout(() => {
    }, 200); })
  }
  useEffect(()=>{
//animation
InitianlAnimate()
  },[])

    return (  
      <SafeAreaView style={{flex:1}}>
          <View style={[styles.container,{backgroundColor:colors.background}]}>
              <View >
              <TextInput  
          mode={'flat'}
          placeholderTextColor={colors.text}
      label={global.const.place_Holder}
      value={Name}
      onChangeText={text => setName(text)}
    />
              </View>
          <View>
          <Button icon="next" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
          </View>
          </View>
     </SafeAreaView>
    )
  }

export default Welcome;
