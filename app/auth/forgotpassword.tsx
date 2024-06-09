import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import { Link } from 'expo-router'
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import loginController from "@/controllers/auth/loginController";
import {CustomTextInput} from "@/components/form/CustomInput";
import {SubmitButton} from "@/components/form/SubmitButton";
import forgotPasswordController from "@/controllers/auth/forgotPasswordController";

export default function Forgotpassword() {
    const { submit, isLoading, renderForm, } = forgotPasswordController();
    const theme = useTheme<Theme>()
    return renderForm(
        <Box flex={1} paddingHorizontal={'m'} paddingTop={'10xl'}>
            <CustomText variant={'subHeader'} fontSize={24}>Forgot Password.</CustomText>
            <CustomText>Please enter your phone number below</CustomText>
            <Box height={20} marginTop={'2xl'} />
            <CustomTextInput name={'phone_number'} placeholder={'Enter your phone number'} label={'Phone number'} isPassword={false} keyboardType={'number-pad'} />
            <Box height={15} />
            <SubmitButton onSubmit={(data) => submit(data as any)} label={'Submit'} isLoading={isLoading} />
        </Box>
    )
}