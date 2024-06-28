import { IDelivery, IParcel } from "@/models/delivery";
import Box from "../general/Box";
import { FlatList } from "react-native-gesture-handler";
import DeliveryHistoryCard from "./DeliveryHistoryCard";
import CustomText from "../general/CustomText";

export default function ParcelsToDriver({ parcels }: { parcels: IParcel[] }) {
  return (
    <Box flex={1}>
      <FlatList
        ListHeaderComponentStyle={{
          marginBottom: 30,
        }}
        contentContainerStyle={{
          marginTop: 20,
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <Box
            width="100%"
            height={40}
            justifyContent="center"
            alignItems="center"
          >
            <CustomText>No Data</CustomText>
          </Box>
        )}
        data={parcels}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <DeliveryHistoryCard
            subTitle={item?.receiver_city}
            title={item?.state}
            amount={0}
          />
        )}
      />
    </Box>
  );
}
