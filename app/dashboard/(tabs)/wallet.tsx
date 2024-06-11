import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import CustomImageBackground from "@/components/general/CustomImageBackground";
import CustomButton from "@/components/general/CustomButton";
import {FlatList} from "react-native-gesture-handler";
import PostCard from "@/components/home/PostCard";
import TransactionCard from "@/components/wallet/TransactionCard";
import {useRouter} from "expo-router";

const data =[1,2,3,4,6,7,8,2,1,2];

export default function WalletPage() {
    const router = useRouter();

    const handleClick = (route: 'fundwallet'|'withdraw') => {
        router.navigate(`/dashboard/wallet/${route}`)
    }
    return (
        <LayoutWithHeader showHeader={false}>
            <CustomImageBackground >
                <Box flex={1} paddingHorizontal={'m'} paddingTop={'2xl'}>
                    <CustomText variant={'subHeader'} color={'white'}>NGN 600.<CustomText variant={'subHeader'} color={'white'} fontSize={14}>54</CustomText></CustomText>

                    <Box width={'100%'} height={50} flexDirection={'row'} justifyContent={'space-between'} marginTop={'l'}>
                        <CustomButton label={'Fund Wallet'} onPress={() => handleClick('fundwallet')} borderRadius={100} width={'47%'} height={'100%'} backgroundColor={'#FFFFFF1F'} />

                        <CustomButton label={'Withdraw'} onPress={() => handleClick('withdraw')} borderRadius={100} width={'47%'} height={'100%'} backgroundColor={'#FFFFFF1F'} />
                    </Box>
                </Box>
            </CustomImageBackground>

            <FlatList
                contentContainerStyle={{
                    marginTop: 20,
                    paddingBottom: 100,
                }}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => <TransactionCard subTitle={'Hello'} title={'Notification'} type={index % 2 === 0 ? 'CREDIT':'DEBIT'} />}
            />
        </LayoutWithHeader>
    )
}