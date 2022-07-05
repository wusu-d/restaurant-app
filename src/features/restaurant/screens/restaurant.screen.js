import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Spacer from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

// const RestaurantList = styled(FlatList).attrs({
//   contentContainerStyle: {
//     padding: 16,
//   },
// });

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={[{ name: 1 }, { name: 2 }]}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
