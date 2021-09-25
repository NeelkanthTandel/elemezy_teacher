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

import colors from "../../theme/color";
import DatePickerButton from "../../components/DatePickerButton";

const NoteContainer = (props) => {
   return (
      <View
         style={{
            backgroundColor: "#3283c9",
            padding: 10,
            borderRadius: 10,
            width: "48%",
         }}
      >
         <Text
            style={{
               color: "white",
               fontWeight: "bold",
               fontSize: 16,
            }}
         >
            {props.title}
         </Text>
         <Text style={{ color: "white", fontSize: 10 }}>{props.chapter}</Text>
         <Text style={{ color: "white", marginTop: 5, fontSize: 12 }}>
            {props.description}
         </Text>
         <MaterialIcons
            name="file-download"
            size={23}
            color="white"
            style={{ marginTop: 5, textAlign: "right" }}
         />
      </View>
   );
};

const notesScreen = (props) => {
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
               paddingTop: 30,
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
               Notes
            </Text>
            {/* <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
               }}
            >
               <View
                  style={{
                     backgroundColor: "#3283c9",
                     paddingHorizontal: 8,
                     paddingVertical: 3,
                     borderRadius: 5,
                  }}
               >
                  <Text
                     style={{
                        fontSize: 10,
                        color: "white",
                        fontWeight: "bold",
                     }}
                  >
                     NOTES
                  </Text>
               </View>
               <View
                  style={{
                     backgroundColor: "#e8f4ff",
                     paddingHorizontal: 8,
                     paddingVertical: 3,
                     borderRadius: 5,
                  }}
               >
                  <Text
                     style={{
                        fontSize: 10,
                        color: "black",
                        fontWeight: "bold",
                     }}
                  >
                     ASSIGNMENTS
                  </Text>
               </View>
               <View
                  style={{
                     backgroundColor: "#e8f4ff",
                     paddingHorizontal: 8,
                     paddingVertical: 3,
                     borderRadius: 5,
                  }}
               >
                  <Text
                     style={{
                        fontSize: 10,
                        color: "black",
                        fontWeight: "bold",
                     }}
                  >
                     DOCUMENTS
                  </Text>
               </View>
               <View
                  style={{
                     backgroundColor: "#e8f4ff",
                     paddingHorizontal: 8,
                     paddingVertical: 3,
                     borderRadius: 5,
                  }}
               >
                  <Text
                     style={{
                        fontSize: 10,
                        color: "black",
                        fontWeight: "bold",
                     }}
                  >
                     LEAVE REQUESTS
                  </Text>
               </View>
            </View> */}
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
                  <Text>Chapter Number</Text>
                  <TextInput
                     placeholder="Chapter No."
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
                  Notes uploaded
               </Text>
               <View
                  style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                     marginBottom: 15,
                  }}
               >
                  <NoteContainer
                     title="The Twinkle"
                     chapter="CHAPTER 1"
                     description="This will be the description of the first chapter"
                  />
                  <NoteContainer
                     title="The Twinkle"
                     chapter="CHAPTER 1"
                     description="This will be the description of the first chapter"
                  />
               </View>
            </View>
         </View>
      </ScrollView>
   );
};

export default notesScreen;
