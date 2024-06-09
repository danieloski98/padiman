import {create} from 'zustand'
import useForm from "@/hooks/useForm";
import useRegisterMutation from "@/hooks/mutations/useRegisterMutation";
import {useCallback, useEffect} from "react";
import {useRouter} from "expo-router";
import {useToast} from "react-native-toast-notifications";
import {signupSchema} from "@/services/validation";

/**
 * PLEASE READ
 * I am currently using global state to hold the id and phone number
 * after sign up so that it can be used on the verification page to resend
 * the otp code
 * */

interface IState {
    stage: 1|2;
    phone_number: string,
    id: number,
    setAll: (data: Partial<IState>) => void;
}

const useLocalState = create<IState>((set) => ({
    stage: 1,
    phone_number: '',
    id: 0,
    setAll: (data) => set((state) => ({ ... state, ...data})),
}))

export default function signupController() {
    const { stage, setAll, id, phone_number } = useLocalState((state) => state);
    const { mutateAsync, isLoading } = useRegisterMutation();
    const router = useRouter();
    const toast = useToast();

    useEffect(() => {
        return () => {
            //setAll({ stage: 1, phone_number: '', id: 0 });
        }
    }, []);

    // form
    const { renderForm,reset } = useForm({
        defaultValues: {
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            password: '',
            password2: '',
        },
        validationSchema: signupSchema,
    });

    const submit = useCallback(async(formdata: any) => {
        if (isLoading) return;
        try {
            const { data } = await mutateAsync(formdata);
            const item:  {"email": "Danielemmanuel257@gmail.com", "first_name": "Daniel", "id": 4, "last_name": "Emmanuel", "phone_number": "+23408033634507"} = data?.data;
            console.log(data?.data);
            setAll({ phone_number: formdata['phone_number'], id: item.id });
            toast.show('Registration successfully, check your messages for a code from us!', { type: 'success'});
            router.navigate('/auth/verifyaccount');
        } catch (error) {
            toast.show(JSON.stringify(error), {
                type: 'error'
            });
        }
    }, [isLoading])

    return {
        stage,
        setAll,
        renderForm,
        isLoading,
        submit,
        id,
        phone_number,
        reset,
    }
}