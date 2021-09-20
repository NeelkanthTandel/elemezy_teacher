import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from "../theme/color";
import { AUTH_API_URL } from "../keys";

const LoginScreen = (props) => {
   const [isPassVisible, setIsPassVisible] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   // console.log(props.props);
   const sendLoginData = async () => {
      try {
         const response = await fetch(`${AUTH_API_URL}/login`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               email,
               password,
            }),
         });
         const data = await response.json();
         console.log(data.token != "");
         if (
            data.non_field_errors &&
            data.non_field_errors[0] == "Incorrect Credentials"
         ) {
            Alert.alert("Error", "Incorrect email or password");
            return setLoading(false);
         } else if (data.token != "") {
            console.log(data.token);
            AsyncStorage.setItem("token", data.token);
            if (data.user.is_teacher) {
               return props.navigation.dispatch(
                  StackActions.replace("Drawer", {})
               );
            } else {
               Alert.alert("Error", "This is not a teacher account");
               return setLoading(false);
            }
         } else {
            Alert.alert("Error", "Something went wrong!");
            return setLoading(false);
         }
      } catch (err) {
         console.log(err.message);
         if (err.message == "Network request failed") {
            Alert.alert("Error", "Check your network!");
         }
      }
      setLoading(false);
   };

   const loginHandler = async () => {
      setLoading(true);
      if (!email || !password || email == "" || password == "") {
         Alert.alert("Error", "Email or Password is empty.");
         setLoading(false);
      } else {
         await sendLoginData();
      }
   };

   return (
      <View
         style={{
            flex: 1,
            backgroundColor: colors.backgroundColor,
            alignItems: "center",
            paddingHorizontal: 40,
            justifyContent: "center",
         }}
      >
         <View
            style={{
               flex: 1,
               width: "100%",
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <Text
               style={{
                  marginBottom: "20%",
                  color: colors.textPrimary,
                  fontSize: 30,
                  fontWeight: "bold",
               }}
            >
               Sign In
            </Text>
            <View style={{ width: "100%" }}>
               <View>
                  <TextInput
                     placeholder="Email"
                     style={{
                        backgroundColor: "#ddd",
                        paddingVertical: 8,
                        width: "100%",
                        paddingHorizontal: 10,
                        marginVertical: 8,
                     }}
                     onChangeText={(val) => setEmail(val)}
                  />
               </View>
               <View
                  style={{
                     backgroundColor: "#ddd",
                     width: "100%",
                     flexDirection: "row",
                     alignItems: "center",
                     marginVertical: 8,
                  }}
               >
                  <TextInput
                     placeholder="Password"
                     style={{
                        backgroundColor: "#ddd",
                        paddingVertical: 8,
                        paddingHorizontal: 10,
                        flex: 1,
                     }}
                     textContentType="password"
                     secureTextEntry={!isPassVisible}
                     onChangeText={(val) => setPassword(val)}
                  />
                  <TouchableOpacity
                     style={{
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                     }}
                     activeOpacity={0.6}
                     onPress={() => setIsPassVisible(!isPassVisible)}
                  >
                     <Ionicons
                        name={isPassVisible ? "eye" : "eye-off"}
                        size={23}
                        color={colors.textSecondary}
                     />
                  </TouchableOpacity>
               </View>
               <TouchableOpacity style={{ alignSelf: "flex-end" }}>
                  <Text
                     style={{ color: colors.textSecondary, fontWeight: "bold" }}
                  >
                     Forgot Password?
                  </Text>
               </TouchableOpacity>
            </View>
            <TouchableOpacity
               style={{
                  backgroundColor: loading
                     ? colors.textSecondary
                     : colors.textPrimary,
                  paddingVertical: 12,
                  width: 120,
                  alignItems: "center",
                  borderRadius: 100,
                  marginTop: 30,
               }}
               activeOpacity={0.6}
               onPress={loginHandler}
               disabled={loading}
            >
               <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
               >
                  SIGN IN
               </Text>
            </TouchableOpacity>
         </View>
         {/* <View style={{ marginVertical: 20, flexDirection: "row" }}>
            <Text style={{ color: colors.textSecondary, fontSize: 16 }}>
               Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={props.onPress}>
               <Text
                  style={{
                     color: colors.textPrimary,
                     fontWeight: "bold",
                     fontSize: 16,
                  }}
               >
                  Sign Up
               </Text>
            </TouchableOpacity>
         </View> */}
      </View>
   );
};

export default LoginScreen;
