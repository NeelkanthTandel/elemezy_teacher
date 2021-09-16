import React, { useState } from "react";
import {
   View,
   Text,
   TouchableOpacity,
   ScrollView,
   Platform,
   TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import * as DocumentPicker from "expo-document-picker";

import colors from "../theme/color";
import DatePickerButton from "../components/DatePickerButton";

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
               Deadline: {props.deadline}
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

const assignmentScreen = (props) => {
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

   const showDatepicker = () => {
      showMode("date");
   };

   const showTimepicker = () => {
      showMode("time");
   };

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
               Assignment
            </Text>
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
                     marginTop: 30,
                  }}
               >
                  Select Classroom and Subject
               </Text>
               <View
                  style={{
                     width: "100%",
                     flexDirection: "row",
                     justifyContent: "space-between",
                     alignItems: "flex-start",
                     marginTop: 15,
                  }}
               >
                  <View
                     style={{
                        borderWidth: 0.5,
                        borderColor: colors.textSecondary,
                        paddingVertical: 2,
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
                           width: 110,
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
                     }}
                  >
                     <Picker
                        selectedValue={subject}
                        onValueChange={(itemValue, itemIndex) =>
                           setSubject(itemValue)
                        }
                        style={{
                           color: colors.textPrimary,
                           width: 110,
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
                  <View style={{ alignItems: "center" }}>
                     <DatePickerButton
                        date={formatedDate}
                        onPress={() => showMode("date")}
                     />
                     <Text
                        style={{ color: colors.textSecondary, fontSize: 12 }}
                     >
                        Deadline
                     </Text>
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
               <Text
                  style={{
                     fontSize: 18,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                     marginTop: 40,
                     marginBottom: 20,
                  }}
               >
                  Add new assignment
               </Text>
               <View style={{ width: "100%", marginBottom: 15 }}>
                  <Text>Title</Text>
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

               <TouchableOpacity
                  style={{
                     paddingVertical: 10,
                     width: "100%",
                     backgroundColor: "#3283c9",
                     alignItems: "center",
                     marginVertical: 10,
                     borderRadius: 5,
                  }}
               >
                  <Text
                     style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                     }}
                  >
                     Upload
                  </Text>
               </TouchableOpacity>
            </View>
            <View>
               <Text
                  style={{
                     fontSize: 18,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                     marginTop: 40,
                     marginBottom: 20,
                  }}
               >
                  Assignment in progress
               </Text>
               <View
                  style={{
                     width: "100%",
                     marginBottom: 15,
                     borderWidth: 1,
                     borderRadius: 10,
                     paddingTop: 20,
                     paddingHorizontal: 10,
                     borderColor: colors.textSecondary,
                  }}
               >
                  <StatusLabel
                     title="English"
                     percentage="59%"
                     color="#3283c9"
                     deadline="03/10/21"
                  />
                  <StatusLabel
                     title="English"
                     percentage="30%"
                     color="#3283c9"
                     deadline="03/10/21"
                  />
               </View>
            </View>
         </View>
      </ScrollView>
   );
};

export default assignmentScreen;
