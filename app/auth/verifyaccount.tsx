import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import { Image } from 'expo-image';
import {CustomTextInput} from "@/components/form/CustomInput";
import {SubmitButton} from "@/components/form/SubmitButton";
import verifyEmailController from "@/controllers/auth/verifyEmailController";

export default function VerifyAccount() {
    const { renderForm, submit, resendEmail, resendCodeLoading, verificationLoading } = verifyEmailController();
    return renderForm(
        <Box flex={1} backgroundColor={'background'} paddingHorizontal={'m'} justifyContent={'center'} alignItems={'center'}>
            <CustomText variant={'header'} fontSize={24}  textAlign={'center'}>Confirm your phone number</CustomText>
            <CustomText variant={'body'} marginTop={'s'} textAlign={'center'}>We just sent you a text message, input the code sent to you below</CustomText>
            <Box height={20} />
            <Image source={require('../../assets/images/app-image/verify.png')} contentFit={'contain'} style={{ width: 200, height: 200 }} />
            <Box height={20} />
            <CustomTextInput name={'otp'} placeholder={'Otp code'} label={'Otp code'} isPassword={false} keyboardType={'number-pad'} required={true} />
            <Box height={20} />
            <SubmitButton onSubmit={(data) => submit(data)} label={'Verify'} isLoading={verificationLoading} />
            <CustomText variant={'body'} marginTop={'m'} textAlign={'center'} color={'primaryColor'} onPress={() => resendEmail()}>Resend Code</CustomText>
        </Box>
    )
}