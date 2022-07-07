import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text } from "react-native";
import RestaurantsScreen from "../../features/restaurant/screens/restaurant.screen";
import RestaurantDetailScreen from "../../features/restaurant/screens/restaurant-detail.screen";

const Restaurants = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <Restaurants.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Restaurants.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
      />
      <Restaurants.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </Restaurants.Navigator>
  );
};

export default RestaurantsNavigator;
