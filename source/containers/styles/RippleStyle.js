import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
const { width } = Dimensions.get('window');
//configurable dynmaic themes
const rippleStyles = () => {
    const { colors } = useTheme();
  return StyleSheet.create({
    container: {
        flex: 1,
      },
      ButtonStyle: {   
        position: 'absolute',
        width: width,
        height: 40,
        bottom: 0,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
      },
      Text: {
        color: colors.textcolor,
        fontSize: 14,
      },
  });
};

export default rippleStyles;
