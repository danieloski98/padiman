import React, { useCallback } from "react";
import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import CustomImageBackground from "@/components/general/CustomImageBackground";
import CustomButton from "@/components/general/CustomButton";
import { FlatList } from "react-native-gesture-handler";
import PostCard from "@/components/home/PostCard";
import TransactionCard from "@/components/wallet/TransactionCard";
import { useRouter } from "expo-router";
import { useUserDetails } from "@/states/user";
import StatsBlock from "@/components/general/StatsBlock";
import { Send2 } from "iconsax-react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import useDeliveryController from "@/controllers/dashboard/delivery.controller";
import DeliveryDrivers from "@/components/delivery/DeliveryDrivers";
import ParcelsToDriver from "@/components/delivery/ParcelsToDeliver";

export default function DeliveryPage() {
  const [tab, setTab] = React.useState(1);
  const { deliveryHistory, deliveries, parcelHistory, parcels } =
    useDeliveryController();

  const router = useRouter();
  const { first_name } = useUserDetails((state) => state);
  const theme = useTheme<Theme>();

  const handleClick = (route: "delivery" | "send") => {
    router.navigate(`/dashboard/deliver/${route}`);
  };

  const handleName = useCallback(() => {
    if (tab === 1) {
      return "Deliveries";
    } else {
      return "Parcel";
    }
  }, [tab]);
  return (
    <LayoutWithHeader showHeader={false}>
      <CustomImageBackground>
        <Box flex={1} paddingHorizontal={"m"} paddingTop={"2xl"}>
          <CustomText variant={"subHeader"} color={"white"}>
            Hello {first_name}
          </CustomText>

          <Box
            width={"100%"}
            height={50}
            flexDirection={"row"}
            justifyContent={"space-between"}
            marginTop={"l"}
          >
            <CustomButton
              label={"Deliver a Parcel"}
              onPress={() => handleClick("delivery")}
              borderRadius={100}
              width={"47%"}
              height={"100%"}
              backgroundColor={"#FFFFFF1F"}
            />

            <CustomButton
              label={"Send a Parcel"}
              onPress={() => handleClick("send")}
              borderRadius={100}
              width={"47%"}
              height={"100%"}
              backgroundColor={"#FFFFFF1F"}
            />
          </Box>
        </Box>
      </CustomImageBackground>

      <Box flex={1}>
        <>
          <Box
            marginTop="m"
            flexWrap={"wrap"}
            width={"100%"}
            height={"auto"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <StatsBlock
              icon={
                <Send2
                  variant={"Bold"}
                  size={20}
                  color={theme.colors.primaryColor}
                />
              }
              title={"Delivery History"}
              subTitle={"View Delivery History"}
              amount={deliveryHistory?.length ?? 0}
              link="/dashboard/deliver/deliveryHistory"
            />
            <StatsBlock
              icon={
                <Send2
                  variant={"Bold"}
                  size={20}
                  color={theme.colors.primaryColor}
                />
              }
              title={"Parcel History"}
              subTitle={"View Parcel History"}
              amount={parcelHistory?.length}
              link="/dashboard/deliver/parcelhistory"
            />
          </Box>
          <Box
            width={"100%"}
            height={30}
            flexDirection="row"
            justifyContent="space-between"
          >
            <CustomButton
              width={"48%"}
              label="Delivery Drivers"
              onPress={() => setTab(1)}
              backgroundColor={tab === 1 ? theme.colors.primaryColor : "grey"}
              textColor={tab === 1 ? "white" : "black"}
            />

            <CustomButton
              width={"48%"}
              label="Deliver Parcels"
              onPress={() => setTab(2)}
              backgroundColor={tab === 2 ? theme.colors.primaryColor : "grey"}
              textColor={tab === 2 ? "white" : "black"}
            />
          </Box>
          <CustomText variant={"subHeader"} marginTop={"l"}>
            {handleName()}
          </CustomText>
          <CustomText variant={"body"}>View all {handleName()}</CustomText>
        </>
        {tab === 1 && <DeliveryDrivers drivers={deliveries} />}
        {tab === 2 && <ParcelsToDriver parcels={parcels} />}
      </Box>
    </LayoutWithHeader>
  );
}
