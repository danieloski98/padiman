import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import {Link} from "expo-router";
import {CustomTextInput} from "@/components/form/CustomInput";
import {SubmitButton} from "@/components/form/SubmitButton";
import CustomButton from "@/components/general/CustomButton";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";
import signupController from "@/controllers/auth/signupController";
import {Feather} from "@expo/vector-icons";

export default function PageTwo() {
    const theme = useTheme<Theme>();
    const { setAll, isLoading, submit } = signupController();
    return (
        <Box flex={1} backgroundColor={'background'}>
            <Feather name={'arrow-left'} color={theme.colors.text} size={30} onPress={() => setAll({ stage: 1 })}/>
            <Box height={15} />
            <CustomText variant={'subHeader'} fontSize={24} style={{ width: '80%'}}>Complete your account setup to continue</CustomText>
            <CustomText variant={'body'} marginTop={'s'}>Please Create Your Padiman Route Password</CustomText>
            <Box height={20} marginTop={'2xl'} />
            <CustomTextInput name={'password'} placeholder={'Enter Your Password'} label={'Create a Password'} isPassword={true} required={true} />
            <Box height={10} />
            <CustomTextInput name={'password2'} placeholder={'confirm your password'} label={'Confirm your Password'} isPassword={true} required={true} />
            <Box height={15} />
            <SubmitButton label={'Continue'} onSubmit={(data) => submit(data)} isLoading={isLoading} />
        </Box>
    )
}