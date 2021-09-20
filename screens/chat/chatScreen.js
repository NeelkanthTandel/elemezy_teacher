import React from "react";
import {
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
   TextInput,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import colors from "../../theme/color";

const chatScreen = (props) => {
   return (
      <>
         <View
            style={{
               flexDirection: "row",
               alignItems: "center",
               paddingVertical: 15,
               paddingHorizontal: 10,
               borderBottomWidth: 1,
               borderBottomColor: colors.textSecondary,
               backgroundColor: colors.backgroundColor,
            }}
         >
            <TouchableOpacity
               onPress={() => {
                  props.navigation.goBack();
               }}
            >
               <MaterialIcons
                  name="keyboard-arrow-left"
                  size={35}
                  color={colors.textPrimary}
               />
            </TouchableOpacity>
            <View
               style={{
                  flex: 1,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
               }}
            >
               <View
                  style={{
                     width: 35,
                     height: 35,
                     borderRadius: 40,
                     backgroundColor: "grey",
                     marginRight: 10,
                  }}
               />
               <View>
                  <Text
                     style={{
                        fontSize: 18,
                        lineHeight: 20,
                        fontWeight: "bold",
                        color: colors.textPrimary,
                        flex: 1,
                     }}
                  >
                     {props.route.params.name}
                  </Text>
                  <Text style={{ fontSize: 12 }}>Student</Text>
               </View>
            </View>
            <MaterialIcons
               name="keyboard-arrow-left"
               size={35}
               color={colors.backgroundColor}
            />
         </View>
         {/* chat section to be rendered in FlatList */}
         <View
            style={{
               flex: 1,
               backgroundColor: colors.backgroundColor,
               paddingHorizontal: 15,
               paddingVertical: 15,
            }}
         >
            <View
               style={{
                  maxWidth: "80%",
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  borderRadius: 10,
                  backgroundColor: "#e8f4ff",
                  alignSelf: "flex-start",
                  marginBottom: 10,
               }}
            >
               <Text>Hello I am Person</Text>
               <Text
                  style={{
                     textAlign: "right",
                     color: colors.textSecondary,
                     fontSize: 12,
                  }}
               >
                  12:00 AM
               </Text>
            </View>
            <View
               style={{
                  maxWidth: "80%",
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  borderRadius: 10,
                  backgroundColor: "#e8f4ff",
                  alignSelf: "flex-end",
                  marginBottom: 10,
               }}
            >
               <Text>
                  Hello I am Neelkanth Hello I am Neelkanth Hello I am Neelkanth
               </Text>
               <Text
                  style={{
                     textAlign: "right",
                     color: colors.textSecondary,
                     fontSize: 12,
                  }}
               >
                  12:00 AM
               </Text>
            </View>
         </View>
         <View
            style={{
               width: "100%",
               backgroundColor: colors.backgroundColor,
               paddingVertical: 8,
               flexDirection: "row",
               paddingHorizontal: 15,
               alignItems: "center",
            }}
         >
            <TextInput
               placeholder="Type here"
               style={{
                  flex: 1,
                  paddingVertical: 6,
                  paddingHorizontal: 10,
                  borderWidth: 1,
                  borderColor: colors.textPrimary,
                  borderRadius: 10,
                  marginRight: 15,
               }}
            />
            <TouchableOpacity>
               <Ionicons name="ios-send" size={25} color={colors.textPrimary} />
            </TouchableOpacity>
         </View>
      </>
   );
};

export default chatScreen;
