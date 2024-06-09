import {useMutation} from "react-query";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";

interface Data {
    phone_number: string;
    password: string;
}

export default function useLoginMutation() {
    const { isError, isLoading, data, error, mutateAsync } = useMutation({
        mutationFn: (data: Data) => httpService.post(URLS.login, data),
    });

    return {
        isError,
        isLoading,
        data: data?.data,
        error,
        mutate: mutateAsync,
    }
}