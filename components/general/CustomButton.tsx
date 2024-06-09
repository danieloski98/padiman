import {DimensionValue, TouchableOpacity} from 'react-native';
import CustomText from "@/components/general/CustomText";
import {Colors} from "@/constants/Colors";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";

interface IProps {
    width?: DimensionValue;
    height?: DimensionValue;
    backgroundColor?: string;
    textColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string;
    label: string;
    onPress: () => void;
}

export default function CustomButton({
    label,
    onPress,
    width = '100%',
    height = 52,
    borderRadius = 8,
    backgroundColor = Colors.light.primaryColor,
    textColor = 'white',
    borderColor = 'transparent',
    borderWidth = 0,
                                     }: IProps) {
    const theme = useTheme<Theme>();
    return (
        <TouchableOpacity style={{
            width,
            height,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius,
            borderColor,
            backgroundColor,
            borderWidth,
        }}
            onPress={onPress}
        >
            <CustomText variant={'subHeader'} fontSize={18} style={{ color: textColor ?? theme.colors.bodyTextColor }}>{label}</CustomText>
        </TouchableOpacity>
    )
}