import { IDelivery } from "@/models/delivery";
import Box from "../general/Box";
import { FlatList } from "react-native-gesture-handler";
import DeliveryHistoryCard from "./DeliveryHistoryCard";
import CustomText from "../general/CustomText";
import useGetDeliveries from "@/hooks/queries/useGetDeliveries";

export default function DeliveryDrivers({ drivers }: { drivers: IDelivery[] }) {
  const { isLoading, data, isError } = useGetDeliveries();
  console.log(data?.data);
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
        data={data?.data?.data || []}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <DeliveryHistoryCard
            subTitle={item.destination}
            title={item?.arrival_date}
            amount={item?.max_price}
          />
        )}
      />
    </Box>
  );
}
