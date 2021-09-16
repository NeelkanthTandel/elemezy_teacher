import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../theme/color";

const DatePickerButton = (props) => {
   return (
      <TouchableOpacity
         style={{
            flexDirection: "row",
            paddingHorizontal: 5,
            paddingVertical: 3,
            borderWidth: 0.5,
            borderRadius: 6,
            borderColor: colors.textSecondary,
            alignItems: "center",
            justifyContent: "center",
         }}
         onPress={props.onPress}
         activeOpacity={0.6}
      >
         <Text
            style={{
               fontWeight: "bold",
               letterSpacing: 0,
               fontSize: 12,
            }}
         >
            {props.date}
         </Text>
         <Ionicons
            name="ios-calendar"
            size={13}
            color={colors.textPrimary}
            style={{ marginLeft: 5 }}
         />
      </TouchableOpacity>
   );
};

export default DatePickerButton;
