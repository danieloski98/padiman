import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import Box from "@/components/general/Box";
import NavbarWithBackArrow from "@/components/general/NavbarWithBackArrow";
import CustomText from "@/components/general/CustomText";
import CustomInputWithoutForm from "@/components/general/CustomInputWithoutForm";
import {useState} from "react";
import CustomDropDown from "@/components/general/CustomDropDown";
import CustomButton from "@/components/general/CustomButton";

const BANKS: Array<{ label: string, value: string }> = [
    { label:"Gtb", value: "Gtb" },
    { label:"FirstBank", value: "FirstBank" },
    { label:"UBA", value: "UBA" },
    { label:"Wema", value: "Wema" },
    { label:"Keystone", value: "Keystone" },
    { label: "Opay", value: "Opay" }
]

export default function Withdraw() {
    const [amount, setAmount] = useState<string>('');
    const [bank, setBank] = useState<string>('');

    return (
        <LayoutWithHeader showHeader={false} pageTitle={'Withdrawal'}>

            <Box flex={1}>
                <NavbarWithBackArrow />
                <CustomText variant={'subHeader'}>Widthdraw from wallet</CustomText>
                <CustomText variant={'body'}>Withdraw from your wallet balance with ease</CustomText>

                <Box marginTop={'l'}>
                    <CustomInputWithoutForm label={'Amount'} value={amount} onChange={(val) => setAmount(val as string)} keyboardType={'number-pad'} />
                    <Box height={20} />
                    <CustomDropDown options={BANKS} value={bank} onSelected={(val) => setBank(val)} placeHolder={'Select Bank'} label={"Bank"} />
                    <Box height={60} />
                    <CustomButton label={'Proceed'} onPress={() => {}} borderRadius={100} />
                </Box>

            </Box>

        </LayoutWithHeader>
    )
}