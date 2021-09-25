import React, { useState } from "react";
import {
   View,
   Text,
   TouchableOpacity,
   ScrollView,
   Platform,
   TextInput,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import * as DocumentPicker from "expo-document-picker";

import colors from "../../theme/color";

const RecentRequestContainer = (props) => {
   return (
      <View
         style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: "#e8f4ff",
            paddingHorizontal: 10,
            paddingVertical: 12,
            borderRadius: 10,
            marginBottom: 15,
         }}
      >
         <View style={{ flex: 2, justifyContent: "space-between" }}>
            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingRight: 15,
               }}
            >
               <Text style={{ fontWeight: "bold" }}>{props.name}</Text>
               <Text style={{ fontWeight: "bold" }}>{props.class}</Text>
            </View>
            <Text style={{ fontSize: 10 }}>
               Requested for: {props.requestedDate}
            </Text>
         </View>
         <View style={{ flex: 2, marginHorizontal: 5 }}>
            <Text>Reason</Text>
            <Text style={{ fontSize: 10 }}>{props.reason}</Text>
         </View>
         <View
            style={{
               flexDirection: "row",
               flex: 1,
               alignSelf: "center",
            }}
         >
            <Ionicons name="close-circle-sharp" size={30} color="#ff4646" />
            <Ionicons name="checkmark-circle" size={30} color="#008d13" />
         </View>
      </View>
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

const leaveRequestsScreen = (props) => {
   return (
      <ScrollView
         style={{ backgroundColor: colors.backgroundColor }}
         showsVerticalScrollIndicator={false}
      >
         <View
            style={{
               paddingHorizontal: 20,
               paddingVertical: 30,
               flex: 1,
            }}
         >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                  Classes
               </Text>
               <MaterialIcons
                  name="keyboard-arrow-left"
                  size={35}
                  color={colors.backgroundColor}
               />
            </View>
            <Text
               style={{
                  color: colors.textPrimary,
                  textAlign: "center",
               }}
            >
               Leave Request
            </Text>

            <View
               style={{
                  borderWidth: 1,
                  borderColor: "#dfdfdf",
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginTop: 30,
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
            <View
               style={{
                  flex: 1,
                  alignItems: "flex-start",
                  width: "100%",
                  marginTop: 30,
               }}
            >
               <Text
                  style={{
                     fontSize: 20,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                     marginBottom: 15,
                  }}
               >
                  Recent Requests
               </Text>
               <RecentRequestContainer
                  name="Satish"
                  class="10B"
                  requestedDate="15/11/21"
                  reason="Reason for leave request"
               />
               <RecentRequestContainer
                  name="Ramesh"
                  class="9B"
                  requestedDate="11/11/21"
                  reason="Reason for leave request"
               />
               <RecentRequestContainer
                  name="Satish"
                  class="10B"
                  requestedDate="15/11/21"
                  reason="Reason for leave request"
               />
            </View>
         </View>
      </ScrollView>
   );
};

export default leaveRequestsScreen;
