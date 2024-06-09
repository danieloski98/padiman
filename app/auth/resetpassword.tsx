import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import { Link } from 'expo-router'
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import loginController from "@/controllers/auth/loginController";
import {CustomTextInput} from "@/components/form/CustomInput";
import {SubmitButton} from "@/components/form/SubmitButton";
import forgotPasswordController from "@/controllers/auth/forgotPasswordController";

export default function ResetPasswordOtp() {
    const { resetPassword, verificationLoading, resetLoading, resetForm  } = forgotPasswordController();
    const theme = useTheme<Theme>()
    return resetForm(
        <Box flex={1} paddingHorizontal={'m'} paddingTop={'10xl'}>
            <CustomText variant={'subHeader'} fontSize={24}>Verify OTP</CustomText>
            <CustomText>Please check your text message for your OTP code</CustomText>

            <Box height={20} marginTop={'2xl'} />

            <CustomTextInput name={'password'} placeholder={'Enter Password'} label={'Password'} isPassword={true} />
            <Box height={15} />

            <CustomTextInput name={'password2'} placeholder={'Confirm Password'} label={'Confirm Password'} isPassword={true} />
            <Box height={15} />

            <SubmitButton onSubmit={(data) => resetPassword(data as any)} label={'Submit'} isLoading={resetLoading} />
        </Box>
    )
}