import Box from "@/components/general/Box";
import {ArrowLeft} from "iconsax-react-native";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import {useRouter} from "expo-router";
import {useCallback} from "react";

export default function NavbarWithBackArrow({onPress}: {
    onPress?: () => void;
}) {
    const theme = useTheme<Theme>();
    const router = useRouter();

    const handlePress = useCallback(() => {
        if (onPress) {
            onPress();
        } else {
            if (router.canGoBack()) {
                router.back()
            } else {
                return;
            }
        }
    }, [onPress])
    return (
        <Box width={'100%'} height={83} justifyContent={'center'}>
            <Box width={32} height={32} borderRadius={30} style={{ backgroundColor: '#515FDF0D' }} alignItems={'center'} justifyContent={'center'}>
                <ArrowLeft onPress={handlePress}  size={25} variant={'Outline'} color={theme.colors.primaryColor} />
            </Box>
        </Box>
    )
}