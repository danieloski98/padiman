import {DimensionValue, ImageBackground} from 'react-native'
import {PropsWithChildren} from "react";

interface IProps {
    width?: DimensionValue;
    height?: DimensionValue;
}

export default function CustomImageBackground({width = '100%', height = 197, children}: PropsWithChildren & IProps) {
    return (
        <ImageBackground source={require('../../assets/images/app-image/Dashboard.png')} resizeMode={'cover'} style={{
            width,
            height,
        }}>
            {children}
        </ImageBackground>
    )
}