import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import CustomImageBackground from "@/components/general/CustomImageBackground";
import CustomButton from "@/components/general/CustomButton";
import { FlatList } from "react-native-gesture-handler";
import PostCard from "@/components/home/PostCard";
import { useRouter } from "expo-router";
import { useUserDetails } from "@/states/user";
import StatsBlock from "@/components/general/StatsBlock";
import { Send2 } from "iconsax-react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import DeliveryHistoryCard from "@/components/delivery/DeliveryHistoryCard";
import { useState } from "react";
import useGetAvaliableDriver from "@/hooks/queries/useGetAvaliableDrivers";
import useGetDriverHistory from "@/hooks/queries/useGetDriverHistory";
import useGetPassengerHistory from "@/hooks/queries/useGetPassengerHistory";

export default function PassengerPage() {
  const [activeTab, setActiveTab] = useState<number>(1);

  // queries
  const driveHistory = useGetDriverHistory();
  const passengerHistory = useGetPassengerHistory();
  const { isLoading, isError, data } = useGetAvaliableDriver();

  console.log(data?.data);

  const router = useRouter();
  const { first_name } = useUserDetails((state) => state);
  const theme = useTheme<Theme>();

  const handleClick = (route: "drive" | "passenger") => {
    router.navigate(`/dashboard/passenger/${route}`);
  };
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
              label={"Carry Passenger"}
              onPress={() => handleClick("drive")}
              borderRadius={100}
              width={"100%"}
              height={"100%"}
              backgroundColor={"#FFFFFF1F"}
            />

            {/* <CustomButton
              label={"Board Car"}
              onPress={() => handleClick("passenger")}
              borderRadius={100}
              width={"47%"}
              height={"100%"}
              backgroundColor={"#FFFFFF1F"}
            /> */}
          </Box>
        </Box>
      </CustomImageBackground>

      <FlatList
        ListEmptyComponent={() => (
          <>
            {!isLoading && (
              <Box
                width="100%"
                height={60}
                justifyContent="center"
                alignItems="center"
              >
                <CustomText variant="body">No Avaliable Driver</CustomText>
              </Box>
            )}
          </>
        )}
        ListHeaderComponent={() => (
          <>
            <Box
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
                title={"Drive History"}
                subTitle={"View drive history"}
                amount={driveHistory.data?.data?.length ?? 0}
                link="/dashboard/passenger/driverhistory"
              />
              <StatsBlock
                icon={
                  <Send2
                    variant={"Bold"}
                    size={20}
                    color={theme.colors.primaryColor}
                  />
                }
                title={"Passenger History"}
                subTitle={"View passenger history"}
                amount={passengerHistory.data?.data?.length ?? 0}
                link="/dashboard/passenger/passengerhistory"
              />
            </Box>

            <CustomText variant={"subHeader"} marginTop={"l"}>
              Available Drivers
            </CustomText>
            <CustomText variant={"body"}>View all available drivers</CustomText>
          </>
        )}
        ListHeaderComponentStyle={{
          marginBottom: 30,
        }}
        contentContainerStyle={{
          marginTop: 20,
          paddingBottom: 100,
        }}
        data={data?.data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <DeliveryHistoryCard
            subTitle={"Lokoja"}
            title={"Johnson abibo"}
            amount={42.49}
          />
        )}
      />
    </LayoutWithHeader>
  );
}
