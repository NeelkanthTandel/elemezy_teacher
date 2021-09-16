import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

import colors from "../theme/color";
import classes from "../screens/classesScreen";
import dashboardScreen from "../screens/dashboardScreen";
import calendarScreen from "../screens/calendarsScreen";
import leaveRequestsScreen from "../screens/leaveRequestsScreen";
import classesScreen from "../screens/classesScreen";
import supportScreen from "../screens/supportScreen";
import chatScreen from "../screens/chatScreen";
import profileScreen from "../screens/profileScreen";
import notesScreen from "../screens/notesScreen";
import assignmentScreen from "../screens/assignmentScreen";
import documentScreen from "../screens/documentScreen";
import eventHome from "../screens/Exam/index";
import newExamScreen from "../screens/Exam/newExamScreen";
import viewExamScreen from "../screens/Exam/viewExamScreen";
import successScreen from "../screens/Exam/successScreen";
import rankingHomeScreen from "../screens/Ranking";
import viewRankingScreen from "../screens/Ranking/viewRankingScreen";
import resultHomeScreen from "../screens/Result";
import addResultScreen from "../screens/Result/addResultScreen";
import launchScreen from "../screens/launchScreen";

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
         <Stack.Screen name="home" component={eventHome} />
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
         <Stack.Screen name="addResult" component={addResultScreen} />
         <Stack.Screen name="home" component={resultHomeScreen} />
      </Stack.Navigator>
   );
};

const Drawer = createDrawerNavigator();

const DrawerStack = (props) => {
   let toggleDrawer;

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
               <TouchableOpacity
                  onPress={() => props.navigation.navigate("Profile")}
               >
                  <Ionicons
                     name="ios-person-circle"
                     size={30}
                     color={colors.headerTitle}
                     style={{ marginTop: 3, marginHorizontal: 15 }}
                  />
               </TouchableOpacity>
            ),
         }}
         drawerContent={(props) => {
            toggleDrawer = props.navigation.toggleDrawer;
            return (
               <DrawerContentScrollView {...props}>
                  <DrawerItemList {...props} />
               </DrawerContentScrollView>
            );
         }}
      >
         <Drawer.Screen
            name="Launch"
            component={launchScreen}
            options={{
               headerShown: false,
               swipeEnabled: false,
            }}
         />
         <Drawer.Screen
            name="Dashboard"
            component={dashboardScreen}
            options={{
               drawerLabel: "Home",
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
            component={classes}
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
            component={leaveRequestsScreen}
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
            component={chatScreen}
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
         <Drawer.Screen
            name="Log Out"
            component={classes}
            options={{
               drawerIcon: () => (
                  <Ionicons
                     name="log-out"
                     size={23}
                     color={colors.headerTitle}
                  />
               ),
            }}
         />
      </Drawer.Navigator>
   );
};

export default function MainNavigator(Props) {
   return (
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
                  // headerLeft: () => (
                  //    <TouchableOpacity
                  //       onPress={() => Props.navigation.goBack()}
                  //    >
                  //       <MaterialIcons
                  //          name="keyboard-arrow-left"
                  //          size={30}
                  //          style={{ marginTop: 3, marginRight: 10 }}
                  //          color={colors.headerTitle}
                  //       />
                  //    </TouchableOpacity>
                  // ),
               }}
            >
               <Stack.Screen
                  name="Drawer"
                  component={DrawerStack}
                  options={{ headerShown: false }}
                  initialParams={{
                     Props: true,
                  }}
               />
               <Stack.Screen name="Profile" component={profileScreen} />
            </Stack.Navigator>
         </NavigationContainer>
      </>
   );
}
