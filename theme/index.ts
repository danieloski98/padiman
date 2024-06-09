import { createTheme } from '@shopify/restyle';
import {Colors} from "@/constants/Colors";

const theme = createTheme({
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
        '2xl': 48,
        '3xl': 56,
        '4xl': 64,
        '5xl': 72,
        '6xl': 80,
        '7xl': 88,
        '8xl': 96,
        '9xl': 104,
        '10xl': 112,
    },
    colors: Colors.light,
    breakpoints: {},
    textVariants: {
        header: {
            fontFamily: 'GeoramaBold',
            fontSize: 34,
            color: "headerTextColor",
        },
        subHeader: {
            fontFamily: 'GeoramaSemiBold',
            fontSize: 24,
            color: "headerTextColor",
        },
        body: {
            fontFamily: 'GeoramaRegular',
            fontSize: 16,
            color: "text",
        },
        xs: {
            fontFamily: 'GenoRegular',
            fontSize: 12,
            color: "text",
        },
        buttonText: {
            fontFamily: 'GenoMedium',
            fontSize: 17,
            color: "headerTextColor",
        },
        defaults: {
            fontFamily: 'GeoramaRegular',
            fontSize: 16,
            color: "text",
        },
    },

});

export type Theme = typeof theme;
export default theme;