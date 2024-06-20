import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import useGetDeliveriesHistory from "@/hooks/queries/useDeliveryHistory";
import useGetDriverHistory from "@/hooks/queries/useGetDriverHistory";
import useGetPassengerHistory from "@/hooks/queries/useGetPassengerHistory";
import { IDelivery } from "@/models/delivery";
import { FlatList } from "react-native-gesture-handler";

export default function PassengerHistory() {
  const { isLoading, data, isError, error } = useGetPassengerHistory();
  console.log(data?.data);
  return (
    <LayoutWithHeader
      showHeader
      showBackButton
      showNotification={false}
      pageTitle="Drive History"
    >
      {isError && (
        <Box
          width="100%"
          height={100}
          justifyContent="center"
          alignItems="center"
        >
          <CustomText variant="subHeader" color="errorColor">
            An Error occured while getting your passenger History
          </CustomText>
        </Box>
      )}
      {!isError && (
        <FlatList
          ListEmptyComponent={() => (
            <>
              {!isLoading && data?.data?.delievry_history?.length < 1 && (
                <Box
                  width={"100%"}
                  height={80}
                  justifyContent="center"
                  alignItems="center"
                >
                  <CustomText>
                    You currently have no passenger history
                  </CustomText>
                </Box>
              )}
            </>
          )}
          data={
            (data?.data?.delivery_history as IDelivery[]) ?? ([] as IDelivery[])
          }
          renderItem={({ item, index }) => (
            <Box width={"100%"} height={50} backgroundColor="fadedBackground" />
          )}
        />
      )}
    </LayoutWithHeader>
  );
}
