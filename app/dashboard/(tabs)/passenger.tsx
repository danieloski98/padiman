import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import CustomImageBackground from "@/components/general/CustomImageBackground";
import CustomButton from "@/components/general/CustomButton";
import {FlatList} from "react-native-gesture-handler";
import PostCard from "@/components/home/PostCard";
import TransactionCard from "@/components/wallet/TransactionCard";
import {useRouter} from "expo-router";
import {useUserDetails} from "@/states/user";
import StatsBlock from "@/components/general/StatsBlock";
import {Send2} from "iconsax-react-native";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import DeliveryHistoryCard from "@/components/delivery/DeliveryHistoryCard";
import {useState} from "react";

const data =[1,2,3,4,6,7,8,2,1,2];

export default function PassengerPage() {
    const [activeTab, setActiveTab] = useState<number>(1);

    const router = useRouter();
    const { first_name } = useUserDetails((state) => state);
    const theme = useTheme<Theme>();


    const handleClick = (route: 'delivery'|'send') => {
        router.navigate(`/dashboard/deliver/${route}`)
    }
    return (
        <LayoutWithHeader showHeader={false}>
            <CustomImageBackground >
                <Box flex={1} paddingHorizontal={'m'} paddingTop={'2xl'}>
                    <CustomText variant={'subHeader'} color={'white'}>Hello {first_name}</CustomText>

                    <Box width={'100%'} height={50} flexDirection={'row'} justifyContent={'space-between'} marginTop={'l'}>
                        <CustomButton label={'Carry Passenger'} onPress={() => handleClick('delivery')} borderRadius={100} width={'47%'} height={'100%'} backgroundColor={'#FFFFFF1F'} />

                        <CustomButton label={'Board Car'} onPress={() => handleClick('send')} borderRadius={100} width={'47%'} height={'100%'} backgroundColor={'#FFFFFF1F'} />
                    </Box>
                </Box>
            </CustomImageBackground>

            <FlatList
                ListHeaderComponent={() => (
                    <>
                        <Box flexWrap={'wrap'} width={'100%'} height={'auto'} flexDirection={'row'} justifyContent={'space-between'}>
                            <StatsBlock icon={<Send2 variant={'Bold'} size={20} color={theme.colors.primaryColor} />} title={'Pending Deliveries'} subTitle={'View Pending Deliveries'} amount={38} />
                            <StatsBlock icon={<Send2 variant={'Bold'} size={20} color={theme.colors.primaryColor} />} title={'Pending Deliveries'} subTitle={'View Pending Deliveries'} amount={0} />
                            <StatsBlock icon={<Send2 variant={'Bold'} size={20} color={theme.colors.primaryColor} />} title={'Pending Deliveries'} subTitle={'View Pending Deliveries'} amount={19} />
                        </Box>
                        <Box flexDirection={'row'} width={'100%'} marginVertical={'s'} height={48} justifyContent={'space-between'} >
                            <CustomButton label={'Ride History'} onPress={() => setActiveTab(1)} textColor={activeTab === 1 ? theme.colors.white:theme.colors.black} borderRadius={100} width={'47%'} height={'100%'} backgroundColor={activeTab === 1 ? theme.colors.primaryColor:theme.colors.fadedBackground}  />

                            <CustomButton label={'Passenger History'} onPress={() => setActiveTab(2)} textColor={activeTab === 2 ? theme.colors.white:theme.colors.black} borderRadius={100} width={'47%'} height={'100%'} backgroundColor={activeTab === 2 ? theme.colors.primaryColor:theme.colors.fadedBackground} />
                        </Box>
                        <CustomText variant={'subHeader'} marginTop={'l'}>Delievry History</CustomText>
                        <CustomText variant={'body'}>View all deliveries</CustomText>
                    </>
                )}
                ListHeaderComponentStyle={{
                    marginBottom: 30
                }}
                contentContainerStyle={{
                    marginTop: 20,
                    paddingBottom: 100,
                }}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => <DeliveryHistoryCard subTitle={'Lokoja'} title={'Johnson abibo'} amount={42.49} />}
            />
        </LayoutWithHeader>
    )
}