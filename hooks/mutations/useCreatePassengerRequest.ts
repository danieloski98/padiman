import { useMutation } from "react-query";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";
import { IDriver } from "@/models/driverrequest";
import { IPassenger } from "@/models/passengerrequest";

export default function useCreatePassengerRequestMutation() {
  return useMutation({
    mutationFn: (data: IPassenger) =>
      httpService.post(URLS.createPassengerRequest, data),
  });
}
