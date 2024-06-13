import Box from "@/components/general/Box";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import CustomText from "@/components/general/CustomText";

interface StatBlockProps {
    title: string;
    subTitle: string;
    amount: number;
    icon: JSX.Element;
}

export default function StatsBlock({
    icon,
    subTitle,
    title,
    amount = 9
                                   }: StatBlockProps) {
    const theme = useTheme<Theme>();
    return (
        <Box width={'49%'} height={190} borderRadius={10} backgroundColor={'background'} padding={'m'} marginBottom={'s'}>
            <Box width={48} height={48} style={{ backgroundColor: '#515FDF1F' }} borderRadius={30} alignItems={'center'} justifyContent={'center'} >
                {icon}
            </Box>
            <CustomText variant={'subHeader'} marginVertical={'m'} marginLeft={'s'}>{ amount < 10 ? 0: null}{amount}</CustomText>

            <CustomText variant={'subHeader'} fontSize={16}>{title}</CustomText>
            <CustomText variant={'body'} fontSize={13} style={{ color: 'grey' }}>{subTitle}</CustomText>
        </Box>
    )
}