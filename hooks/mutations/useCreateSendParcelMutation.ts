import { useMutation } from "react-query";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";

interface IData {
  state: string;
  sender_city: string;
  receiver_city: string;
  delivery_date: string;
  is_perishable: boolean;
  is_fragile: boolean;
  receiver_name: string;
  receiver_phone: string;
  receiver_email: string;
  receiver_gender: string;
}

export default function useCreateSendParcelMutation() {
  return useMutation({
    mutationFn: (data: IData) => httpService.post(URLS.forgotPassword, data),
  });
}
