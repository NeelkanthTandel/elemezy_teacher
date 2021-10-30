import React, { useEffect } from "react";
import { View, Image, Button } from "react-native";
import MainNavigator from "./navigation/mainNavigator";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import User from "./store/reducers/user";

enableScreens(true);

const rootReducer = combineReducers({
   users: User,
});
const store = createStore(rootReducer);

export default function App() {
   return (
      <Provider store={store}>
         <MainNavigator />
      </Provider>
   );
}
