import { Alert } from "react-native";
import { StackActions } from "@react-navigation/native";

const noTokenHandler = (props) => {
   Alert.alert("Error", "Something went wrong, Please Login Again", [
      { text: "Go To Login", onPress: () => goToLoginHandler(props) },
   ]);
};
const goToLoginHandler = (props) => {
   props.navigation.dispatch(StackActions.replace("Launch"));
};

export default noTokenHandler;
