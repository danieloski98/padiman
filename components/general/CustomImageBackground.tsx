import {DimensionValue, ImageBackground} from 'react-native'
import {PropsWithChildren} from "react";
import Box from "@/components/general/Box";

interface IProps {
    width?: DimensionValue;
    height?: DimensionValue;
}

export default function CustomImageBackground({width = '100%', height = 197, children}: PropsWithChildren & IProps) {
    return (
        <Box width={width} height={height} overflow={'hidden'} borderRadius={10}>
            <ImageBackground source={require('../../assets/images/app-image/Dashboard.png')} resizeMode={'cover'} style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
            }}>
                {children}
            </ImageBackground>
        </Box>
    )
}