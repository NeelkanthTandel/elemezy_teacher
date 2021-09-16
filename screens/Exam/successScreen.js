import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../theme/color";

const successScreen = (props) => {
   return (
      <ScrollView
         style={{ backgroundColor: colors.backgroundColor }}
         showsVerticalScrollIndicator={false}
      >
         <View
            style={{
               flex: 1,
               backgroundColor: colors.backgroundColor,
               paddingHorizontal: 20,
               paddingVertical: 30,
               alignItems: "center",
            }}
         >
            <Text
               style={{
                  color: colors.textPrimary,
                  fontSize: 24,
                  fontWeight: "bold",
               }}
            >
               Success !
            </Text>
            <Ionicons
               name="ios-checkmark-circle-outline"
               size={100}
               color="green"
               style={{ marginVertical: 30 }}
            />
            <Text
               style={{
                  color: colors.textPrimary,
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 20,
               }}
            >
               Your examination has been scheduled
            </Text>
            <TouchableOpacity>
               <Text
                  style={{ color: "#3283c9", fontWeight: "bold", fontSize: 16 }}
                  onPress={() => props.navigation.navigate("home")}
               >
                  Back To Exam
               </Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
   );
};

export default successScreen;
