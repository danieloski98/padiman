import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import NavbarWithBackArrow from "@/components/general/NavbarWithBackArrow";
import CustomText from "@/components/general/CustomText";
import Box from "@/components/general/Box";
import CustomInputWithoutForm from "@/components/general/CustomInputWithoutForm";
import {useState} from "react";
import CustomButton from "@/components/general/CustomButton";
import { CheckBox } from '@rneui/themed';

export default function FundWallet() {
    const [amount, setAmount] = useState('');
    const [stage, setStage] = useState<1|2>(1);
    const [selectedIndex, setSelectedIndex] = useState<number|null>(null)
    return (
        <LayoutWithHeader showHeader={false}>
            <Box flex={1} backgroundColor={'background'}>

                <Box flex={1}>


                    <NavbarWithBackArrow />

                    <CustomText variant={'subHeader'}>Fund Wallet</CustomText>
                    <CustomText variant={'body'}>Top up your wallet balance with ease</CustomText>
                    <Box height={50} />
                    {stage === 1 && (
                        <>
                            <CustomInputWithoutForm label={'Amount'} value={amount} onChange={(val) => setAmount(val as string)} keyboardType={'number-pad'} />
                            <Box height={80} />
                            <CustomButton label={'Proceed'} onPress={() => setStage(2)} borderRadius={100} />
                        </>
                    )}
                    {stage === 2 && (
                        <>
                            <Box width={'100%'} height={98} borderWidth={1} borderColor={'borderColor'} borderRadius={8} justifyContent={'center'} alignItems={'center'}>
                                <CustomText variant={'body'} fontSize={18}>Amount</CustomText>
                                <CustomText>
                                    <CustomText variant={'header'} fontSize={16}>NGN</CustomText>
                                    <CustomText variant={'header'} fontSize={24}>{amount}</CustomText>
                                    <CustomText variant={'header'} fontSize={16}>.00</CustomText>
                                </CustomText>
                            </Box>
                            <Box height={30} />
                            <CustomText variant={'body'}>Select a payment method</CustomText>

                            <Box>
                                <Box flexDirection={'row'} alignItems={'center'} marginTop={'xl'}>
                                    <CheckBox
                                        checked={selectedIndex === 1}
                                        onPress={() => setSelectedIndex(1)}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                    />
                                    <CustomText variant={'body'}>Fund With Card</CustomText>
                                </Box>

                                <Box flexDirection={'row'} alignItems={'center'} marginTop={'s'}>
                                    <CheckBox
                                        checked={selectedIndex === 2}
                                        onPress={() => setSelectedIndex(2)}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                    />
                                    <CustomText variant={'body'}>Fund With Bank Transfer</CustomText>
                                </Box>
                            </Box>
                        </>
                    )}

                </Box>

                {stage === 2 && (
                    <Box width={'100%'} height={80}>
                        <CustomButton label={'Proceed'} onPress={() => {}} />
                    </Box>
                )}

            </Box>

        </LayoutWithHeader>
    )
}