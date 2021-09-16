import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../theme/color";
import { MaterialIcons } from "@expo/vector-icons";

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
         <Text
            style={{
               fontSize: 16,
               color: "white",
               fontWeight: "bold",
            }}
         >
            {props.title}
         </Text>
         <Ionicons
            name="ios-add-circle-outline"
            size={28}
            style={{ marginVertical: 8 }}
            color="white"
         />
         <Text
            style={{
               textAlign: "center",
               fontSize: 10,
               color: "white",
            }}
         >
            {props.note}
         </Text>
      </TouchableOpacity>
   );
};

const LeaveRequestsLabel = (props) => {
   return (
      <View
         style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 8,
         }}
      >
         <View
            style={{
               flexDirection: "row",
               alignItems: "center",
               backgroundColor: "#e8f4ff",
               justifyContent: "space-between",
               paddingVertical: 8,
               paddingHorizontal: 8,
               marginRight: 8,
               borderRadius: 8,
               flex: 1,
            }}
         >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
               {props.class}
            </Text>
            <View style={{ flexDirection: "row" }}>
               <View style={{ alignItems: "center", marginRight: 10 }}>
                  <View
                     style={{
                        width: 22,
                        height: 22,
                        backgroundColor: "#ff4646",
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                  >
                     <Text
                        style={{
                           fontWeight: "bold",
                           color: "white",
                           fontSize: 12,
                        }}
                     >
                        {props.pending}
                     </Text>
                  </View>
                  <Text
                     style={{
                        fontWeight: "bold",
                        fontSize: 10,
                        color: colors.textSecondary,
                     }}
                  >
                     Pending
                  </Text>
               </View>
               <View style={{ alignItems: "center" }}>
                  <View
                     style={{
                        width: 22,
                        height: 22,
                        backgroundColor: "#008d13",
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                  >
                     <Text
                        style={{
                           fontWeight: "bold",
                           color: "white",
                           fontSize: 12,
                        }}
                     >
                        {props.completed}
                     </Text>
                  </View>
                  <Text
                     style={{
                        fontWeight: "bold",
                        fontSize: 10,
                        color: colors.textSecondary,
                     }}
                  >
                     Completed
                  </Text>
               </View>
            </View>
         </View>
         <TouchableOpacity
            style={{
               backgroundColor: "#3283c9",
               paddingVertical: 3,
               paddingHorizontal: 5,
               borderRadius: 5,
               alignItems: "center",
               justifyContent: "center",
            }}
            onPress={props.onPress}
            activeOpacity={0.6}
         >
            <Text style={{ color: "white", fontSize: 12 }}>Take Action</Text>
         </TouchableOpacity>
      </View>
   );
};

const StatusLabel = (props) => {
   return (
      <View style={{ marginBottom: 20 }}>
         <View
            style={{
               flexDirection: "row",
               width: "100%",
               justifyContent: "space-between",
            }}
         >
            <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
            <Text
               style={{ fontSize: 12, fontWeight: "bold", color: props.color }}
            >
               {props.percentage}
            </Text>
         </View>
         <View
            style={{
               width: "100%",
               height: 8,
               backgroundColor: "#dfdfdf",
               borderRadius: 10,
               marginTop: 5,
               overflow: "hidden",
            }}
         >
            <View
               style={{
                  width: props.percentage,
                  height: 8,
                  backgroundColor: props.color,
                  borderRadius: 10,
               }}
            />
         </View>
         <View
            style={{
               flexDirection: "row",
               justifyContent: "space-between",
               marginTop: 5,
               alignItems: "center",
            }}
         >
            <Text style={{ fontSize: 12, color: colors.textSecondary }}>
               Deadline: 03/10/2021
            </Text>
            <View
               style={{
                  flexDirection: "row",
                  alignItems: "center",
               }}
            >
               <Text
                  style={{
                     color: "#3283c9",
                     fontSize: 10,
                     fontWeight: "bold",
                  }}
               >
                  REVIEW
               </Text>
               <MaterialIcons
                  name="keyboard-arrow-right"
                  size={20}
                  color="#3283c9"
               />
            </View>
         </View>
      </View>
   );
};

const classesScreen = (props) => {
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
            <View style={{ alignItems: "center", marginBottom: 30 }}>
               <Text
                  style={{
                     fontSize: 24,
                     fontWeight: "700",
                     lineHeight: 24,
                     color: colors.textPrimary,
                  }}
               >
                  Classes
               </Text>
               <Text
                  style={{
                     color: colors.textPrimary,
                  }}
               >
                  Overview
               </Text>
            </View>
            <View style={{ width: "100%" }}>
               <View
                  style={{
                     flexDirection: "row",
                     width: "100%",
                     justifyContent: "space-between",
                     marginBottom: 15,
                  }}
               >
                  <TabContainer
                     title="Notes"
                     onPress={() => {
                        props.navigation.navigate("notes");
                     }}
                     note="Click here to upload notes"
                  />
                  <TabContainer
                     title="Assignments"
                     onPress={() => props.navigation.navigate("assignment")}
                     note="Click here to add Assignments"
                  />
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     width: "100%",
                     justifyContent: "space-between",
                  }}
               >
                  <TabContainer
                     title="Documents"
                     onPress={() => props.navigation.navigate("document")}
                     note="Click here to add documents"
                  />
                  <TabContainer
                     title="Leave Requests"
                     onPress={() => props.navigation.navigate("leaveRequest")}
                     note="Click here to approve pending requests"
                  />
               </View>
            </View>
            <View style={{ width: "100%", marginTop: 45 }}>
               <Text
                  style={{
                     fontSize: 20,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                     marginVertical: 15,
                  }}
               >
                  Leave Requests
               </Text>
               <View
                  style={{
                     borderWidth: 1,
                     borderColor: "#dfdfdf",
                     borderRadius: 10,
                     paddingHorizontal: 10,
                  }}
               >
                  <LeaveRequestsLabel
                     class="10A"
                     pending={3}
                     completed={7}
                     onPress={() => {}}
                     bottomMargin={15}
                  />
                  <LeaveRequestsLabel
                     class="9A"
                     pending={4}
                     completed={5}
                     onPress={() => {}}
                  />
               </View>
            </View>
            <View style={{ width: "100%", marginTop: 60 }}>
               <Text
                  style={{
                     fontSize: 20,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                     marginBottom: 15,
                  }}
               >
                  Pending Assignments
               </Text>
               <StatusLabel
                  title="10 B Notes English"
                  percentage="59%"
                  color="#00af32"
               />
               <StatusLabel
                  title="9 A Assignment English"
                  percentage="72%"
                  color="#eb5b03"
               />
               <StatusLabel
                  title="9 A Assignment English"
                  percentage="40%"
                  color="#de0303"
               />
            </View>
         </View>
      </ScrollView>
   );
};

export default classesScreen;
