import useForm from "@/hooks/useForm";
import {verifyotp} from "@/services/validation";
import useVerifyOtpMutation from "@/hooks/mutations/useVerifyOtpMutation";
import useResendOtpMutation from "@/hooks/mutations/useResendOtpMutation";
import {useCallback} from "react";
import {useToast} from "react-native-toast-notifications";
import signupController from "@/controllers/auth/signupController";
import {useRouter} from "expo-router";

export default function verifyEmailController() {
    const toast = useToast();
    const router = useRouter();
    const { renderForm } = useForm({
        defaultValues: {
            otp: '',
        },
        validationSchema: verifyotp,
    });

    const verifyMutation = useVerifyOtpMutation();
    const resendMutation = useResendOtpMutation();
    const { id, phone_number,reset } = signupController();

    // functions

    const submit = useCallback(async(formdata: any) => {
        if (verifyMutation.isLoading) return;
        try {
            const { data } = await verifyMutation.mutateAsync(formdata);
            toast.show('Account Verified', { type: 'success'});
            reset();
            router.navigate('/auth/login');
        } catch(error: any) {
            toast.show(JSON.stringify(error), { type: 'error'});
        }
    }, [verifyMutation.isLoading]);

    const resendEmail = useCallback(async () => {
        if (resendMutation.isLoading) return;
        if (id === 0 || phone_number === '') {
            toast.show('Please enter a valid phone number', {type: 'error'});
        }
        try {
            const { data } = await resendMutation.mutateAsync({ id, phone_number });
            toast.show('OTP code has been sent to your phone number', { type: 'success'});
        } catch(error: any) {
            toast.show(JSON.stringify(error), { type: 'error'});
        }
    }, []);

    return {
        renderForm,
        submit,
        resendEmail,
        verificationLoading: verifyMutation.isLoading,
        resendCodeLoading: resendMutation.isLoading,
    }
}