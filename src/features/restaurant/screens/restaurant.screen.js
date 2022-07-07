import { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import Search from "../components/search.component";

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

// const RestaurantList = styled(FlatList).attrs({
//   contentContainerStyle: {
//     padding: 16,
//   },
// });

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, loading, error } = useContext(RestaurantContext);
  return (
    <SafeArea>
      {loading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="tomato" />
        </LoadingContainer>
      )}
      <Search />
      {restaurants && (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <>
                <Spacer position="bottom" size="large">
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("RestaurantDetail", {
                        restaurant: item,
                      })
                    }
                  >
                    <RestaurantInfoCard restaurant={item} />
                  </TouchableOpacity>
                </Spacer>
              </>
            );
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
