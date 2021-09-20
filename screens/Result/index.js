import React from "react";
import {
   StyleSheet,
   View,
   Text,
   ScrollView,
   TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../theme/color";

const TabContainer = (props) => {
   return (
      <TouchableOpacity
         onPress={props.onPress}
         activeOpacity={0.6}
         style={{
            backgroundColor: "#3283c9",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 15,
            width: "48%",
            borderRadius: 5,
         }}
      >
         {props.view ? (
            <MaterialCommunityIcons
               name="eye-circle-outline"
               size={28}
               style={{ marginVertical: 8 }}
               color="white"
            />
         ) : (
            <Ionicons
               name="ios-add-circle-outline"
               size={28}
               style={{ marginVertical: 8 }}
               color="white"
            />
         )}
         <Text
            style={{
               fontSize: 14,
               color: "white",
               fontWeight: "bold",
            }}
         >
            {props.title}
         </Text>
      </TouchableOpacity>
   );
};
const index = (props) => {
   return (
      <ScrollView
         style={{ backgroundColor: colors.backgroundColor }}
         showsVerticalScrollIndicator={false}
      >
         <View
            style={{
               flex: 1,
               alignItems: "center",
               paddingTop: 30,
               paddingHorizontal: 20,
               backgroundColor: "white",
            }}
         >
            <Text
               style={{
                  fontSize: 24,
                  fontWeight: "700",
                  lineHeight: 24,
                  color: colors.textPrimary,
               }}
            >
               Result
            </Text>
            <View
               style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 30,
               }}
            >
               <TabContainer
                  title="ADD NEW EXAM"
                  onPress={() => props.navigation.navigate("addResult")}
               />
               <TabContainer
                  title="VIEW RESULT"
                  onPress={() => props.navigation.navigate("viewResult")}
                  view
               />
            </View>
         </View>
      </ScrollView>
   );
};

export default index;
