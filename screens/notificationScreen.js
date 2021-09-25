import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import colors from "../theme/color";

const notificationSceen = (props) => {
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
            }}
         >
            <Text>No Notification</Text>
         </View>
      </ScrollView>
   );
};

export default notificationSceen;
