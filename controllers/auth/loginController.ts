import useLoginMutation from "@/hooks/mutations/useLoginMutation";
import useForm from "@/hooks/useForm";
import {loginSchema} from "@/services/validation";
import useCustomToast from "@/hooks/useCustomToast";
import * as SecureStorage from "expo-secure-store";
import {useState, useEffect} from "react";
import useGetProfileQuery from "@/hooks/queries/useGetProfileQuery";


export default function loginController() {
    const [enabled, setEnabled] = useState<boolean>(false);
    const { isError, isLoading, data, mutate, error } = useLoginMutation();
    const getProfileQuery = useGetProfileQuery({isEnabled:enabled});
    const toast = useCustomToast();

    // form
    const { renderForm } = useForm({
        defaultValues: {
            phone_number: '',
            password: '',
        },
        validationSchema: loginSchema
    });

    const submit = (data: {phone_number: string, password: string}) => {
        mutate(data).then((dat) => {
            toast.show('Login Successful', { type: 'success'});
            SecureStorage.setItem('token', dat?.data?.tokens?.access);
            SecureStorage.setItem('refresh', dat?.data?.tokens?.refresh);
            console.log(dat.data);
            getProfileQuery.refetch().then()
        }).catch((err) => {
            //toast.show(JSON.stringify(err), { type: 'error'});
        })
    }

    return {
        renderForm,
        submit,
        isLoading,
    }
}