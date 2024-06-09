import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import {Link} from "expo-router";
import {CustomTextInput} from "@/components/form/CustomInput";
import {SubmitButton} from "@/components/form/SubmitButton";
import CustomButton from "@/components/general/CustomButton";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import signupController from "@/controllers/auth/signupController";

export default function PageOne() {
    const theme = useTheme<Theme>();
    const { setAll } = signupController();
    return (
        <Box flex={1}>
            <CustomText variant={'subHeader'} fontSize={24}>Hello, Welcome</CustomText>
            <CustomText>Already have an account ? <Link href={'/auth/login'} style={{ color: theme.colors.primaryColor}}>Login</Link></CustomText>
            <Box height={20} marginTop={'2xl'} />
            <CustomTextInput name={'first_name'} placeholder={'Enter First Name'} label={'First Name'} isPassword={false} required={true} />
            <Box height={10} />
            <CustomTextInput name={'last_name'} placeholder={'Enter Last Name'} label={'Last Name'} isPassword={false} />
            <Box height={10} />
            <CustomTextInput name={'email'} placeholder={'Enter Email'} label={'Email Address'} isPassword={false} />
            <Box height={10} />
            <CustomTextInput name={'phone_number'} placeholder={'Enter Phone'} label={'Phone Number'} keyboardType={'number-pad'} isPassword={false} />
            <Box height={15} />
            <CustomButton label={'Next'} onPress={() => { setAll({ stage: 2 })}} />
        </Box>
    )
}