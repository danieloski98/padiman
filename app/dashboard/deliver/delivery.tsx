import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import Box from "@/components/general/Box";
import NavbarWithBackArrow from "@/components/general/NavbarWithBackArrow";
import CustomText from "@/components/general/CustomText";
import CustomInputWithoutForm from "@/components/general/CustomInputWithoutForm";
import {useCallback, useState} from "react";
import CustomDropDown from "@/components/general/CustomDropDown";
import CustomButton from "@/components/general/CustomButton";
import {Package} from "lucide-react-native";
import IconHolder from "@/components/general/IconHolder";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import {CheckBox} from "@rneui/themed";
import AlertCard from "@/components/general/AlertCard";
import {index} from "@zxing/text-encoding/es2015/encoding/indexes";
import {router} from "expo-router";

const BANKS: Array<{ label: string, value: string }> = [
    { label:"Gtb", value: "Gtb" },
    { label:"FirstBank", value: "FirstBank" },
    { label:"UBA", value: "UBA" },
    { label:"Wema", value: "Wema" },
    { label:"Keystone", value: "Keystone" },
    { label: "Opay", value: "Opay" }
]

export default function DeliverParcel() {
    const [min, setMin] = useState<string>('');
    const [max, setMax] = useState<string>('');
    const [bank, setBank] = useState<string>('');
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [stage, setStage] = useState(1);

    const theme = useTheme<Theme>();

    const handleBackPress = useCallback(() => {
        if (stage === 1) {
            router.back();
        } else {
            setStage((prev) => prev - 1);
        }
    }, [stage])

    return (
        <LayoutWithHeader showHeader={false}>

            <Box flex={1} backgroundColor={'background'} paddingHorizontal={'m'}>
                <NavbarWithBackArrow onPress={handleBackPress} />
                <IconHolder>
                    <Package size={25} color={theme.colors.primaryColor} />
                </IconHolder>
                <CustomText variant={'subHeader'} marginTop={'m'}>Deliver a parcel</CustomText>
                <CustomText variant={'body'}>Please fill out the form</CustomText>

                {stage === 1 && (
                    <Box marginTop={'l'}>
                        <CustomText variant={'subHeader'} fontSize={16}>Which of these types of parcels can you delivery?</CustomText>
                        <CustomText variant={'subHeader'} fontSize={16}>Options are:</CustomText>

                        <Box flexDirection={'row'} alignItems={'center'} marginTop={'s'}>
                            <CheckBox
                                checked={selectedIndex === 1}
                                onPress={() => setSelectedIndex(1)}
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                            />
                            <CustomText variant={'body'}>Light parcels i can easily carry</CustomText>
                        </Box>

                        <Box flexDirection={'row'} alignItems={'center'} marginBottom={'m'}>
                            <CheckBox
                                checked={selectedIndex === 2}
                                onPress={() => setSelectedIndex(2)}
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                            />
                            <CustomText variant={'body'}>Heavy parcels that can fit into my car boot.</CustomText>
                        </Box>

                        <CustomInputWithoutForm label={'Set a Min Price for light parcels'} value={min} onChange={(val) => setMin(val as string)} keyboardType={'number-pad'} />
                        <Box height={20} />
                        <CustomInputWithoutForm label={'Set a Max Price for light parcels'} value={max} onChange={(val) => setMax(val as string)} keyboardType={'number-pad'} />
                        <Box height={20} />
                        <AlertCard text={'By submitting you agree to all our terms and conditions'}/>
                        <Box height={20} />
                        <CustomButton label={'Review'} onPress={() => setStage(2)} borderRadius={100} />
                    </Box>
                )}
                {stage === 2 && (
                    <Box marginTop={'l'}>
                        <CustomText variant={'subHeader'}>Summary</CustomText>

                        <Box marginTop={'m'}>
                            <CustomText variant={'subHeader'} fontSize={16}>Parcel type</CustomText>
                            <CustomText variant={'body'} fontSize={16}>{selectedIndex === 1 ? 'Light parcel':'Heavy Parcel'}</CustomText>
                        </Box>

                        <Box marginTop={'m'}>
                            <CustomText variant={'subHeader'} fontSize={16}>Min amount</CustomText>
                            <CustomText variant={'body'} fontSize={16}>{min}</CustomText>
                        </Box>

                        <Box marginTop={'m'}>
                            <CustomText variant={'subHeader'} fontSize={16}>Max amount</CustomText>
                            <CustomText variant={'body'} fontSize={16}>{max}</CustomText>
                        </Box>

                        <Box height={20} />
                        <CustomButton label={'Proceed'} onPress={() => {}} borderRadius={100} />
                    </Box>
                )}

            </Box>

        </LayoutWithHeader>
    )
}