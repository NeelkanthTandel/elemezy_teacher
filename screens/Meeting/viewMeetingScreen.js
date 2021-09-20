import React, { useState } from "react";
import {
   StyleSheet,
   View,
   ScrollView,
   Text,
   TouchableOpacity,
   TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

import colors from "../../theme/color";
import DatePickerButton from "../../components/DatePickerButton";

const UpExamContainer = (props) => {
   return (
      <View style={{ marginVertical: 10 }}>
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
                     {props.title}
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

const viewMeetingScreen = (props) => {
   const [date, setDate] = useState(new Date());
   const [mode, setMode] = useState("date");
   const [show, setShow] = useState(false);
   const [classroom, setClassroom] = useState("");
   const [subject, setSubject] = useState("");

   const formatedDate =
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
      "-" +
      (date.getMonth() < 10
         ? "0" + (date.getMonth() + 1)
         : date.getMonth() + 1) +
      "-" +
      (date.getFullYear() % 100);

   const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === "ios");
      setDate(currentDate);
   };

   const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
   };
   return (
      <ScrollView
         style={{ backgroundColor: colors.backgroundColor }}
         showsVerticalScrollIndicator={false}
      >
         <View
            style={{
               flex: 1,
               paddingTop: 30,
               paddingHorizontal: 20,
               backgroundColor: "white",
            }}
         >
            <View
               style={{
                  flexDirection: "row",
                  marginBottom: 30,
                  alignItems: "center",
               }}
            >
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
                  Meeting
               </Text>
               <MaterialIcons
                  name="keyboard-arrow-left"
                  size={35}
                  color={colors.backgroundColor}
               />
            </View>
            <View
               style={{
                  alignItems: "flex-start",
               }}
            >
               <Text
                  style={{
                     fontSize: 18,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                  }}
               >
                  Select Classroom and Subject
               </Text>
               <View
                  style={{
                     width: "100%",
                     flexDirection: "row",
                     justifyContent: "space-between",
                     marginTop: 15,
                  }}
               >
                  <View
                     style={{
                        borderWidth: 0.5,
                        borderColor: colors.textSecondary,
                        paddingVertical: 2,
                        flex: 1,
                        borderRadius: 5,
                        marginRight: 10,
                     }}
                  >
                     <Picker
                        selectedValue={classroom}
                        onValueChange={(itemValue, itemIndex) =>
                           setClassroom(itemValue)
                        }
                        style={{
                           color: colors.textPrimary,
                           flex: 1,
                           width: "100%",
                           marginRight: -10,
                        }}
                        dropdownIconColor="grey"
                     >
                        <Picker.Item label="Classroom" value="Classroom" />
                        <Picker.Item label="9A" value="9A" />
                        <Picker.Item label="9B" value="9B" />
                     </Picker>
                  </View>
                  <View
                     style={{
                        borderWidth: 0.5,
                        borderColor: colors.textSecondary,
                        paddingVertical: 2,
                        borderRadius: 5,
                        flex: 1,
                        marginRight: 10,
                     }}
                  >
                     <Picker
                        selectedValue={subject}
                        onValueChange={(itemValue, itemIndex) =>
                           setSubject(itemValue)
                        }
                        style={{
                           color: colors.textPrimary,
                           width: "100%",
                           marginRight: -10,
                        }}
                        dropdownIconColor="grey"
                     >
                        <Picker.Item label="Subject" value="Subject" />
                        <Picker.Item label="English" value="English" />
                        <Picker.Item label="Maths" value="Maths" />
                        <Picker.Item label="Hindi" value="Hindi" />
                        <Picker.Item label="Science" value="Science" />
                     </Picker>
                  </View>
                  <DatePickerButton
                     date={formatedDate}
                     onPress={() => showMode("date")}
                  />
               </View>

               {show && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={date}
                     mode={mode}
                     is24Hour={true}
                     display="default"
                     onChange={onChange}
                  />
               )}
            </View>
            <View style={{ flex: 1, width: "100%" }}>
               <Text
                  style={{
                     fontSize: 20,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                     marginVertical: 10,
                     marginTop: 30,
                  }}
               >
                  Your scheduled meetings
               </Text>

               {/* <ScrollView showsVerticalScrollIndicator={false}> */}
               <UpExamContainer
                  title="Meeting 1"
                  faculty="Waden Warren"
                  duration="1 hour"
                  from="10:00"
                  to="11:00"
                  color="#fff2d5"
                  textColor="#fe4500"
                  onPress={() => {}}
               />
               <UpExamContainer
                  title="Meeting 2"
                  faculty="Waden Warren"
                  duration="1.5 hour"
                  from="13:00"
                  to="14:30"
                  color="#e4ecfa"
                  textColor="#0043b4"
                  onPress={() => {}}
               />
               {/* </ScrollView> */}
            </View>
         </View>
      </ScrollView>
   );
};
export default viewMeetingScreen;
