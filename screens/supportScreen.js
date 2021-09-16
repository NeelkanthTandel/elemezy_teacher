import React from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import colors from "../theme/color";

const supportScreen = (props) => {
   return (
      <>
         <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: colors.backgroundColor }}
         >
            <View
               style={{
                  flex: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 30,
                  alignItems: "center",
               }}
            >
               <Text
                  style={{
                     fontSize: 24,
                     fontWeight: "700",
                     lineHeight: 24,
                     color: colors.textPrimary,
                  }}
               >
                  24 / 7 Support Service
               </Text>
               <Text
                  style={{
                     fontSize: 20,
                     fontWeight: "700",
                     lineHeight: 20,
                     color: colors.textPrimary,
                     marginVertical: 10,
                  }}
               >
                  Contact Us
               </Text>
               <View style={{ width: "100%", alignItems: "center" }}>
                  <Text
                     style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "black",
                     }}
                  >
                     Email: support@elemexy
                  </Text>
                  <Text
                     style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "black",
                     }}
                  >
                     Contact: 9512131994
                  </Text>
               </View>
               <Text
                  style={{
                     color: colors.textSecondary,
                     fontSize: 16,
                     marginVertical: 20,
                  }}
               >
                  OR
               </Text>
               <Text
                  style={{
                     color: colors.textPrimary,
                     fontSize: 16,
                     fontWeight: "bold",
                  }}
               >
                  FILL OUT THIS FORM
               </Text>
               <View style={{ width: "100%", marginTop: 30 }}>
                  <View style={{ marginBottom: 15 }}>
                     <Text>Full Name</Text>
                     <TextInput
                        placeholder="Full Name"
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
                  <View style={{ marginBottom: 15 }}>
                     <Text>Email</Text>
                     <TextInput
                        placeholder="Email"
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
                  <View style={{ marginBottom: 15 }}>
                     <Text>Subject</Text>
                     <TextInput
                        placeholder="Subject"
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
                  <View style={{ marginBottom: 15 }}>
                     <Text>Description</Text>
                     <TextInput
                        placeholder="Description"
                        style={{
                           width: "100%",
                           borderWidth: 1,
                           paddingVertical: 8,
                           paddingHorizontal: 10,
                           borderRadius: 5,
                           borderColor: colors.textSecondary,
                           marginTop: 10,
                        }}
                        textAlignVertical="top"
                        numberOfLines={4}
                        multiline={true}
                     />
                  </View>
                  <View
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
                        Submit
                     </Text>
                  </View>
               </View>
            </View>
         </ScrollView>
      </>
   );
};

export default supportScreen;
