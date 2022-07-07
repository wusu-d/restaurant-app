import { SafeArea } from "../../../src/components/utility/safe-area.component";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantsNavigator from "./restaurants.navigator";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};
const AppNavigator = () => {
  const SettingsScreen = () => {
    return (
      <SafeArea>
        <Text>Setting Screen</Text>
      </SafeArea>
    );
  };

  const MapScreen = () => {
    return (
      <SafeArea>
        <Text>Map Screen</Text>
      </SafeArea>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => {
          const iconName = TAB_ICONS[route.name];
          return {
            tabBarIcon: ({ size, color }) => {
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          };
        }}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
