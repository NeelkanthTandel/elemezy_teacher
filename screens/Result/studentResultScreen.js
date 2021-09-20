import React, { useState } from "react";
import {
   StyleSheet,
   View,
   ScrollView,
   Text,
   TouchableOpacity,
   TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../../theme/color";

const studentResult = (props) => {
   return (
      <ScrollView
         style={{ backgroundColor: colors.backgroundColor }}
         showsVerticalScrollIndicator={false}
      >
         <View
            style={{
               flex: 1,
               paddingTop: 30,
               paddingHorizontal: 20,
               backgroundColor: "white",
            }}
         >
            <View
               style={{
                  flexDirection: "row",
                  marginBottom: 30,
                  alignItems: "center",
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
               <Text
                  style={{
                     fontSize: 24,
                     fontWeight: "700",
                     lineHeight: 24,
                     color: colors.textPrimary,
                     marginTop: 5,
                     flex: 1,
                     textAlign: "center",
                  }}
               >
                  View Result
               </Text>
               <MaterialIcons
                  name="keyboard-arrow-left"
                  size={35}
                  color={colors.backgroundColor}
               />
            </View>
            <View>
               <View
                  style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                  }}
               >
                  <Text style={{ fontSize: 16 }}>
                     Name:{" "}
                     <Text
                        style={{
                           color: colors.textPrimary,
                           fontSize: 16,
                           fontWeight: "bold",
                        }}
                     >
                        Santosh
                     </Text>
                  </Text>
                  <Text>Overall: Distinction</Text>
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                     marginTop: 10,
                  }}
               >
                  <Text>Unit Test</Text>
                  <Text>20-07-2021</Text>
               </View>
               <View style={{ marginTop: 30 }}>
                  <View style={{ flexDirection: "row", width: "100%" }}>
                     <Text style={{ width: "33%", fontWeight: "bold" }}>
                        Subject
                     </Text>
                     <Text style={{ width: "27%", fontWeight: "bold" }}>
                        Marks obt.
                     </Text>
                     <Text style={{ width: "20%", fontWeight: "bold" }}>
                        Out Of
                     </Text>
                     <Text style={{ width: "20%", fontWeight: "bold" }}>
                        Grade
                     </Text>
                  </View>
                  <View
                     style={{
                        flexDirection: "row",
                        width: "100%",
                        marginTop: 10,
                     }}
                  >
                     <Text style={{ width: "33%" }}>English</Text>
                     <Text style={{ width: "27%" }}>90</Text>
                     <Text style={{ width: "20%" }}>100</Text>
                     <Text style={{ width: "20%" }}>A+</Text>
                  </View>
               </View>
            </View>
         </View>
      </ScrollView>
   );
};
export default studentResult;
