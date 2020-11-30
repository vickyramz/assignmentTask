import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
const { height } = Dimensions.get('window');
//configurable dynmaic themes

  
  const styles= StyleSheet.create({
    container: {
      flex: 1,
     justifyContent:'center',
     padding:20
    },
 
  });

export default styles;
