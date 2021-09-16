import React from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../theme/color";

const Container = (props) => {
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
         <Text style={{ flex: 1 }} numberOfLines={1}>
            {props.input}
         </Text>
         <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color={colors.textSecondary}
         />
      </View>
   );
};

const profileScreen = (props) => {
   return (
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
               <View
                  style={{
                     width: "100%",
                     flexDirection: "row",
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
                     <Text style={{ color: colors.textSecondary }}>Name</Text>
                  </View>
                  <Text>Fannie Jackson</Text>
               </View>

               <Container input="********" type="Password" />
               <Container input="+91 9513121212" type="Phone" />
               <Container input="jack@example.com" type="Email" />
               <Container input="Oct 01, 1991" type="Birthdate" />
               <Container input="10 A" type="Class" />
               <View
                  style={{
                     paddingVertical: 13,
                     width: "100%",
                     backgroundColor: "#3283c9",
                     alignItems: "center",
                     marginVertical: 10,
                     borderRadius: 10,
                  }}
               >
                  <Text
                     style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                     }}
                  >
                     Save
                  </Text>
               </View>
            </View>
         </View>
      </ScrollView>
   );
};

export default profileScreen;
