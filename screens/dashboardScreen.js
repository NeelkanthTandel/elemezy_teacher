import React from "react";
import { View, Text, ScrollView } from "react-native";
import {
   Ionicons,
   Octicons,
   MaterialIcons,
   SimpleLineIcons,
} from "@expo/vector-icons";

import colors from "../theme/color";
import CalendarScreen from "./calendarsScreen";
import LeaveRequestsScreen from "./leaveRequestSection";
import DatePickerButton from "../components/DatePickerButton";

const TimeTableLabel = (props) => {
   return (
      <View
         style={{
            flexDirection: "row",
            marginVertical: 15,
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <View style={{ marginRight: 15 }}>
            <Text style={{ color: colors.textSecondary }}>{props.time}</Text>
         </View>
         <View
            style={{
               flexDirection: "row",
               backgroundColor: props.boxColor,
               flex: 1,
               paddingVertical: 2,
               borderRadius: 100,
               alignItems: "center",
               paddingHorizontal: 10,
            }}
         >
            <props.icon />

            <View style={{ marginLeft: 10 }}>
               <Text style={{ lineHeight: 14, color: props.textColor }}>
                  {props.subject}
               </Text>
               <Text
                  style={{
                     lineHeight: 10,
                     fontSize: 10,
                     marginTop: 2,
                     color: props.textColor,
                  }}
               >
                  {props.lecTime}
               </Text>
            </View>
         </View>
      </View>
   );
};

const dashboardScreen = (props) => {
   return (
      <ScrollView
         style={{
            backgroundColor: colors.backgroundColor,
         }}
         showsVerticalScrollIndicator={false}
      >
         <View
            style={{
               flex: 1,
               alignItems: "center",
               paddingHorizontal: 20,
               marginBottom: 30,
            }}
         >
            <Text
               style={{
                  fontSize: 24,
                  fontWeight: "700",
                  lineHeight: 24,
                  color: colors.textPrimary,
                  marginVertical: 30,
                  marginBottom: 60,
               }}
            >
               Dashboard
            </Text>
            <View
               style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 15,
               }}
            >
               <View>
                  <Text
                     style={{
                        fontSize: 16,
                        fontWeight: "700",
                        color: colors.textPrimary,
                     }}
                  >
                     Today's Timetable
                  </Text>
                  <Text style={{ fontSize: 10, color: colors.textSecondary }}>
                     Saturday, 11 September 2021
                  </Text>
               </View>
               <DatePickerButton date="12-09-21" />
            </View>

            <View
               style={{
                  flexDirection: "row",
                  marginVertical: 15,
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <View style={{ marginRight: 15 }}>
                  <Text style={{ color: colors.textSecondary }}>07:00</Text>
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     backgroundColor: colors.greyBox,
                     flex: 1,
                     paddingVertical: 2,
                     justifyContent: "center",
                     borderRadius: 50,
                  }}
               >
                  <Text style={{ marginVertical: 8 }}>-</Text>
               </View>
            </View>
            <TimeTableLabel
               subject="Geography"
               time="08:00"
               lecTime="08:30 - 09:00"
               boxColor={colors.box1}
               textColor={colors.text1}
               icon={() => (
                  <Octicons
                     name="globe"
                     size={30}
                     style={{ marginVertical: 6 }}
                  />
               )}
            />
            <TimeTableLabel
               subject="Maths"
               time="09:00"
               lecTime="09:00 - 10:00"
               boxColor={colors.box2}
               textColor={colors.text2}
               icon={() => (
                  <MaterialIcons
                     name="calculate"
                     size={30}
                     style={{ marginVertical: 6 }}
                  />
               )}
            />
            <TimeTableLabel
               subject="Physical Education"
               time="10:00"
               lecTime="10:00 - 11:00"
               boxColor={colors.box3}
               textColor={colors.text3}
               icon={() => (
                  <Ionicons
                     name="medal"
                     size={28}
                     style={{ marginVertical: 6 }}
                  />
               )}
            />
            <View
               style={{
                  flexDirection: "row",
                  marginVertical: 15,
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <View style={{ marginRight: 15 }}>
                  <Text style={{ color: colors.textSecondary }}>11:00</Text>
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     backgroundColor: colors.greyBox,
                     flex: 1,
                     paddingVertical: 2,
                     justifyContent: "center",
                     borderRadius: 50,
                  }}
               >
                  <Text style={{ marginVertical: 8 }}>Break</Text>
               </View>
            </View>
            <View
               style={{
                  flexDirection: "row",
                  marginVertical: 15,
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <View style={{ marginRight: 15 }}>
                  <Text style={{ color: colors.textSecondary }}>12:00</Text>
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     backgroundColor: colors.greyBox,
                     flex: 1,
                     paddingVertical: 2,
                     justifyContent: "center",
                     borderRadius: 50,
                  }}
               >
                  <Text style={{ marginVertical: 8 }}>Break</Text>
               </View>
            </View>
            <TimeTableLabel
               subject="Chemistry"
               time="13:00"
               lecTime="13:00 - 14:00"
               boxColor={colors.box1}
               textColor={colors.text1}
               icon={() => (
                  <SimpleLineIcons
                     name="chemistry"
                     size={28}
                     style={{ marginVertical: 6 }}
                  />
               )}
            />
            <View
               style={{
                  flexDirection: "row",
                  marginVertical: 15,
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <View style={{ marginRight: 15 }}>
                  <Text style={{ color: colors.textSecondary }}>14:00</Text>
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     backgroundColor: colors.greyBox,
                     flex: 1,
                     paddingVertical: 2,
                     justifyContent: "center",
                     borderRadius: 50,
                  }}
               >
                  <Text style={{ marginVertical: 8 }}>Break</Text>
               </View>
            </View>
            <TimeTableLabel
               subject="Physics"
               time="15:00"
               lecTime="15:00 - 16:00"
               boxColor={colors.box2}
               textColor={colors.text2}
               icon={() => (
                  <Ionicons
                     name="ios-logo-react"
                     size={28}
                     style={{ marginVertical: 6 }}
                  />
               )}
            />
         </View>
         <CalendarScreen isDashboard={true} />
         <LeaveRequestsScreen />
      </ScrollView>
   );
};

export default dashboardScreen;
