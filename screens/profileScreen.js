import React, { useState, useEffect } from "react";
import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image,
   TextInput,
   TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../theme/color";
import { AUTH_API_URL } from "../keys";
import AsyncStorage from "@react-native-async-storage/async-storage";
import noTokenHandler from "../global/noTokenHandler";

const Container = (props) => {
   // const CustomText = props.isEditing ? TextInput : Text;
   console.log(props.isEditing);
   return (
      <View
         style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 15,
            borderRadius: 10,
            elevation: 3,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.26,
            shadowRadius: 10,
            backgroundColor: "white",
            paddingVertical: 13,
            paddingHorizontal: 15,
         }}
      >
         <View style={{ width: "30%", minWidth: 50 }}>
            <Text style={{ color: colors.textSecondary }}>{props.type}</Text>
         </View>
         {props.isEditing ? (
            <TextInput style={{ flex: 1 }} numberOfLines={1}>
               {props.input}
            </TextInput>
         ) : (
            <Text style={{ flex: 1 }} numberOfLines={1}>
               {props.input}
            </Text>
         )}

         {/* <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color={colors.textSecondary}
         /> */}
      </View>
   );
};

const profileScreen = (props) => {
   const [data, setData] = useState({});
   const [loading, setLoading] = useState(true);
   const [isEditing, setIsEditing] = useState(false);
   let token;

   useEffect(() => {
      fetchUserData();
   }, []);

   const fetchUserData = async () => {
      token = await AsyncStorage.getItem("token");
      if (!token || token == "") {
         return noTokenHandler(props);
      }
      try {
         const response = await fetch(`${AUTH_API_URL}/user`, {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
               Authorization: "Token " + token,
            },
         });
         const data = await response.json();
         console.log(data);

         setData(data);
      } catch (err) {
         console.log(err);
      }
      setLoading(false);
   };

   return (
      <>
         {loading ? (
            <View
               style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <Text>Loading...</Text>
            </View>
         ) : (
            <ScrollView
               style={{ backgroundColor: colors.backgroundColor }}
               showsVerticalScrollIndicator={false}
            >
               <View
                  style={{
                     flex: 1,
                     paddingHorizontal: 20,
                     paddingVertical: 30,
                     alignItems: "center",
                  }}
               >
                  <Image
                     source={{ uri: "https://picsum.photos/100" }}
                     style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                     }}
                  />
                  <View style={{ flex: 1, width: "100%", marginTop: 30 }}>
                     <Container
                        input={data.firstname + " " + data.lastname}
                        type="Name"
                        isEditing={isEditing}
                     />
                     {/* <Container input="********" type="Password" /> */}
                     <Container
                        input={data.phone_number}
                        type="Phone"
                        isEditing={isEditing}
                     />
                     <Container
                        input={data.email}
                        type="Email"
                        isEditing={isEditing}
                     />
                     <Container
                        input={data.birthdate}
                        type="Birthdate"
                        isEditing={isEditing}
                     />
                     <Container
                        input="10 A"
                        type="Class"
                        isEditing={isEditing}
                     />
                     {/* <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => setIsEditing(!isEditing)}
                        style={{
                           paddingVertical: 13,
                           width: "100%",
                           backgroundColor: isEditing ? "#3283c9" : "white",
                           borderColor: "#3283c9",
                           borderWidth: isEditing ? 0 : 1,
                           alignItems: "center",
                           marginVertical: 10,
                           borderRadius: 10,
                        }}
                     >
                        <Text
                           style={{
                              color: isEditing ? "white" : "#3283c9",
                              fontSize: 16,
                              fontWeight: "bold",
                           }}
                        >
                           {isEditing ? "Save" : "Edit"}
                        </Text>
                     </TouchableOpacity> */}
                  </View>
               </View>
            </ScrollView>
         )}
      </>
   );
};

export default profileScreen;
