import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import signupController from "@/controllers/auth/signupController";
import PageOne from "@/Views/auth/sigunup/PageOne";
import PageTwo from "@/Views/auth/sigunup/PageTwo";

export default function Signup() {
    const { renderForm, stage } = signupController();
    return renderForm(
        <Box flex={1} paddingHorizontal={'m'} paddingTop={'7xl'} backgroundColor={'background'}>
            {stage === 1 && <PageOne/>}
            {stage === 2 && <PageTwo/>}
        </Box>
    )
}