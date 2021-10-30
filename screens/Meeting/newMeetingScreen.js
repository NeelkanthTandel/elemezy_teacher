import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import axios from "axios";

import colors from "../../theme/color";
import DatePickerButton from "../../components/DatePickerButton";
import { API_URL } from "../../keys";

const newMeetingScreen = (props) => {
   const email = useSelector((state) => state.users.email);
   const [date, setDate] = useState(new Date());
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());
   const [mode, setMode] = useState("date");
   const [type, setType] = useState();
   const [show, setShow] = useState(false);
   const [classroom, setClassroom] = useState("");
   const [subject, setSubject] = useState("");
   const [link, setLink] = useState("");
   const [classId, setClassId] = useState();
   const class_id_list = useSelector((state) => state.users.class_id_list);
   const token = useSelector((state) => state.users.token);
   const CSRF = useSelector((state) => state.users.CSRF);

   useEffect(() => {
      Object.keys(class_id_list[0].RISK1234SEM1.classes).map((key) =>
         setClassId((obj) =>
            obj
               ? [
                    ...obj,
                    {
                       id: key,
                       name: class_id_list[0].RISK1234SEM1.classes[key]
                          .class_name,
                    },
                 ]
               : [
                    {
                       id: key,
                       name: class_id_list[0].RISK1234SEM1.classes[key]
                          .class_name,
                    },
                 ]
         )
      );
   }, []);

   const formatedDate =
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
      "-" +
      (date.getMonth() < 9
         ? "0" + (date.getMonth() + 1)
         : date.getMonth() + 1) +
      "-" +
      (date.getFullYear() % 100);

   let startTime =
      (startDate.getHours() > 12
         ? startDate.getHours() - 12 < 10
            ? "0" + (startDate.getHours() - 12)
            : startDate.getHours() - 12
         : startDate.getHours() < 10
         ? startDate.getHours() == 0
            ? "12"
            : "0" + startDate.getHours()
         : startDate.getHours()) +
      ":" +
      (startDate.getMinutes() < 10
         ? "0" + startDate.getMinutes()
         : startDate.getMinutes()) +
      (startDate.getHours() >= 12 ? " PM" : " AM");
   let endTime =
      (endDate.getHours() > 12
         ? endDate.getHours() - 12 < 10
            ? "0" + (endDate.getHours() - 12)
            : endDate.getHours() - 12
         : endDate.getHours() < 10
         ? endDate.getHours() == 0
            ? "12"
            : "0" + endDate.getHours()
         : endDate.getHours()) +
      ":" +
      (endDate.getMinutes() < 10
         ? "0" + endDate.getMinutes()
         : endDate.getMinutes()) +
      (endDate.getHours() > 12 ? " PM" : " AM");

   const onChange = (event, selectedDate) => {
      setShow(Platform.OS === "ios");
      if (mode === "time") {
         if (type === "start") {
            const currentDate = selectedDate || startDate;
            setStartDate(currentDate);
         } else {
            const currentDate = selectedDate || endDate;
            setEndDate(currentDate);
         }
      } else {
         const currentDate = selectedDate || date;

         setDate(currentDate);
      }
   };

   const showMode = (currentMode, timeType) => {
      setShow(true);
      setMode(currentMode);
      console.log(timeType);
      if (timeType) {
         setType(timeType);
      }
   };

   const api = axios.create({
      baseURL: API_URL,
      headers: {
         "Content-Type": "application/json",
         Authorization: "Token " + token,
         "X-CSRFToken": CSRF,
      },
      validateStatus: (status) => {
         return true;
      },
   });

   // const scheduleMeetingHandler = async () => {
   //    try {
   //       const response = await fetch(`${API_URL}/create_meet_link`, {
   //          method: "POST",
   //          headers: {
   //             "Content-Type": "application/json",
   //             Authorization: "Token " + token,
   //             "X-Requested-With": "XMLHttpRequest",
   //             "X-CSRFToken": CSRF,
   //          },
   //          body: JSON.stringify({
   //             teacher_id: email,
   //             class_id: classroom,
   //             time_start: startTime,
   //             meet_link: link,
   //             time_end: endTime,
   //          }),
   //       });

   //       console.log("done:", JSON.parse(JSON.stringify(response)));
   //    } catch (err) {
   //       console.log("schedule meeting error: ", err);
   //    }
   // };

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
                  alignItems: "center",
                  marginBottom: 30,
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
                  Exam
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
                  Select Classroom
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
                        width: "100%",

                        borderRadius: 5,
                     }}
                  >
                     <Picker
                        selectedValue={classroom}
                        onValueChange={(itemValue, itemIndex) => {
                           setClassroom(itemValue);
                        }}
                        style={{
                           color: colors.textPrimary,
                           flex: 1,
                           width: "100%",
                           marginRight: -10,
                        }}
                        dropdownIconColor="grey"
                     >
                        <Picker.Item label="Classroom" value="Classroom" />
                        {classId?.map((ele) => {
                           return (
                              <Picker.Item
                                 label={ele.name}
                                 value={ele.id}
                                 key={ele.id}
                              />
                           );
                        })}
                     </Picker>
                  </View>
                  {/* <View
                     style={{
                        borderWidth: 0.5,
                        borderColor: colors.textSecondary,
                        paddingVertical: 2,
                        borderRadius: 5,
                        width: "48%",
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
                  </View> */}
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     marginTop: 15,
                     width: "100%",
                     alignItems: "center",
                  }}
               >
                  <View
                     style={{
                        flexDirection: "row",
                        marginRight: 15,
                        justifyContent: "space-between",
                        flex: 2,
                     }}
                  >
                     <Text>Date: </Text>
                     <DatePickerButton
                        date={formatedDate}
                        onPress={() => showMode("date")}
                     />
                  </View>
                  <View
                     style={{
                        flexDirection: "row",
                        flex: 3,
                        justifyContent: "space-between",
                     }}
                  >
                     <Text>Time: </Text>
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
                        onPress={() => showMode("time", "start")}
                        activeOpacity={0.6}
                     >
                        <Text
                           style={{
                              fontWeight: "bold",
                              letterSpacing: 0,
                              fontSize: 12,
                           }}
                        >
                           {startTime}
                        </Text>
                     </TouchableOpacity>
                     <Text>-</Text>
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
                        onPress={() => showMode("time", "end")}
                        activeOpacity={0.6}
                     >
                        <Text
                           style={{
                              fontWeight: "bold",
                              letterSpacing: 0,
                              fontSize: 12,
                           }}
                        >
                           {endTime}
                        </Text>
                     </TouchableOpacity>
                  </View>
               </View>
               {show && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={
                        mode === "date"
                           ? date
                           : type === "start"
                           ? startDate
                           : endDate
                     }
                     mode={mode}
                     is24Hour={false}
                     display="default"
                     onChange={onChange}
                  />
               )}
            </View>

            <View style={{ width: "100%", marginVertical: 30 }}>
               <TextInput
                  placeholder="Paste meeting link here"
                  onChangeText={(val) => setLink(val)}
                  style={{
                     width: "100%",
                     borderWidth: 1,
                     paddingVertical: 4,
                     paddingHorizontal: 10,
                     borderRadius: 5,
                     borderColor: colors.textSecondary,
                  }}
               />
            </View>

            {/* <View>
               <Text
                  style={{
                     color: colors.textPrimary,
                     fontSize: 14,
                     fontWeight: "bold",
                     marginBottom: 15,
                  }}
               >
                  Important check
               </Text>
               <View
                  style={{
                     borderWidth: 1,
                     borderColor: colors.textSecondary,
                     paddingVertical: 12,
                     paddingHorizontal: 10,
                     borderRadius: 5,
                  }}
               >
                  <Text>No clash with other meetings</Text>
               </View>
            </View> */}

            <TouchableOpacity
               style={{
                  paddingVertical: 10,
                  width: "100%",
                  backgroundColor: "#3283c9",
                  alignItems: "center",
                  marginVertical: 10,
                  borderRadius: 5,
               }}
               // onPress={scheduleMeetingHandler}
            >
               <Text
                  style={{
                     color: "white",
                     fontSize: 16,
                     fontWeight: "bold",
                  }}
               >
                  Schedule Meet
               </Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
   );
};
export default newMeetingScreen;
