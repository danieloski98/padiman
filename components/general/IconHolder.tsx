import Box from "@/components/general/Box";
import {DimensionValue} from "react-native";
import {PropsWithChildren} from "react";

interface IProps {
    width?: DimensionValue;
    height?: DimensionValue;
    backgroundColor?: string;
}

export default function IconHolder({ width = 50, height =50, backgroundColor = "#515FDF1F", children}: PropsWithChildren & IProps) {
    return (
        <Box width={width} height={height} borderRadius={100} alignItems={'center'} justifyContent={'center'} style={{
            backgroundColor: backgroundColor,
        }}>
            {children}
        </Box>
    )
}