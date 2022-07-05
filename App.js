import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { View, Text } from "react-native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantsScreen from "./src/features/restaurant/screens/restaurant.screen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

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

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ExpoStatusBar style="auto" />
      <ThemeProvider theme={theme}>
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
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
