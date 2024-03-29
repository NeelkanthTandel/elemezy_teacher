import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { StatusBar, TouchableOpacity } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
   createDrawerNavigator,
   DrawerContentScrollView,
   DrawerItem,
   DrawerItemList,
} from "@react-navigation/drawer";
import {
   MaterialIcons,
   MaterialCommunityIcons,
   Ionicons,
   FontAwesome,
   Entypo,
   Octicons,
} from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import { AUTH_API_URL } from "../keys";
import colors from "../theme/color";
import dashboardScreen from "../screens/dashboardScreen";
import calendarScreen from "../screens/calendarsScreen";
import leaveRequestsScreen from "../screens/classes/leaveRequestsScreen";
import classesScreen from "../screens/classes/classesScreen";
import supportScreen from "../screens/supportScreen";
import chatHomeScreen from "../screens/chat";
import profileScreen from "../screens/profileScreen";
import notesScreen from "../screens/classes/notesScreen";
import assignmentScreen from "../screens/classes/assignmentScreen";
import documentScreen from "../screens/classes/documentScreen";
import examHome from "../screens/Exam/index";
import newExamScreen from "../screens/Exam/newExamScreen";
import viewExamScreen from "../screens/Exam/viewExamScreen";
import successScreen from "../screens/Exam/successScreen";
import rankingHomeScreen from "../screens/Ranking";
import viewRankingScreen from "../screens/Ranking/viewRankingScreen";
import resultHomeScreen from "../screens/Result";
import addResultScreen from "../screens/Result/addResultScreen";
import LoginScreen from "../screens/loginScreen";
import viewResultScreen from "../screens/Result/viewResultScreen";
import studentResult from "../screens/Result/studentResultScreen";
import chatScreen from "../screens/chat/chatScreen";
import meetingHomeScreen from "../screens/Meeting";
import newMeetingScreen from "../screens/Meeting/newMeetingScreen";
import viewMeetingScreen from "../screens/Meeting/viewMeetingScreen";
import meetingSuccessScreen from "../screens/Meeting/successScreen";
import attendanceHomeScreen from "../screens/Attendance";
import addAttendanceScreen from "../screens/Attendance/addAttendance";
import viewAttendanceScreen from "../screens/Attendance/viewAttendance";
import notificationSceen from "../screens/notificationScreen";

const Stack = createNativeStackNavigator();

const classesStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="overview" component={classesScreen} />
         <Stack.Screen name="notes" component={notesScreen} />
         <Stack.Screen name="assignment" component={assignmentScreen} />
         <Stack.Screen name="document" component={documentScreen} />
         <Stack.Screen name="leaveRequest" component={leaveRequestsScreen} />
      </Stack.Navigator>
   );
};
const examStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="home" component={examHome} />
         <Stack.Screen name="success" component={successScreen} />
         <Stack.Screen name="newExam" component={newExamScreen} />
         <Stack.Screen name="viewExam" component={viewExamScreen} />
      </Stack.Navigator>
   );
};
const rankingStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="home" component={rankingHomeScreen} />
         <Stack.Screen name="viewRanking" component={viewRankingScreen} />
      </Stack.Navigator>
   );
};

const resultStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="home" component={resultHomeScreen} />
         <Stack.Screen name="addResult" component={addResultScreen} />
         <Stack.Screen name="viewResult" component={viewResultScreen} />
         <Stack.Screen name="studentResult" component={studentResult} />
      </Stack.Navigator>
   );
};

const meetingStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="home" component={meetingHomeScreen} />
         <Stack.Screen name="newMeeting" component={newMeetingScreen} />
         <Stack.Screen name="viewMeeting" component={viewMeetingScreen} />
         <Stack.Screen name="success" component={meetingSuccessScreen} />
      </Stack.Navigator>
   );
};

const attendanceStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="home" component={attendanceHomeScreen} />
         <Stack.Screen name="addAttendance" component={addAttendanceScreen} />
         <Stack.Screen name="viewAttendance" component={viewAttendanceScreen} />
      </Stack.Navigator>
   );
};

const chatStack = (props) => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
         <Stack.Screen name="home" component={chatHomeScreen} />
         <Stack.Screen name="chat" component={chatScreen} />
      </Stack.Navigator>
   );
};

const Drawer = createDrawerNavigator();

const DrawerStack = (props) => {
   const [loading, setLoading] = useState(false);
   let toggleDrawer;

   const token = useSelector((state) => state.users.token);

   const dispatch = useDispatch();

   const logoutHandler = async () => {
      try {
         const response = await fetch(`${AUTH_API_URL}/logout`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: "Token " + token,
            },
         });
         // const data = await response.json();
         console.log("logout");
         dispatch(setToken(""));
         await AsyncStorage.removeItem("token");
         props.navigation.dispatch(StackActions.replace("Launch"));
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <Drawer.Navigator
         screenOptions={{
            //   swipeEnabled: false,
            drawerActiveTintColor: colors.headerTitle,
            //  drawerActiveBackgroundColor: 'grey',
            drawerInactiveTintColor: colors.headerTitle,
            //  drawerItemStyle: {
            //    borderWidth: 1,
            //  },
            drawerLabelStyle: {
               color: colors.headerTitle,
            },
            drawerStyle: {
               paddingTop: 60,
               borderTopRightRadius: 20,
               borderBottomRightRadius: 20,
               backgroundColor: colors.headerBackground,
            },
            //   overlayColor: Colors.selected,
            headerTintColor: colors.headerTitle,

            headerStyle: {
               backgroundColor: colors.headerBackground,
               height: 60,
            },
            headerLeft: () => (
               <TouchableOpacity
                  onPress={() => toggleDrawer()}
                  activeOpacity={0.6}
               >
                  <Ionicons
                     name="ios-menu"
                     size={25}
                     color={colors.headerTitle}
                     style={{ marginTop: 3, marginLeft: 15 }}
                  />
               </TouchableOpacity>
            ),
            headerRight: () => (
               <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                     onPress={() => props.navigation.navigate("Notification")}
                  >
                     <Ionicons
                        name="notifications"
                        size={28}
                        color={colors.headerTitle}
                        style={{ marginTop: 3, marginRight: 15 }}
                     />
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={() => props.navigation.navigate("Profile")}
                  >
                     <Ionicons
                        name="ios-person-circle"
                        size={30}
                        color={colors.headerTitle}
                        style={{ marginTop: 3, marginRight: 15 }}
                     />
                  </TouchableOpacity>
               </View>
            ),
         }}
         drawerContent={(props) => {
            toggleDrawer = props.navigation.toggleDrawer;
            return (
               <>
                  <View
                     style={{
                        marginTop: -20,
                        marginBottom: 20,
                        // marginLeft: 15,
                        alignItems: "flex-start",
                     }}
                  >
                     <Image
                        source={require("../assets/Images/ELfulllogo.png")}
                        style={{ width: 150, height: 50 }}
                        resizeMode={"contain"}
                     />
                  </View>
                  <DrawerContentScrollView {...props}>
                     <DrawerItemList {...props} />
                     <DrawerItem
                        label={() => (
                           <View
                              style={{
                                 flexDirection: "row",
                                 alignItems: "center",
                              }}
                           >
                              <Ionicons
                                 name="log-out"
                                 size={23}
                                 color={colors.headerTitle}
                              />
                              <Text
                                 style={{
                                    color: colors.headerTitle,
                                    marginLeft: 30,
                                 }}
                              >
                                 Log Out
                              </Text>
                           </View>
                        )}
                        onPress={logoutHandler}
                     />
                  </DrawerContentScrollView>
               </>
            );
         }}
      >
         <Drawer.Screen
            name="Dashboard"
            component={dashboardScreen}
            options={{
               drawerLabel: "Dashboard",
               title: "",
               drawerIcon: () => (
                  <MaterialIcons
                     name="dashboard"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Classes"
            component={classesStack}
            options={{
               drawerLabel: "Classes",
               title: "",
               drawerIcon: () => (
                  <Entypo
                     name="blackboard"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Events"
            component={calendarScreen}
            options={{
               drawerLabel: "Events",
               title: "",
               drawerIcon: () => (
                  <Ionicons
                     name="person"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Exams"
            component={examStack}
            options={{
               drawerLabel: "Exams",
               title: "",
               drawerIcon: () => (
                  <MaterialCommunityIcons
                     name="clipboard-list"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Result"
            component={resultStack}
            options={{
               drawerLabel: "Result",
               title: "",
               drawerIcon: () => (
                  <FontAwesome
                     name="graduation-cap"
                     size={18}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Ranking"
            component={rankingStack}
            options={{
               drawerLabel: "Ranking",
               title: "",
               drawerIcon: () => (
                  <Entypo
                     name="bar-graph"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Meeting"
            component={meetingStack}
            options={{
               drawerIcon: () => (
                  <FontAwesome
                     name="group"
                     size={22}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Attendance"
            component={attendanceStack}
            options={{
               drawerLabel: "Attendance",
               title: "",
               drawerIcon: () => (
                  <Octicons
                     name="checklist"
                     size={25}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Chat"
            component={chatStack}
            options={{
               drawerLabel: "Chat",
               title: "",
               drawerIcon: () => (
                  <Ionicons
                     name="chatbox-ellipses"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Support"
            component={supportScreen}
            options={{
               title: "",
               drawerLabel: "Support",
               drawerIcon: () => (
                  <MaterialIcons
                     name="support-agent"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
      </Drawer.Navigator>
   );
};

import {
   setToken,
   setCSRF,
   setName,
   setEmail,
   setClassIdList,
} from "../store/actions/user";
import getCSRFToken from "../getCSRFToken";

export default function MainNavigator(Props) {
   const [isLoggedIn, setIsLoggedIn] = useState(null);
   const [data, setData] = useState({});
   const token = useSelector((state) => state.users.token);

   const dispatch = useDispatch();
   const checkIfLoggedIn = async () => {
      const token = await AsyncStorage.getItem("token");
      dispatch(setToken(token));
      // console.log("token: ", token);
      if (!token || token == "") {
         console.log("No token => In main navigator");
         return setIsLoggedIn(false);
      } else {
         try {
            const response = await fetch(`${AUTH_API_URL}/user`, {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: "Token " + token,
               },
            });
            const data = await response.json();
            console.log("main navigator:", token);
            if (data.email) {
               const csrf = await getCSRFToken(token);
               if (csrf) {
                  dispatch(setCSRF(csrf));
                  dispatch(setName(data.firstname + " " + data.lastname));
                  dispatch(setEmail(data.email));
                  dispatch(setClassIdList(JSON.parse(data.class_id_list)));
                  setData(data);
                  setIsLoggedIn(true);
               } else {
                  setIsLoggedIn(false);
               }
            } else {
               setIsLoggedIn(false);
            }
         } catch (err) {
            console.log(err);
         }
      }
   };

   useEffect(() => {
      checkIfLoggedIn();
   }, []);

   return (
      <>
         {isLoggedIn == null ? (
            // Executed when authentication is in process
            <View
               style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <Text>Loading...</Text>
            </View>
         ) : (
            <>
               <StatusBar
                  backgroundColor={colors.headerTitle}
                  barStyle="dark-content"
               />
               <NavigationContainer>
                  <Stack.Navigator
                     screenOptions={{
                        headerTintColor: colors.headerTitle,
                        headerStyle: {
                           backgroundColor: colors.headerBackground,
                           height: 60,
                        },
                     }}
                  >
                     {isLoggedIn ? (
                        // Executed if user exist (if we get valid token)
                        <>
                           <Stack.Screen
                              name="Drawer"
                              component={DrawerStack}
                              options={{ headerShown: false }}
                              initialParams={{
                                 Props: true,
                              }}
                           />
                           <Stack.Screen
                              name="Launch"
                              component={LoginScreen}
                              options={{ headerShown: false }}
                           />
                           <Stack.Screen
                              name="Profile"
                              component={profileScreen}
                           />
                           <Stack.Screen
                              name="Notification"
                              component={notificationSceen}
                           />
                        </>
                     ) : (
                        //Executed when there is no valid token
                        <>
                           <Stack.Screen
                              name="Launch"
                              component={LoginScreen}
                              options={{ headerShown: false }}
                           />
                           <Stack.Screen
                              name="Drawer"
                              component={DrawerStack}
                              options={{ headerShown: false }}
                              initialParams={{
                                 Props: true,
                              }}
                           />
                           <Stack.Screen
                              name="Profile"
                              component={profileScreen}
                           />
                           <Stack.Screen
                              name="Notification"
                              component={notificationSceen}
                           />
                        </>
                     )}
                  </Stack.Navigator>
               </NavigationContainer>
            </>
         )}
      </>
   );
}
