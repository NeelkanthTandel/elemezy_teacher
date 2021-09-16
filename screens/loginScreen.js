import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../theme/color";

const LoginScreen = (props) => {
   const [isPassVisible, setIsPassVisible] = useState(false);

   return (
      <View
         style={{
            flex: 1,
            backgroundColor: colors.backgroundColor,
            alignItems: "center",
            paddingHorizontal: 40,
            justifyContent: "center",
            paddingTop: "10%",
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
            <View
               style={{
                  backgroundColor: colors.textPrimary,
                  paddingVertical: 12,
                  width: 120,
                  alignItems: "center",
                  borderRadius: 100,
                  marginTop: 30,
               }}
            >
               <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
               >
                  SIGN IN
               </Text>
            </View>
         </View>
         <View style={{ marginVertical: 20, flexDirection: "row" }}>
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
         </View>
      </View>
   );
};

export default LoginScreen;
