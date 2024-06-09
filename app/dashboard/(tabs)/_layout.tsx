import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import { Tabs } from 'expo-router';
import {Home, Menu, Car, People, Wallet} from 'iconsax-react-native'
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import { StatusBar } from 'react-native';
import {Colors} from "@/constants/Colors";

export default function TabLayout() {
    const theme = useTheme<Theme>();
    return (
       <>
           <StatusBar backgroundColor={Colors.light.primaryColor} translucent={false} animated={true} barStyle={'light-content'} showHideTransition={"slide"} />
               <Tabs initialRouteName={'home'} screenOptions={{
                   headerShown: false,
                   tabBarStyle: {
                       height: 70,
                       paddingBottom: 10,
                       paddingTop: 10,
                   }
               }}>
                   <Tabs.Screen name={'home'} options={{
                       tabBarLabel: ({focused}) => <CustomText variant={'subHeader'} color={focused?'primaryColor':'text'} fontSize={focused?14:12}>Home</CustomText>,
                       tabBarIcon: ({ focused}) => <Home variant={focused?'Bold':'Outline'} color={focused?theme.colors.primaryColor:'grey'} />
                   }} />

                   <Tabs.Screen name={'wallet'} options={{
                       tabBarLabel: ({focused}) => <CustomText variant={'subHeader'} color={focused?'primaryColor':'text'} fontSize={focused?14:12}>Wallet</CustomText>,
                       tabBarIcon: ({ focused}) => <Wallet variant={focused?'Bold':'Outline'} color={focused?theme.colors.primaryColor:'grey'} />
                   }} />

                   <Tabs.Screen name={'delivery'} options={{
                       tabBarLabel: ({focused}) => <CustomText variant={'subHeader'} color={focused?'primaryColor':'text'} fontSize={focused?14:12}>Delivery</CustomText>,
                       tabBarIcon: ({ focused}) => <Car variant={focused?'Bold':'Outline'} color={focused?theme.colors.primaryColor:'grey'} />
                   }} />

                   <Tabs.Screen name={'passenger'} options={{
                       tabBarLabel: ({focused}) => <CustomText variant={'subHeader'} color={focused?'primaryColor':'text'} fontSize={focused?14:12}>Passengers</CustomText>,
                       tabBarIcon: ({ focused}) => <People variant={focused?'Bold':'Outline'} color={focused?theme.colors.primaryColor:'grey'} />
                   }} />

                   <Tabs.Screen name={'more'} options={{
                       tabBarLabel: ({focused}) => <CustomText variant={'subHeader'} color={focused?'primaryColor':'text'} fontSize={focused?14:12}>More</CustomText>,
                       tabBarIcon: ({ focused}) => <Menu variant={focused?'Bold':'Outline'} color={focused?theme.colors.primaryColor:'grey'} />
                   }} />
            </Tabs>
       </>
    )
}