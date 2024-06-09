import {useMutation} from "react-query";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";

export default function useVerifyPasswordResetOtpMutation() {
    return useMutation({
        mutationFn: (data: {otp: string}) => httpService.post(URLS.verifyPasswordOtp, data)
    });
}