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
import { Picker } from "@react-native-picker/picker";

import colors from "../../theme/color";

const StudentContainer = (props) => {
   return (
      <View
         style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            flex: 1,
            alignItems: "center",
            borderWidth: 1,
            borderColor: colors.textSecondary,
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
            marginBottom: 15,
         }}
      >
         <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
               style={{
                  width: 25,
                  height: 25,
                  backgroundColor: "pink",
                  borderRadius: 30,
                  marginRight: 15,
               }}
            />
            <Text style={{ fontWeight: "bold" }}>{props.name}</Text>
         </View>
         <Text>{props.class}</Text>
         <Text>{props.points} P</Text>
         <TouchableOpacity
            style={{
               padding: 8,
               alignItems: "center",
               justifyContent: "center",
               paddingVertical: 3,
               backgroundColor: "#3283c9",
               borderRadius: 5,
            }}
            activeOpacity={0.6}
            onPress={() => props.navigation.navigate("viewRanking")}
         >
            <Text style={{ color: "white" }}>View</Text>
         </TouchableOpacity>
      </View>
   );
};

const index = (props) => {
   const [classroom, setClassroom] = useState("");
   const [sort, setSort] = useState("");

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
            <Text
               style={{
                  fontSize: 24,
                  fontWeight: "700",
                  lineHeight: 24,
                  color: colors.textPrimary,
                  marginTop: 5,
                  flex: 1,
                  textAlign: "center",
                  marginBottom: 30,
               }}
            >
               Holistic Ranking
            </Text>
            <View
               style={{
                  alignItems: "flex-start",
               }}
            >
               <Text
                  style={{
                     fontSize: 16,
                     color: colors.textSecondary,
                  }}
               >
                  Select Classroom to view ranking
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
                        selectedValue={sort}
                        onValueChange={(itemValue, itemIndex) =>
                           setSort(itemValue)
                        }
                        style={{
                           color: colors.textPrimary,
                           width: "100%",
                           marginRight: -10,
                        }}
                        dropdownIconColor="grey"
                     >
                        <Picker.Item label="Sort By" value="Sort By" />
                     </Picker>
                  </View>
               </View>
            </View>
            <View
               style={{
                  flex: 1,
                  width: "100%",
                  marginTop: 30,
               }}
            >
               <StudentContainer
                  name="Santosh"
                  class="10A"
                  points="350"
                  navigation={props.navigation}
               />
               <StudentContainer
                  name="Ramesh"
                  class="10A"
                  points="350"
                  navigation={props.navigation}
               />
            </View>
         </View>
      </ScrollView>
   );
};
export default index;
