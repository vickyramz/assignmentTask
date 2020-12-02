import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { useTheme } from "@react-navigation/native";
const { height } = Dimensions.get("window");
//configurable dynmaic themes

const Homestyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end",
  },
  buttonStyle: {
    padding: 20,
  },
  coloredButton: {
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    
  },
});

export default Homestyle;
