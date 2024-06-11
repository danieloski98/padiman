import Box from "@/components/general/Box";
import {useUserDetails} from "@/states/user";
import CustomText from "@/components/general/CustomText";
import {Notification} from "iconsax-react-native";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import {usePathname} from 'expo-router'
import {Feather} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import { Link, useRouter } from 'expo-router';


interface IProps {
    pageTitle?: string;
    showBackButton?: boolean;
    showNotification?: boolean;
}

export default function CustomPageHeader({ pageTitle, showNotification = true, showBackButton = false }: IProps) {
    const { first_name, last_name} = useUserDetails((state) => state);
    const [showBack, setShowBack] = useState(false);
    const theme = useTheme<Theme>();

    const router = useRouter();

    const constructTitle = () => {
        return pageTitle ?? `Hello, ${first_name[0]?.toUpperCase()??""}${first_name?.slice(1)}!`;
    }

    const handleBackButtonClick = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            return;
        }
    }

    return (
        <Box width={'100%'} height={60} backgroundColor={'white'} borderRadius={10} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} paddingHorizontal={'s'}>
            <Box flexDirection={'row'} alignItems={'center'}>
                {showBackButton && <Feather name={'arrow-left'} size={30} color={theme.colors.primaryColor} onPress={handleBackButtonClick} />}
                <CustomText variant={'subHeader'} fontSize={18}  marginLeft={'s'}>{constructTitle()}</CustomText>
            </Box>

            {showNotification && (
                <Link href={'/dashboard/notifications'}>
                    <Box flexDirection={'row'} alignItems={'center'}>
                        <Notification variant={'Bold'} size={30} color={theme.colors.primaryColor} />
                    </Box>
                </Link>
            )}
        </Box>
    )
}