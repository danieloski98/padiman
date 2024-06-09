import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import CustomButton from "@/components/general/CustomButton";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import {useRouter} from "expo-router";

export default function Onboarding() {
    const theme = useTheme<Theme>();
    const router = useRouter();
    return (
        <Box flex={1} justifyContent="center" paddingHorizontal={'m'} backgroundColor={'background'}>
            <CustomText variant={'header'} textAlign={'center'}>PADIMAN ROUTE</CustomText>
            <CustomText variant={'subHeader'} textAlign={'center'} marginBottom={'l'}>Travel and Parcel Smart!</CustomText>
            <CustomButton label={'Login'} onPress={() => router.navigate('/auth/login')} />
            <Box height={10} />
            <CustomButton label={'Sign up'} onPress={() => router.navigate('/auth/signup')} backgroundColor={'white'} borderWidth={1} borderColor={theme.colors.primaryColor} textColor={theme.colors.primaryColor} />
        </Box>
    )
}