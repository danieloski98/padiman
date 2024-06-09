import {useMutation} from "react-query";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";

export default function useForgotPasswordMutation() {
    return useMutation({
        mutationFn:(data: { phone_number: string}) => httpService.post(URLS.forgotPassword, data),
    });
}