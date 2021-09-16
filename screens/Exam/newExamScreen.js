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
import * as DocumentPicker from "expo-document-picker";

import colors from "../../theme/color";
import DatePickerButton from "../../components/DatePickerButton";

const newExamScreen = (props) => {
   const [date, setDate] = useState(new Date());
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());
   const [mode, setMode] = useState("date");
   const [type, setType] = useState();
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

   let startTime =
      (startDate.getHours() > 12
         ? startDate.getHours() - 12 < 10
            ? "0" + (startDate.getHours() - 12)
            : startDate.getHours() - 12
         : startDate.getHours() < 10
         ? "0" + startDate.getHours()
         : startDate.getHours()) +
      ":" +
      (startDate.getMinutes() < 10
         ? "0" + startDate.getMinutes()
         : startDate.getMinutes()) +
      (startDate.getHours() > 12 ? " PM" : " AM");
   let endTime =
      (endDate.getHours() > 12
         ? endDate.getHours() - 12 < 10
            ? "0" + (endDate.getHours() - 12)
            : endDate.getHours() - 12
         : endDate.getHours() < 10
         ? "0" + endDate.getHours()
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
                        width: "48%",

                        borderRadius: 5,
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
                  </View>
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
            <Text
               style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: colors.textPrimary,
                  marginTop: 40,
                  marginBottom: 20,
               }}
            >
               Upload Notes
            </Text>
            <View style={{ width: "100%", marginBottom: 15 }}>
               <Text>Title / Chapter Name</Text>
               <TextInput
                  placeholder="Title"
                  style={{
                     width: "100%",
                     borderWidth: 1,
                     paddingVertical: 4,
                     paddingHorizontal: 10,
                     borderRadius: 5,
                     borderColor: colors.textSecondary,
                     marginTop: 10,
                  }}
               />
            </View>

            <View style={{ width: "100%", marginBottom: 15 }}>
               <Text>Description</Text>
               <TextInput
                  placeholder="Description"
                  style={{
                     width: "100%",
                     borderWidth: 1,
                     paddingVertical: 4,
                     paddingHorizontal: 10,
                     borderRadius: 5,
                     borderColor: colors.textSecondary,
                     marginTop: 10,
                  }}
                  numberOfLines={5}
                  textAlignVertical="top"
               />
            </View>
            <TouchableOpacity
               activeOpacity={0.6}
               onPress={() => {
                  DocumentPicker.getDocumentAsync({
                     copyToCacheDirectory: false,
                  }).then((data) => console.log(data));
               }}
               style={{
                  width: "100%",
                  marginBottom: 15,
                  flexDirection: "row",
                  alignItems: "center",
               }}
            >
               <Text>Upload Document</Text>
               <MaterialIcons
                  name="upload-file"
                  size={23}
                  style={{ marginLeft: 15 }}
               />
            </TouchableOpacity>

            <View>
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
                  <Text>No clash with other exams</Text>
               </View>
            </View>

            <TouchableOpacity
               style={{
                  paddingVertical: 10,
                  width: "100%",
                  backgroundColor: "#3283c9",
                  alignItems: "center",
                  marginVertical: 10,
                  borderRadius: 5,
               }}
               onPress={() => props.navigation.navigate("success")}
            >
               <Text
                  style={{
                     color: "white",
                     fontSize: 16,
                     fontWeight: "bold",
                  }}
               >
                  Add Exam
               </Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
   );
};
export default newExamScreen;
