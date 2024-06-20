import { useMutation } from "react-query";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";

interface IData {
  first_name: string;
  last_name: string;
  bvn: string;
  dob: string;
}

export default function useCreateWallet() {
  return useMutation({
    mutationFn: (data: IData) => httpService.post(URLS.createWallet, data),
  });
}
