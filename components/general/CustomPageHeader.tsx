import Box from "@/components/general/Box";
import {useUserDetails} from "@/states/user";
import CustomText from "@/components/general/CustomText";
import {Notification} from "iconsax-react-native";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import {usePathname} from 'expo-router'
import {Feather} from "@expo/vector-icons";
import {useEffect, useState} from "react";

const SCREENS = ['home', 'wallet', 'more', 'passenger', 'delivery'];

export default function CustomPageHeader() {
    const { first_name, last_name} = useUserDetails((state) => state);
    const [showBack, setShowBack] = useState(false);
    const theme = useTheme<Theme>();
    const pathName = usePathname();
    console.log(pathName);
    useEffect(() => {
        const item = pathName.split('/')[2];
        console.log(SCREENS.includes(item));
        if (SCREENS.includes(item)) {
            setShowBack(false);
        } else {
            setShowBack(true);
        }
    }, [SCREENS])
    return (
        <Box width={'100%'} height={60} backgroundColor={'white'} borderRadius={10} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} paddingHorizontal={'s'}>
            <Box flexDirection={'row'} alignItems={'center'}>
                {showBack && <Feather name={'arrow-left'} size={30} color={theme.colors.primaryColor} />}
                <CustomText variant={'subHeader'} fontSize={18} marginLeft={showBack ? 's':undefined}>Hello, {first_name[0]?.toUpperCase()??""}{first_name?.slice(1)??""}!</CustomText>
            </Box>

            <Box flexDirection={'row'} alignItems={'center'}>
                <Notification variant={'Bold'} size={30} color={theme.colors.primaryColor} />
            </Box>
        </Box>
    )
}