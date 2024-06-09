import {useMutation} from "react-query";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";

interface Data {
    phone_number: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    password2: string
}

export default function useRegisterMutation() {
    return useMutation({
        mutationFn: (data: Data) => httpService.post(URLS.register, data),
    });
}