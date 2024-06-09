import useForm from "@/hooks/useForm";
import {forgotPasswordSchema, resetPasswordSchema, verifyotp} from "@/services/validation";
import {useCallback} from "react";
import useForgotPasswordMutation from "@/hooks/mutations/useForgotPasswordMutation";
import {useToast} from "react-native-toast-notifications";
import {create} from "zustand";
import {useRouter} from "expo-router";
import useVerifyPasswordResetOtpMutation from "@/hooks/mutations/useVerifyPasswordResetOtpMutation";
import useResetPasswordMutation from "@/hooks/mutations/useResetPassword";

interface IState {
    phone_number: string,
    otp: string,
    setAll: (data: Partial<IState>) => void;
}

const useLocalState = create<IState>((set) => ({
    phone_number: '',
    otp: '',
    setAll: (data) => set((state) => ({ ... state, ...data})),
}));

export default function forgotPasswordController() {
    const toast = useToast();
    const router = useRouter();
    const { setAll, otp, phone_number } = useLocalState((state) => state);

    // forms
    const verifyOtpForm = useForm({
        defaultValues: { otp: '' },
        validationSchema: verifyotp,
    });

    const resetOtpForm = useForm({
        defaultValues: { otp: '', password: '', password2: '' },
        validationSchema: resetPasswordSchema,
    });

    const { renderForm, reset } = useForm({
        defaultValues: {
            phone_number: ''
        },
        validationSchema: forgotPasswordSchema,
    });

    const { mutateAsync, isLoading } = useForgotPasswordMutation();
    const verifyOtpMutation = useVerifyPasswordResetOtpMutation();
    const resetMutation = useResetPasswordMutation();

    const submit = useCallback(async(formdata: { phone_number: string}) => {
        if (isLoading) return;
        try {
            const { data } = await mutateAsync(formdata);
            const item = data?.data;
            console.log(item);
            setAll({ phone_number: formdata.phone_number });
            router.navigate('/auth/verifypasswordotp')
        } catch(error) {
            toast.show(JSON.stringify(error), { type: 'error' });
        }
    }, [isLoading]);

    const resendOtp = useCallback(async() => {
        if (isLoading) return;
        try {
            const { data } = await mutateAsync({ phone_number });
            const item = data?.data;
            console.log(item);
            // setAll({ phone_number: formdata.phone_number });
            router.navigate('/auth/verifypasswordotp')
        } catch(error) {
            toast.show(JSON.stringify(error), { type: 'error' });
        }
    }, [isLoading]);

    const verifyOtp = useCallback(async(formdata: { otp: string }) => {
        if (verifyOtpMutation.isLoading) return;
        try {
            const { data } = await verifyOtpMutation.mutateAsync(formdata);
            const item = data?.data;
            console.log(item);
            setAll({ otp: formdata.otp });
            toast.show('OTP Verified', { type: 'success' });
            router.navigate('/auth/resetpassword');
        } catch(error) {
            toast.show(JSON.stringify(error), {type: 'error'});
        }
    }, [verifyOtpMutation.isLoading]);

    const resetPassword = useCallback(async(formdata: { password: string, password2: string }) => {
        if (verifyOtpMutation.isLoading) return;
        try {
            const obj = { ...formdata, otp };
            console.log(obj);
            const { data } = await resetMutation.mutateAsync(obj);
            const item = data?.data;
            console.log(item);
            toast.show('Your password has been reset, proceed to login', { type: 'success' });
            router.navigate('/auth/login');
        } catch(error) {
            toast.show(JSON.stringify(error), {type: 'error'});
        }
    }, [verifyOtpMutation.isLoading, otp]);
    return {
        renderForm,
        reset,
        isLoading,
        submit,
        setAll,
        otp,
        phone_number,
        verifyOtpForm: verifyOtpForm.renderForm,
        verifyOtp,
        verificationLoading: verifyOtpMutation.isLoading,
        resendOtp,
        resetForm: resetOtpForm.renderForm,
        resetPassword,
        resetLoading: resetMutation.isLoading,
    }
}