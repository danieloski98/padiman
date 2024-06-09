import {create} from 'zustand'
import useForm from "@/hooks/useForm";
import useRegisterMutation from "@/hooks/mutations/useRegisterMutation";
import {useCallback} from "react";
import {useRouter} from "expo-router";
import {useToast} from "react-native-toast-notifications";

interface IState {
    stage: 1|2;
    setAll: (data: Partial<IState>) => void;
}

const useLocalState = create<IState>((set) => ({
    stage: 1,
    setAll: (data) => set((state) => ({ ... state, ...data})),
}))

export default function signupController() {
    const { stage, setAll } = useLocalState((state) => state);
    const { mutateAsync, isLoading } = useRegisterMutation();
    const router = useRouter();
    const toast = useToast();

    // form
    const { renderForm } = useForm({
        defaultValues: {
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            password: '',
            password2: '',
        }
    });

    const submit = useCallback(async(formdata: any) => {
        if (isLoading) return;
        try {
            const { data } = await mutateAsync(formdata);
            console.log(data?.data);
            toast.show('Registration successfully, check your messages for a code from us!', { type: 'success'});
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
        submit
    }
}