import Box from "@/components/general/Box";
import {DimensionValue} from "react-native";
import CustomText from "@/components/general/CustomText";

interface IProps {
    borderColor?: string;
    backgroundColor?: string;
    text: string;
    textColor?: string;
    height?: DimensionValue;
}
export default function AlertCard({ borderColor = "#515FDF", backgroundColor="#515FDF1F", text, textColor ='#515FDF', height = 40}: IProps) {
    return (
        <Box width={'100%'} paddingLeft={'m'} justifyContent={'center'} borderLeftWidth={5} style={{
            borderLeftColor: borderColor,
            backgroundColor: backgroundColor,
            height,
        }}>
            <CustomText variant={'header'} fontSize={13} style={{
                color: textColor,
            }}>{text}</CustomText>
        </Box>
    )
}