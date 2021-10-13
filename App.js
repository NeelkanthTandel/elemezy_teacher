import React, { useEffect } from "react";
import { View, Image, Button } from "react-native";
import MainNavigator from "./navigation/mainNavigator";
// import * as Notification from "expo-notifications";

// Notification.setNotificationHandler({
//    handleNotification: async () => {
//       return {
//          shouldShowAlert: true,
//          shouldPlaySound: true,
//       };
//    },
// });
export default function App() {
   return <MainNavigator />;
   // const toggleNotificationHandler = async () => {
   //    // Notification.scheduleNotificationAsync({
   //    //    content: {
   //    //       title: "First Noti",
   //    //       body: "This is my first expo notification!!",
   //    //    },
   //    //    trigger: {
   //    //       seconds: 2,
   //    //    },
   //    // });
   //    console.log("sending");
   //    try {
   //       const response = await fetch("https://fcm.googleapis.com/fcm/send", {
   //          method: "POST",
   //          headers: {
   //             "Content-Type": "application/json",
   //             Authorization: `key=AAAA96xaeAQ:APA91bFwy2DFE6h-S9aVu2h7zquyWRGJEAeBEodVwxAKeXUSozaqJwEmJwmHzjo3pvg8hgzMsjunig7dmd7MYswWDpUWX4vnssETAYZPRGxmJaXrKKwZyruDkCSrL3vk09QMnnNE0Lwa`,
   //          },
   //          body: JSON.stringify({
   //             to: "emk3r-5aQ6Sfkccu-zhi3n:APA91bHX7WVDl8InGrs1HIvFzITWwLukNxHkxVlcgpmvCoYSMUr6Nk4A1LYvjEEGb4aikXjIj9cOc39gbfb1wGKN6yYpH-_dqCD6VPf_90fm_oNPf0ppu0EFu_ircwknKj5ZynWRVm0y",
   //             priority: "normal",
   //             data: {
   //                // experienceId: "@neelkanthtandel/ELEMEZY_STUDENT",
   //                // title: "You've got mail",
   //                // message: "Hello world!",
   //                subject: "Message",
   //             },
   //             notification: {
   //                title: "TITLE",
   //                message: "Message!!!",
   //             },
   //             json: true,
   //          }),
   //       });
   //       const data = await response.json();
   //       console.log("data:", data);
   //    } catch (err) {
   //       console.log(err);
   //    }
   //    // try {
   //    //    fetch("https://exp.host/--/api/v2/push/send", {
   //    //       method: "POST",
   //    //       headers: {
   //    //          Accept: "application/json",
   //    //          "Accept-Encoding": "gzip, deflate",
   //    //          "Content-Type": "application/json",
   //    //       },
   //    //       body: JSON.stringify({
   //    //          to: "ExponentPushToken[SbYgh6N_Qu0uTsXGtraFGj]",
   //    //          data: { extraData: "Some Data" },
   //    //          title: "Push Notification",
   //    //          body: "Notification from other device",
   //    //       }),
   //    //    });
   //    // } catch (err) {
   //    //    console.log("Expo noti error: ", err);
   //    // }
   // };

   // useEffect(() => {
   //    Notification.getDevicePushTokenAsync().then((data) => {
   //       console.log(data);
   //    });
   //    // Notification.getExpoPushTokenAsync().then((data) => {
   //    //    console.log(data);
   //    // });

   //    const backgroundSubcription =
   //       Notification.addNotificationResponseReceivedListener((response) => {
   //          console.log("res:", response);
   //       });

   //    const foregroundSubscription =
   //       Notification.addNotificationReceivedListener((notification) => {
   //          console.log(notification);
   //       });

   //    const fcmSubcription = Notification.addPushTokenListener((res) => {
   //       console.log(res);
   //    });

   //    return () => {
   //       foregroundSubscription.remove();
   //       backgroundSubcription.remove();
   //       fcmSubcription.remove();
   //    };
   // }, []);

   // return (
   //    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
   //       <Button title="Send Noti" onPress={toggleNotificationHandler} />
   //    </View>
   // );
}
