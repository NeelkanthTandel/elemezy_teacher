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
               fontSize: 12,
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
               Attendance
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
                  title="ADD ATTENDANCE"
                  onPress={() => props.navigation.navigate("addAttendance")}
               />
               <TabContainer
                  title="VIEW ATTENDANCE"
                  onPress={() => props.navigation.navigate("viewAttendance")}
                  view
               />
            </View>
            <View style={{ flex: 1, width: "100%" }}>
               <Text
                  style={{
                     fontSize: 20,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                  }}
               >
                  Pending Attendance
               </Text>
               <View
                  style={{
                     flexDirection: "row",
                     width: "100%",
                     marginTop: 15,
                     marginBottom: 10,
                  }}
               >
                  <Text style={{ width: "20%", fontWeight: "bold" }}>
                     Class
                  </Text>
                  <Text style={{ width: "25%", fontWeight: "bold" }}>
                     Subject
                  </Text>
                  <Text style={{ width: "30%", fontWeight: "bold" }}>Date</Text>
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     width: "100%",
                     alignItems: "center",
                     marginBottom: 10,
                  }}
               >
                  <Text style={{ width: "20%" }}>10A</Text>
                  <Text style={{ width: "25%" }}>English</Text>
                  <Text style={{ width: "30%" }}>20-07-21</Text>
                  <TouchableOpacity
                     style={{
                        backgroundColor: "#3283c9",
                        paddingVertical: 3,
                        paddingHorizontal: 13,
                        borderRadius: 5,
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: 15,
                     }}
                     onPress={props.onPress}
                     activeOpacity={0.6}
                  >
                     <Text style={{ color: "white", fontSize: 14 }}>Mark</Text>
                  </TouchableOpacity>
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     width: "100%",
                     alignItems: "center",
                     marginBottom: 10,
                  }}
               >
                  <Text style={{ width: "20%" }}>10A</Text>
                  <Text style={{ width: "25%" }}>English</Text>
                  <Text style={{ width: "30%" }}>20-07-21</Text>
                  <TouchableOpacity
                     style={{
                        backgroundColor: "#3283c9",
                        paddingVertical: 3,
                        paddingHorizontal: 13,
                        borderRadius: 5,
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: 15,
                     }}
                     onPress={props.onPress}
                     activeOpacity={0.6}
                  >
                     <Text style={{ color: "white", fontSize: 14 }}>Mark</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </ScrollView>
   );
};

export default index;
