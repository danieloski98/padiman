import {Stack} from "expo-router";
import { StatusBar } from 'react-native';
import {Colors} from "@/constants/Colors";


export default function AuthLayout() {
    return (
        <>
            <StatusBar backgroundColor={Colors.light.primaryColor} translucent={false} animated={true} barStyle={'light-content'} showHideTransition={"slide"} />
            <Stack screenOptions={{ headerShown: false }} />
        </>
    )
}