import Box from "@/components/general/Box";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import CustomText from "@/components/general/CustomText";
import useGetNotifications from "@/hooks/queries/useGetNotifications";
import {ActivityIndicator} from "react-native";
import {Colors} from "@/constants/Colors";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import {ScrollView} from "react-native-gesture-handler";
import {Image} from "expo-image";

export default function Notifications() {
    const { isLoading, data } = useGetNotifications();
    const theme = useTheme<Theme>();
    return (
        <LayoutWithHeader showNotification={false} pageTitle={'Notifications'} showBackButton={true}>
            <Box flex={1} paddingTop={'s'}>
                { isLoading && (
                    <Box width={'100%'} height={100} justifyContent={'center'} alignItems={'center'}>
                        <ActivityIndicator size="large" color={theme.colors.primaryColor} />
                        <CustomText>Loading Notifications</CustomText>
                    </Box>
                )}
                { !isLoading && (
                    <Box width={'100%'} height={200} justifyContent={'center'} alignItems={'center'}>
                        <Image source={require('../../assets/images/app-image/empty.png')} contentFit={'contain'} style={{ width: 150, height: 150 }} />
                        <CustomText variant={'subHeader'} fontSize={18}>No New Notifications</CustomText>
                    </Box>
                )}
                {/*{ !isLoading && data?.data?.length > 0 && (*/}
                {/*    <ScrollView>*/}
                {/*        { !isLoading && data?.data?.length > 0 && data?.data?.map((item: any, index: number) => (*/}
                {/*            <CustomText key={index.toString()}>{index.toString()}</CustomText>*/}
                {/*        ))}*/}
                {/*    </ScrollView>*/}
                {/*)}*/}
            </Box>
        </LayoutWithHeader>
    )
}