import React, { useState } from "react";
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
   ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

import colors from "../theme/color";

const SignUpScreen = (props) => {
   const [isEmail, setIsEmail] = useState(true);
   const [date, setDate] = useState(new Date());
   const [mode, setMode] = useState(null);
   const [show, setShow] = useState(false);
   const [isPassVisible, setIsPassVisible] = useState(false);

   const formatedDate =
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
      "-" +
      (date.getMonth() < 10
         ? "0" + (date.getMonth() + 1)
         : date.getMonth() + 1) +
      "-" +
      date.getFullYear();

   const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === "ios");
      setDate(currentDate);
   };

   const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
   };

   return (
      <ScrollView
         style={{
            backgroundColor: colors.backgroundColor,
         }}
         contentContainerStyle={{ flex: 1 }}
      >
         <View
            style={{
               flex: 1,
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
                  marginTop: "10%",
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
                  Sign Up
               </Text>
               <View style={{ width: "100%" }}>
                  <View
                     style={{
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginVertical: 8,
                     }}
                  >
                     <TextInput
                        placeholder="First Name"
                        style={{
                           backgroundColor: "#ddd",
                           paddingVertical: 8,
                           width: "48%",
                           paddingHorizontal: 10,
                        }}
                        textContentType="name"
                     />
                     <TextInput
                        placeholder="Last Name"
                        style={{
                           backgroundColor: "#ddd",
                           paddingVertical: 8,
                           width: "48%",
                           paddingHorizontal: 10,
                        }}
                        textContentType="familyName"
                     />
                  </View>
                  <TouchableOpacity
                     onPress={() => showMode("date")}
                     activeOpacity={0.8}
                     style={{
                        backgroundColor: "#ddd",
                        paddingVertical: 12,
                        width: "100%",
                        paddingHorizontal: 10,
                        marginVertical: 8,
                     }}
                  >
                     <Text
                        style={{
                           color: !mode ? colors.textSecondary : "black",
                        }}
                     >
                        {!mode ? "Birthdate" : formatedDate}
                     </Text>
                     {show && (
                        <DateTimePicker
                           testID="dateTimePicker"
                           value={date}
                           mode={mode}
                           is24Hour={true}
                           display="default"
                           onChange={onChange}
                           maximumDate={new Date()}
                        />
                     )}
                  </TouchableOpacity>

                  <TextInput
                     placeholder={isEmail ? "Email" : "Phone"}
                     style={{
                        backgroundColor: "#ddd",
                        paddingVertical: 8,
                        width: "100%",
                        paddingHorizontal: 10,
                        marginVertical: 8,
                     }}
                     textContentType="emailAddress"
                     keyboardType="email-address"
                  />

                  <View
                     style={{
                        marginVertical: 8,
                     }}
                  >
                     <View
                        style={{
                           backgroundColor: "#ddd",
                           width: "100%",
                           flexDirection: "row",
                           alignItems: "center",
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
                           textContentType="newPassword"
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
                     {/* <TextInput
                        placeholder="Password"
                        style={{
                           backgroundColor: "#ddd",
                           paddingVertical: 8,
                           width: "100%",
                           paddingHorizontal: 10,
                        }}
                        textContentType="newPassword"
                        secureTextEntry={true}
                     /> */}
                     <TouchableOpacity
                        onPress={() => setIsEmail(!isEmail)}
                        activeOpacity={0.6}
                        style={{ alignSelf: "center", marginTop: 10 }}
                     >
                        <Text style={{ color: colors.textSecondary }}>
                           Sign Up using {isEmail ? "mobile number" : "email"}
                        </Text>
                     </TouchableOpacity>
                  </View>
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
                     style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                     }}
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
                     Sign In
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </ScrollView>
   );
};

export default SignUpScreen;
