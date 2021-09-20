import React, { useState } from "react";
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
   ScrollView,
   Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from "../theme/color";
import { AUTH_API_URL } from "../keys";

const SignUpScreen = (props) => {
   const [loading, setLoading] = useState(false);
   const [isEmail, setIsEmail] = useState(true);
   const [date, setDate] = useState(new Date());
   const [mode, setMode] = useState(null);
   const [show, setShow] = useState(false);
   const [isPassVisible, setIsPassVisible] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [phone, setPhone] = useState("");

   const birthDate =
      date.getFullYear() +
      "-" +
      (date.getMonth() < 10
         ? "0" + (date.getMonth() + 1)
         : date.getMonth() + 1) +
      "-" +
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());

   const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === "ios");
      setDate(currentDate);
   };

   const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
   };

   const validateEmail = (email) => {
      const re =
         /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
   };

   const validatePassword = (password) => {
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return re.test(password);
   };

   const validatePhone = (phone) => {
      const re = /^[1-9]\d{9}$/;
      return re.test(phone);
   };

   const registerHandler = async () => {
      setLoading(true);
      if (
         !email ||
         !password ||
         !firstName ||
         !lastName ||
         !mode ||
         !phone ||
         email == "" ||
         password == "" ||
         firstName == "" ||
         lastName == "" ||
         phone == ""
      ) {
         Alert.alert("Error", "Something is missing!!");
      } else if (!validatePhone(phone)) {
         Alert.alert("Error", "Please enter valid phone number.");
      } else if (!validateEmail(email)) {
         Alert.alert("Error", "Please enter valid email.");
      } else if (!validatePassword(password)) {
         Alert.alert(
            "Error",
            "Password does not meet following requirements:\nMinimum of eight characters\nAt least one letter and one number."
         );
      } else {
         return await sendRegisterData();
      }
      setLoading(false);
   };

   const sendRegisterData = async () => {
      console.log(birthDate);
      try {
         const response = await fetch(`${AUTH_API_URL}/register`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               firstname: firstName,
               lastname: lastName,
               email,
               password,
               birthdate: birthDate,
               phone_number: phone,
               is_manager: true,
               is_student: false,
               is_teacher: true,
            }),
         });
         const data = await response.json();
         console.log(data);
         if (data.token) {
            console.log(data);
            AsyncStorage.setItem("token", data.token);
            return props.navigation.dispatch(StackActions.replace("Drawer"));
         } else if (data.email[0]) {
            Alert.alert("Error", data.email[0]);
            return setLoading(false);
         } else {
            console.log(data);
            return setLoading(false);
         }
      } catch (err) {
         console.log(err);
         if (err.message == "Network request failed") {
            Alert.alert("Error", "Check your network!");
         }
      }
      setLoading(false);
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
                        onChangeText={(val) => setFirstName(val)}
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
                        onChangeText={(val) => setLastName(val)}
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
                        {!mode ? "Birthdate" : birthDate}
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
                     placeholder="Phone"
                     style={{
                        backgroundColor: "#ddd",
                        paddingVertical: 8,
                        width: "100%",
                        paddingHorizontal: 10,
                        marginVertical: 8,
                     }}
                     textContentType="telephoneNumber"
                     keyboardType="phone-pad"
                     onChangeText={(val) => setPhone(val)}
                  />

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
                     onChangeText={(val) => setEmail(val)}
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
                     {/* <TouchableOpacity
                        onPress={() => setIsEmail(!isEmail)}
                        activeOpacity={0.6}
                        style={{ alignSelf: "center", marginTop: 10 }}
                     >
                        <Text style={{ color: colors.textSecondary }}>
                           Sign Up using {isEmail ? "mobile number" : "email"}
                        </Text>
                     </TouchableOpacity> */}
                  </View>
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
                  onPress={registerHandler}
                  disabled={loading}
               >
                  <Text
                     style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                     }}
                  >
                     SIGN UP
                  </Text>
               </TouchableOpacity>
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
