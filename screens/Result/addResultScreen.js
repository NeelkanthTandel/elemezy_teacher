import React, { useState } from "react";
import {
   View,
   ScrollView,
   Text,
   TouchableOpacity,
   TextInput,
   FlatList,
   Alert,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

import colors from "../../theme/color";
import DatePickerButton from "../../components/DatePickerButton";

const addResultScreen = (props) => {
   const [date, setDate] = useState(new Date());
   const [mode, setMode] = useState("date");
   const [show, setShow] = useState(false);
   const [classroom, setClassroom] = useState("");
   const [subject, setSubject] = useState("");
   const [result, setResult] = useState([]);
   const [name, setName] = useState("");
   const [marks, setMarks] = useState("");
   const [markOutOf, setMarkOutOf] = useState("");

   console.log(result);
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

   const validateMarks = (mark) => {
      const re = /^[0-9]+$/;
      const i = parseInt(mark);
      console.log(i);
      if (!markOutOf || markOutOf == "") {
         if (re.test(mark) && i >= 0 && i <= 100) {
            return true;
         } else {
            return false;
         }
      } else {
         if (re.test(mark) && i >= 0 && i <= parseInt(markOutOf)) {
            return true;
         } else {
            return false;
         }
      }
   };

   const addResultHandler = () => {
      if (!name || !marks || name == "" || marks == "") {
         return Alert.alert("Error", "Field cannot be empty.");
      } else if (!validateMarks(marks)) {
         return Alert.alert(
            "Error",
            `Enter marks properly.\n${
               !markOutOf
                  ? "To enter marks more than 100, enter Marks (Out Of)."
                  : ""
            }`
         );
      }
      setResult((data) =>
         data
            ? [...data, { stuName: name, markObt: marks }]
            : [{ stuName: name, markObt: marks }]
      );
      setMarks("");
      setName("");
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
                  Result
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
                     fontSize: 20,
                     fontWeight: "bold",
                     color: colors.textPrimary,
                  }}
               >
                  Enter Result Manually
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
                        marginRight: 15,
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
                     </Picker>
                  </View>
               </View>
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
                        marginRight: 15,
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
                        <Picker.Item label="Exam" value="Exam" />
                        <Picker.Item label="9A" value="9A" />
                        <Picker.Item label="9B" value="9B" />
                     </Picker>
                  </View>
                  <TextInput
                     placeholder="Mark (Out Of)"
                     style={{
                        flex: 1,
                        marginRight: 15,
                        borderWidth: 0.5,
                        paddingVertical: 0,
                        paddingHorizontal: 10,
                        borderRadius: 5,
                        borderColor: colors.textSecondary,
                        color: colors.textPrimary,
                     }}
                     value={markOutOf}
                     onChangeText={(val) => setMarkOutOf(val)}
                  />

                  <DatePickerButton
                     date={formatedDate}
                     onPress={() => showMode("date")}
                  />
               </View>
               <View
                  style={{
                     width: "100%",
                     flexDirection: "row",
                     justifyContent: "space-between",
                     marginTop: 30,
                  }}
               >
                  <TextInput
                     placeholder="Student Name"
                     style={{
                        flex: 1,
                        marginRight: 15,
                        borderWidth: 0.5,
                        paddingVertical: 4,
                        paddingHorizontal: 10,
                        borderRadius: 5,
                        borderColor: colors.textSecondary,
                        color: colors.textPrimary,
                     }}
                     value={name}
                     onChangeText={(val) => setName(val)}
                  />
                  <TextInput
                     placeholder="Marks Obtained"
                     style={{
                        flex: 1,
                        marginRight: 15,
                        borderWidth: 0.5,
                        paddingVertical: 4,
                        paddingHorizontal: 10,
                        borderRadius: 5,
                        borderColor: colors.textSecondary,
                        color: colors.textPrimary,
                     }}
                     value={marks}
                     onChangeText={(val) => setMarks(val)}
                  />
                  <TouchableOpacity
                     style={{
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        backgroundColor: "#3283c9",
                        borderRadius: 5,
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                     onPress={addResultHandler}
                  >
                     <Text style={{ color: "white", fontWeight: "bold" }}>
                        ADD
                     </Text>
                  </TouchableOpacity>
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
            {console.log("re:", result)}
            {!result || result == [] || result == "" ? null : (
               <View
                  style={{
                     marginTop: 30,
                  }}
               >
                  <Text
                     style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: colors.textPrimary,
                     }}
                  >
                     Added results
                  </Text>
                  <View
                     style={{
                        flexDirection: "row",
                        width: "100%",
                        marginTop: 15,
                     }}
                  >
                     <Text style={{ flex: 1, fontWeight: "bold" }}>Name</Text>
                     <Text
                        style={{
                           width: "15%",
                           minWidth: 40,
                           fontWeight: "bold",
                        }}
                     >
                        Marks
                     </Text>
                  </View>
                  {result.map((data) => (
                     <View
                        style={{
                           flexDirection: "row",
                           width: "100%",
                           marginTop: 10,
                        }}
                        key={result.indexOf(data)}
                     >
                        <Text style={{ flex: 1 }}>{data.stuName}</Text>
                        <Text style={{ width: "15%", minWidth: 40 }}>
                           {data.markObt}
                        </Text>
                     </View>
                  ))}
                  <View
                     style={{
                        paddingVertical: 10,
                        width: "100%",
                        backgroundColor: "#3283c9",
                        alignItems: "center",
                        marginVertical: 30,
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
                        Upload added result
                     </Text>
                  </View>
               </View>
            )}

            <Text
               style={{
                  fontWeight: "bold",
                  color: colors.textSecondary,
                  textAlign: "center",
                  marginTop: 15,
               }}
            >
               OR
            </Text>
            <View
               style={{
                  width: "100%",
                  marginTop: 15,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
               }}
            >
               <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                     DocumentPicker.getDocumentAsync({
                        copyToCacheDirectory: false,
                     }).then((data) => console.log(data));
                  }}
                  style={{
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
                     paddingHorizontal: 10,
                     paddingVertical: 5,
                     backgroundColor: "#3283c9",
                     borderRadius: 5,
                     justifyContent: "center",
                     alignItems: "center",
                  }}
               >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                     UPLOAD DOC
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </ScrollView>
   );
};
export default addResultScreen;
