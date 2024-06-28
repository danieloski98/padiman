import { useMutation } from "react-query";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";
import { IDriver } from "@/models/driverrequest";

export default function useCreateDriverRequestMutation() {
  return useMutation({
    mutationFn: (data: IDriver) =>
      httpService.post(URLS.createRideRequest, data),
  });
}
