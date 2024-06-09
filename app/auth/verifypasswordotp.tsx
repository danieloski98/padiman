import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import { Link } from 'expo-router'
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import loginController from "@/controllers/auth/loginController";
import {CustomTextInput} from "@/components/form/CustomInput";
import {SubmitButton} from "@/components/form/SubmitButton";
import forgotPasswordController from "@/controllers/auth/forgotPasswordController";
import {Image} from "expo-image";

export default function VerifyPasswordOtp() {
    const { verifyOtpForm, verifyOtp, verificationLoading, resendOtp  } = forgotPasswordController();
    const theme = useTheme<Theme>()
    return verifyOtpForm(
        <Box flex={1} paddingHorizontal={'m'} paddingTop={'10xl'} alignItems={'center'}>
            <CustomText variant={'subHeader'} fontSize={24}>Verify OTP</CustomText>
            <CustomText>Please check your text message for your OTP code</CustomText>
            <Box height={20} />
            <Image source={require('../../assets/images/app-image/verify.png')} contentFit={'contain'} style={{ width: 200, height: 200 }} />
            <Box height={20} marginTop={'2xl'} />
            <CustomTextInput name={'otp'} placeholder={'Enter OTP'} label={'OTP'} isPassword={false} keyboardType={'number-pad'} />
            <Box height={15} />
            <SubmitButton onSubmit={(data) => verifyOtp(data as any)} label={'Submit'} isLoading={verificationLoading} />
            <CustomText variant={'body'} textAlign={'center'} color={'primaryColor'} marginTop={'m'} onPress={() => resendOtp()}>Resend OTP</CustomText>
        </Box>
    )
}