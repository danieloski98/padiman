import {useMutation} from "react-query";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";

export default function useResetPasswordMutation() {
    return useMutation({
        mutationFn: (data: {otp: string, password: string, password2: string}) => httpService.post(URLS.resetPassword, data)
    });
}