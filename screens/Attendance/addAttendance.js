import React, { useState } from "react";
import {
   View,
   ScrollView,
   Text,
   TouchableOpacity,
   TextInput,
   Alert,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

import colors from "../../theme/color";
import DatePickerButton from "../../components/DatePickerButton";

const addAttendanceScreen = (props) => {
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
                  Attendance
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
                        <Picker.Item label="Time Slot" value="Time Slot" />
                        <Picker.Item label="11 - 11:30" value="11 - 11:30" />
                        <Picker.Item label="11:30 - 12" value="11:30 - 12" />
                     </Picker>
                  </View>

                  <View
                     style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        flex: 1,
                        alignItems: "center",
                     }}
                  >
                     <Text>Date: </Text>
                     <DatePickerButton
                        date={formatedDate}
                        onPress={() => showMode("date")}
                     />
                  </View>
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
               <View style={{ marginTop: 30 }}>
                  <Text style={{ fontSize: 16 }}>
                     Class Teacher:{" "}
                     <Text
                        style={{
                           color: colors.textPrimary,
                           fontSize: 16,
                           fontWeight: "bold",
                        }}
                     >
                        Shoba
                     </Text>
                  </Text>
                  {/* <Text style={{ fontSize: 16, marginBottom: 10 }}>
                     Subject Teacher:{" "}
                     <Text
                        style={{
                           color: colors.textPrimary,
                           fontSize: 16,
                           fontWeight: "bold",
                        }}
                     >
                        Shoba
                     </Text>
                  </Text>
                  <Text style={{ fontSize: 16, marginBottom: 10 }}>
                     Class Strength:{" "}
                     <Text
                        style={{
                           color: colors.textPrimary,
                           fontSize: 16,
                           fontWeight: "bold",
                        }}
                     >
                        40
                     </Text>
                     /45
                  </Text> */}
                  <Text
                     style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: colors.textPrimary,
                        marginTop: 30,
                     }}
                  >
                     List of students
                  </Text>
                  <View
                     style={{
                        width: "100%",
                        flexDirection: "row",
                        marginTop: 10,
                     }}
                  >
                     <Text style={{ width: "30%", fontWeight: "bold" }}>
                        Name
                     </Text>
                     <Text style={{ width: "20%", fontWeight: "bold" }}>
                        Class
                     </Text>
                     <Text style={{ width: "25%", fontWeight: "bold" }}>
                        Status
                     </Text>
                     <Text style={{ width: "25%", fontWeight: "bold" }}>
                        Mark
                     </Text>
                  </View>
                  <View
                     style={{
                        width: "100%",
                        flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center",
                     }}
                  >
                     <Text style={{ width: "30%" }}>Santosh</Text>
                     <Text style={{ width: "20%" }}>10A</Text>
                     <Text style={{ width: "25%", color: "#ff4646" }}>
                        Absent
                     </Text>
                     <View
                        style={{
                           width: "25%",
                           flexDirection: "row",
                           justifyContent: "space-between",
                        }}
                     >
                        <TouchableOpacity>
                           <Ionicons
                              name="close-circle-sharp"
                              size={30}
                              color="#ff4646"
                           />
                        </TouchableOpacity>
                        <TouchableOpacity>
                           <Ionicons
                              name="checkmark-circle"
                              size={30}
                              color="#008d13"
                           />
                        </TouchableOpacity>
                     </View>
                  </View>
                  <View
                     style={{
                        width: "100%",
                        flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center",
                     }}
                  >
                     <Text style={{ width: "30%" }}>Ramesh</Text>
                     <Text style={{ width: "20%" }}>10A</Text>
                     <Text style={{ width: "25%", color: "#008d13" }}>
                        Present
                     </Text>
                     <View
                        style={{
                           width: "25%",
                           flexDirection: "row",
                           justifyContent: "space-between",
                        }}
                     >
                        <TouchableOpacity>
                           <Ionicons
                              name="close-circle-sharp"
                              size={30}
                              color="#ff4646"
                           />
                        </TouchableOpacity>
                        <TouchableOpacity>
                           <Ionicons
                              name="checkmark-circle"
                              size={30}
                              color="#008d13"
                           />
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
            </View>
         </View>
      </ScrollView>
   );
};
export default addAttendanceScreen;
