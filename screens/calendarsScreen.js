import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import colors from "../theme/color";

import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const EventsLabel = (props) => {
   return (
      <View
         style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginVertical: 8,
         }}
      >
         <View
            style={{
               width: 6,
               height: "100%",
               backgroundColor: props.color,
               borderRadius: 10,
               marginRight: 15,
            }}
         />
         <View>
            <Text style={{ fontWeight: "bold" }}>{props.eventName}</Text>
            <Text style={{ fontSize: 10 }}>{props.scheduledOn}</Text>
            <Text style={{ fontSize: 10 }}>{props.place}</Text>
         </View>
         <View
            style={{
               flexDirection: "row",
               flex: 1,
               justifyContent: "flex-end",
            }}
         >
            <MaterialIcons
               name="keyboard-arrow-right"
               size={30}
               color={props.color}
            />
            <Ionicons
               name="ios-notifications-outline"
               size={25}
               style={{ marginHorizontal: 20 }}
               color={props.color}
            />
         </View>
      </View>
   );
};

const UpExamContainer = (props) => {
   return (
      <View style={{ marginVertical: 10 }}>
         <Text style={{ fontSize: 12, marginBottom: 5 }}>{props.date}</Text>
         <View
            style={{
               flexDirection: "row",
               width: "100%",
               alignItems: "center",
            }}
         >
            <View
               style={{
                  flex: 1,
                  backgroundColor: props.color,
                  flexDirection: "row",
                  borderRadius: 10,
                  padding: 10,
               }}
            >
               <View
                  style={{
                     justifyContent: "space-between",
                     marginRight: 10,
                  }}
               >
                  <Text style={{ color: props.textColor }}>{props.from}</Text>
                  <Text style={{ color: props.textColor }}>{props.to}</Text>
               </View>
               <View style={{ marginVertical: 5 }}>
                  <Text style={{ color: props.textColor, fontWeight: "bold" }}>
                     {props.subject}
                  </Text>
                  <Text style={{ color: props.textColor }}>
                     {props.faculty}
                  </Text>
                  <Text style={{ color: props.textColor }}>
                     {props.duration}
                  </Text>
               </View>
            </View>
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
               <Text style={{ color: "white", fontSize: 14 }}>Edit</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
};

const CalendarScreen = (props) => {
   return (
      <ScrollView
         showsVerticalScrollIndicator={false}
         style={{ backgroundColor: colors.backgroundColor }}
      >
         <View
            style={{
               flex: 1,
               paddingHorizontal: 20,
               backgroundColor: colors.backgroundColor,
               paddingTop: 30,
               paddingBottom: 30,
            }}
         >
            <View style={{ marginBottom: 30 }}>
               <Text
                  style={{
                     fontSize: 20,
                     fontWeight: "700",
                     lineHeight: 20,
                     color: colors.textPrimary,
                  }}
               >
                  {props.isDashboard ? "Calendar" : "Events"}
               </Text>
               <Text
                  style={{
                     fontSize: 12,
                     lineHeight: 12,
                     marginTop: 3,
                     color: colors.textSecondary,
                  }}
               >
                  Quick view of the selected date
               </Text>
            </View>
            <Calendar
               onDayPress={(day) => {
                  console.log("selected day", day);
               }}
               markedDates={{
                  "2021-09-17": {
                     selected: true,
                     selectedColor: "#ff6a74",
                  },
                  "2021-09-20": {
                     selected: true,
                     selectedColor: "#6a6fff",
                  },
               }}
               enableSwipeMonths={true}
               style={{
                  borderRadius: 20,
                  overflow: "hidden",
               }}
               theme={{
                  dayTextColor: colors.black,
                  todayTextColor: colors.text1,
                  calendarBackground: "#d1d1ff",
                  arrowColor: colors.text1,
                  textMonthFontWeight: "bold",
                  textDisabledColor: colors.textSecondary,
                  textSectionTitleColor: "#6a6fff",
               }}
            />
            <View
               style={{ marginTop: 15, marginBottom: 60, flexDirection: "row" }}
            >
               <View
                  style={{
                     flexDirection: "row",
                     alignItems: "center",
                     marginRight: 30,
                  }}
               >
                  <View
                     style={{
                        width: 12,
                        height: 12,
                        backgroundColor: "#6a6fff",
                        borderRadius: 10,
                        marginRight: 8,
                     }}
                  />
                  <Text>Homework</Text>
               </View>
               <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                     style={{
                        width: 12,
                        height: 12,
                        backgroundColor: "#ff6a74",
                        borderRadius: 10,
                        marginRight: 8,
                     }}
                  />
                  <Text>Exam</Text>
               </View>
            </View>
            <View style={{ flex: 1 }}>
               <Text
                  style={{
                     fontSize: 20,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                  }}
               >
                  Upcoming Events
               </Text>
               <Text
                  style={{
                     textAlign: "right",
                     fontSize: 10,
                     fontWeight: "bold",
                  }}
               >
                  Add reminder
               </Text>
               {/* <ScrollView showsVerticalScrollIndicator={false}> */}
               <EventsLabel
                  eventName="Parents meeting"
                  scheduledOn="Monday, 28 September 2021"
                  place="Staff Room"
                  color="#ff75a6"
               />
               <EventsLabel
                  eventName="Annual Day"
                  scheduledOn="Monday, 5 October 2021"
                  place="Stage"
                  color="#6a81ff"
               />
               <EventsLabel
                  eventName="Debate Competition"
                  scheduledOn="Wednesday, 31 December 2021"
                  place="Stage"
                  color="#ffc178"
               />
               {/* </ScrollView> */}
            </View>
            {!props.isDashboard ? (
               <View style={{ flex: 1 }}>
                  <Text
                     style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: colors.textPrimary,
                        marginVertical: 10,
                        marginTop: 50,
                     }}
                  >
                     Upcoming Examinations
                  </Text>

                  {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                  <UpExamContainer
                     subject="Machine Learning"
                     faculty="Waden Warren"
                     duration="1 hour"
                     from="10:00"
                     to="11:00"
                     color="#fff2d5"
                     textColor="#fe4500"
                     date="Sunday, 12 September"
                     onPress={() => {}}
                  />
                  <UpExamContainer
                     subject="Machine Learning"
                     faculty="Waden Warren"
                     duration="1.5 hour"
                     from="13:00"
                     to="14:30"
                     color="#e4ecfa"
                     textColor="#0043b4"
                     date="Tuesday, 01 March"
                     onPress={() => {}}
                  />
                  {/* </ScrollView> */}
               </View>
            ) : null}
         </View>
      </ScrollView>
   );
};

export default CalendarScreen;
