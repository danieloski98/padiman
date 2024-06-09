import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import {ThemeProvider} from '@shopify/restyle';
import 'react-native-reanimated';
import theme from "@/theme";
import { ToastProvider } from "react-native-toast-notifications";
import {QueryClient, QueryClientProvider} from "react-query";
import { StatusBar } from 'react-native';
import {Colors} from "@/constants/Colors";
import {GestureHandlerRootView} from "react-native-gesture-handler";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync().then();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    GeoramaBold: require('../assets/fonts/Georama-Bold.ttf'),
    GeoramaRegular: require('../assets/fonts/Georama-Regular.ttf'),
    GeoramaSemiBold: require('../assets/fonts/Georama-Medium.ttf'),
    GeoramaMedium: require('../assets/fonts/Georama-Medium.ttf'),
    GenosBold: require('../assets/fonts/Genos-Bold.ttf'),
    GenosMedium: require('../assets/fonts/Genos-Medium.ttf'),
    GenosLight: require('../assets/fonts/Genos-Light.ttf'),
    GenoRegular: require('../assets/fonts/Genos-Regular.ttf'),
  });

  const queryClient = new QueryClient();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync().then();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
     <ToastProvider
         placement="top"
         style={{
           marginTop: 60,
         }}
         duration={5000}
         animationType="slide-in"
         textStyle={{ fontFamily: "RedRegular", fontSize: 16 }}
         swipeEnabled
         successColor={theme.colors.primaryColor}
         dangerColor="red"
         warningColor="grey"
     >
       <QueryClientProvider client={queryClient}>
         <GestureHandlerRootView style={{ flex: 1 }}>
           <StatusBar backgroundColor={Colors.light.primaryColor} translucent={false} animated={true} barStyle={'light-content'} showHideTransition={"slide"} />
           <Stack screenOptions={{ headerShown: false }} />
         </GestureHandlerRootView>
       </QueryClientProvider>
     </ToastProvider>
    </ThemeProvider>
  );
}
