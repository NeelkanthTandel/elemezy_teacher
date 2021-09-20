import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";

import colors from "../../theme/color";

const ChatContainer = (props) => {
   return (
      <TouchableOpacity
         activeOpacity={0.6}
         style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginVertical: 15,
         }}
         onPress={props.onPress}
      >
         <View
            style={{
               width: 40,
               height: 40,
               backgroundColor: "#ccc",
               marginRight: 15,
               borderRadius: 10,
            }}
         />
         <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 16 }}>{props.name}</Text>
            <View
               style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
               }}
            >
               <Text
                  style={{
                     color: colors.textSecondary,
                     fontSize: 12,
                     width: "80%",
                  }}
                  numberOfLines={1}
               >
                  {props.isLastMessaged ? "" : "You: "}
                  {props.lastMessage}
               </Text>
               <Text style={{ color: colors.textSecondary, fontSize: 12 }}>
                  {props.timePassed}
               </Text>
            </View>
         </View>
      </TouchableOpacity>
   );
};

const index = (props) => {
   const [search, setSearch] = useState("");
   const chats = [
      {
         name: "Neelkanth",
         lastMessage: "Okay",
         timePassed: "12m",
         isLastMessaged: false,
      },
      {
         name: "Person",
         lastMessage: "Yes",
         timePassed: "1h",
         isLastMessaged: true,
      },
      {
         name: "Musk",
         lastMessage: "Launched and landed successfully",
         timePassed: "12m",
         isLastMessaged: true,
      },
      {
         name: "Musk",
         lastMessage: "Launched and landed successfully",
         timePassed: "12m",
         isLastMessaged: true,
      },
      {
         name: "Musk",
         lastMessage: "Launched and landed successfully",
         timePassed: "12m",
         isLastMessaged: true,
      },
      {
         name: "Musk",
         lastMessage: "Launched and landed successfully",
         timePassed: "12m",
         isLastMessaged: true,
      },
      {
         name: "Musk",
         lastMessage: "Launched and landed successfully",
         timePassed: "12m",
         isLastMessaged: true,
      },
      {
         name: "Musk",
         lastMessage: "Launched and landed successfully",
         timePassed: "12m",
         isLastMessaged: true,
      },
      {
         name: "Musk",
         lastMessage: "Launched and landed successfully",
         timePassed: "12m",
         isLastMessaged: true,
      },
      {
         name: "Musk",
         lastMessage: "Launched and landed successfully",
         timePassed: "12m",
         isLastMessaged: true,
      },
      {
         name: "Musk",
         lastMessage: "Launched and landed successfully",
         timePassed: "12m",
         isLastMessaged: true,
      },
   ];
   const [filteredChats, setFilteredChats] = useState([]);

   const handleSearch = (text) => {
      const formatedText = text.toLowerCase();
      const filteredData = chats.filter((user) =>
         user.name.toLowerCase().includes(formatedText)
      );
      setFilteredChats(filteredData);
   };

   return (
      <View
         style={{
            paddingHorizontal: 20,
            paddingTop: 30,
            backgroundColor: colors.backgroundColor,
            flex: 1,
         }}
      >
         <Text
            style={{
               fontSize: 24,
               fontWeight: "700",
               lineHeight: 24,
               color: colors.textPrimary,
               marginBottom: 15,
            }}
         >
            Chats
         </Text>
         <SearchBar
            placeholder="Search"
            onChangeText={(val) => {
               setSearch(val);
               handleSearch(val);
            }}
            value={search}
            inputContainerStyle={{
               backgroundColor: "#e8f4ff",
               borderRadius: 10,
            }}
            lightTheme
            containerStyle={{
               padding: 0,
               borderTopWidth: 0,
               borderBottomWidth: 0,
               borderRadius: 10,
               marginBottom: 15,
            }}
         />
         <FlatList
            data={search ? filteredChats : chats}
            renderItem={(itemData) => {
               return (
                  <ChatContainer
                     name={itemData.item.name}
                     lastMessage={itemData.item.lastMessage}
                     timePassed={itemData.item.timePassed}
                     isLastMessaged={itemData.item.isLastMessaged}
                     onPress={() =>
                        props.navigation.navigate("chat", {
                           name: itemData.item.name,
                        })
                     }
                  />
               );
            }}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => (
               <View style={{ marginTop: 30, alignItems: "center" }}>
                  <Text>No result found</Text>
               </View>
            )}
            ItemSeparatorComponent={() => (
               <View
                  style={{
                     width: "100%",
                     borderBottomWidth: 1,
                     borderBottomColor: "#ccc",
                  }}
               />
            )}
            showsVerticalScrollIndicator={false}
         />
      </View>
   );
};

export default index;
