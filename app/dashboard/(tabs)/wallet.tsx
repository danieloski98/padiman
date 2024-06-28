import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import CustomImageBackground from "@/components/general/CustomImageBackground";
import CustomButton from "@/components/general/CustomButton";
import { FlatList } from "react-native-gesture-handler";
import PostCard from "@/components/home/PostCard";
import { useRouter } from "expo-router";
import TransactionCard from "@/components/delivery/wallet/TransactionCard";
import useGetWallet from "@/hooks/queries/useGetWallet";

export default function WalletPage() {
  const router = useRouter();

  const { isLoading, isError, data } = useGetWallet();

  console.log(`wallet data ${JSON.stringify(data?.data)}`);

  const handleClick = (route: "fundwallet" | "withdraw") => {
    router.navigate(`/dashboard/wallet/${route}`);
  };
  return (
    <LayoutWithHeader showHeader={false}>
      <CustomImageBackground>
        <Box flex={1} paddingHorizontal={"m"} paddingTop={"2xl"}>
          <CustomText variant={"subHeader"} color={"white"}>
            NGN 00.
            <CustomText variant={"subHeader"} color={"white"} fontSize={14}>
              00
            </CustomText>
          </CustomText>

          <Box
            width={"100%"}
            height={50}
            flexDirection={"row"}
            justifyContent={"space-between"}
            marginTop={"l"}
          >
            <CustomButton
              label={"Fund Wallet"}
              onPress={() => handleClick("fundwallet")}
              borderRadius={100}
              width={"47%"}
              height={"100%"}
              backgroundColor={"#FFFFFF1F"}
            />

            <CustomButton
              label={"Withdraw"}
              onPress={() => handleClick("withdraw")}
              borderRadius={100}
              width={"47%"}
              height={"100%"}
              backgroundColor={"#FFFFFF1F"}
            />
          </Box>
        </Box>
      </CustomImageBackground>

      <Box flex={1} justifyContent="center" alignItems="center">
        <CustomText variant="subHeader" textAlign="center">
          You currently do not have a wallet. Create one now
        </CustomText>
        <Box height={20} />
        <CustomButton
          label="Create Wallet"
          onPress={() => router.push("/dashboard/wallet/createwallet")}
          width={"100%"}
        />
      </Box>

      {/* <FlatList
        contentContainerStyle={{
          marginTop: 20,
          paddingBottom: 100,
        }}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TransactionCard
            subTitle={"Hello"}
            title={"Notification"}
            type={index % 2 === 0 ? "CREDIT" : "DEBIT"}
          />
        )}
      /> */}
    </LayoutWithHeader>
  );
}
