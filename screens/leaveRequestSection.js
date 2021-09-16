import React, { useState } from "react";
import { View, Text } from "react-native";
import colors from "../theme/color";
import { Picker } from "@react-native-picker/picker";

const StatusLabel = (props) => {
   return (
      <View style={{ marginVertical: 10 }}>
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
      </View>
   );
};

const UpExamContainer = (props) => {
   return (
      <View style={{ marginVertical: 10 }}>
         <Text style={{ fontSize: 12, marginBottom: 5 }}>{props.date}</Text>
         <View
            style={{
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
               <Text style={{ color: props.textColor }}>{props.faculty}</Text>
               <Text style={{ color: props.textColor }}>{props.duration}</Text>
            </View>
         </View>
      </View>
   );
};

const leaveRequestsScreen = (props) => {
   const [selectedDate, setSelectedDate] = useState();

   return (
      <View
         style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingTop: 30,
            paddingBottom: 30,
            backgroundColor: colors.backgroundColor,
         }}
      >
         <Text
            style={{
               fontSize: 20,
               fontWeight: "700",
               lineHeight: 20,
               color: colors.textPrimary,
            }}
         >
            Leave Requests
         </Text>
         <View
            style={{
               flexDirection: "row",
               alignItems: "center",
               justifyContent: "space-between",
               marginVertical: 20,
               marginBottom: 60,
            }}
         >
            <View style={{ alignItems: "center" }}>
               <View
                  style={{
                     width: 40,
                     height: 40,
                     backgroundColor: "#ff4646",
                     borderRadius: 20,
                     justifyContent: "center",
                     alignItems: "center",
                  }}
               >
                  <Text style={{ fontWeight: "bold", color: "white" }}>3</Text>
               </View>
               <Text style={{ fontWeight: "bold" }}>Pending</Text>
            </View>
            <View>
               <View style={{ alignItems: "center" }}>
                  <View
                     style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#008d13",
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                  >
                     <Text style={{ fontWeight: "bold", color: "white" }}>
                        10
                     </Text>
                  </View>
                  <Text style={{ fontWeight: "bold" }}>Completed</Text>
               </View>
            </View>
            <View
               style={{
                  backgroundColor: "#3283c9",
                  paddingVertical: 3,
                  paddingHorizontal: 5,
                  borderRadius: 5,
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <Text style={{ color: "white", fontSize: 12 }}>Take Action</Text>
            </View>
         </View>
         <View>
            <Text
               style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: colors.textPrimary,
                  marginBottom: 15,
               }}
            >
               Submission Status
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
         <View style={{ flex: 1 }}>
            <Text
               style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: colors.textPrimary,
                  marginVertical: 15,
                  marginTop: 50,
               }}
            >
               Upcoming Examinations
            </Text>
            <View style={{ alignItems: "flex-end", marginBottom: 5 }}>
               <View
                  style={{
                     borderWidth: 1,
                     borderColor: "grey",
                     paddingVertical: 2,
                     borderRadius: 5,
                  }}
               >
                  <Picker
                     selectedValue={selectedDate}
                     onValueChange={(itemValue, itemIndex) =>
                        setSelectedDate(itemValue)
                     }
                     style={{
                        color: "grey",
                        width: 110,
                        marginRight: -10,
                     }}
                     dropdownIconColor="grey"
                  >
                     <Picker.Item label="Today" value="today" />
                     <Picker.Item label="Tomorrow" value="tomorrow" />
                  </Picker>
               </View>
            </View>
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
            />
            {/* </ScrollView> */}
         </View>
      </View>
   );
};

export default leaveRequestsScreen;
