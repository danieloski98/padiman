import Box from "@/components/general/Box";
import {ArrowRight, DirectDown, Send2} from "iconsax-react-native";
import CustomText from "@/components/general/CustomText";
import {Package} from "lucide-react-native";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";

interface IProps {
    amount: number;
    title: string;
    subTitle: string;
}

export default function DeliveryHistoryCard({ amount, title, subTitle }: IProps) {
    const theme = useTheme<Theme>();
    return (
        <Box width={'100%'} height={82} backgroundColor={'background'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} paddingHorizontal={'l'} marginBottom={'s'}>
            <Box flexDirection={'row'}>
                <Box width={48} height={48} style={{ backgroundColor: '#515FDF1F' }} borderRadius={28} justifyContent={'center'}
                     alignItems={'center'}>
                    <Package color={theme.colors.primaryColor} size={25} />
                </Box>

                <Box paddingLeft={'m'}>
                    <CustomText variant={'subHeader'} fontSize={18}>{title}</CustomText>
                    <CustomText variant={'body'}>{subTitle}</CustomText>
                </Box>
            </Box>

            <CustomText>${amount}</CustomText>
        </Box>
    )
}