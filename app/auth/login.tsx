import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import { Link } from 'expo-router'
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import loginController from "@/controllers/auth/loginController";
import {CustomTextInput} from "@/components/form/CustomInput";
import {SubmitButton} from "@/components/form/SubmitButton";

export default function Login() {
    const { submit, isLoading, renderForm } = loginController();
    const theme = useTheme<Theme>()
    return renderForm(
        <Box flex={1} paddingHorizontal={'m'} paddingTop={'10xl'}>
            <CustomText variant={'subHeader'} fontSize={24}>Hello, Welcome back.</CustomText>
            <CustomText>Don't have an account ? <Link href={'/auth/signup'} style={{ color: theme.colors.primaryColor}}>Create an account</Link></CustomText>
            <Box height={20} marginTop={'2xl'} />
            <CustomTextInput name={'phone_number'} placeholder={'Enter your phone number'} label={'Phone number'} isPassword={false} />
            <Box height={10} />
            <CustomTextInput name={'password'} placeholder={'Enter your password'} label={'Password'} isPassword={true} />
            <Box height={15} />
            <SubmitButton onSubmit={(data) => submit(data as any)} label={'Submit'} isLoading={isLoading} />
        </Box>
    )
}