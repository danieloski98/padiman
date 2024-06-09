import {useMutation} from "react-query";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";

export default function useResendOtpMutation() {
    return useMutation({
        mutationFn: (data: {id: number, phone_number: string}) => httpService.post(URLS.resendOtp, data)
    });
}