import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import useGetDeliveriesHistory from "@/hooks/queries/useDeliveryHistory";
import useGetSendParcelHistory from "@/hooks/queries/useGetSendParcelHistory";
import { IDelivery, IParcel } from "@/models/delivery";
import { FlatList } from "react-native-gesture-handler";

export default function ParcelHistory() {
  const { isLoading, data, isError, error } = useGetSendParcelHistory();

  console.log(data?.data);

  return (
    <LayoutWithHeader
      showHeader
      showBackButton
      showNotification={false}
      pageTitle="Parcel Sent History"
    >
      {isError && (
        <Box
          width="100%"
          height={100}
          justifyContent="center"
          alignItems="center"
        >
          <CustomText variant="subHeader" color="errorColor">
            An Error occured while getting your Delivery History
          </CustomText>
        </Box>
      )}
      {!isError && (
        <FlatList
          ListEmptyComponent={() => (
            <>
              {!isLoading && data?.data?.length < 1 && (
                <Box
                  width={"100%"}
                  height={80}
                  justifyContent="center"
                  alignItems="center"
                >
                  <CustomText>You currently have no Parcel Sent</CustomText>
                </Box>
              )}
            </>
          )}
          data={(data?.data as IParcel[]) ?? ([] as IDelivery[])}
          renderItem={({ item, index }) => (
            <Box width={"100%"} height={50} backgroundColor="fadedBackground" />
          )}
        />
      )}
    </LayoutWithHeader>
  );
}
