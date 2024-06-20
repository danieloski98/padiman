import { useMutation } from "react-query";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";

interface IData {
  destination: string;
  country: string;
  state: string;
  city: string;
  travel_date: string;
  arrival_date: string;
  bus_stop: string;
  can_carry_light: boolean;
  can_carry_heavy: boolean;
  min_price: number;
  max_price: number;
}

export default function useCreateDeliveryMutation() {
  return useMutation({
    mutationFn: (data: IData) => httpService.post(URLS.forgotPassword, data),
  });
}
