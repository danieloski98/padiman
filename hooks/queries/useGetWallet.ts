import { useQuery } from "react-query";
import { Keys } from "@/hooks/queries/keys";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";
import { useUserDetails } from "@/states/user";

export default function useGetWallet() {
  const { isLoggedIn } = useUserDetails((state) => state);
  return useQuery(
    [Keys.getWallet, isLoggedIn],
    () => httpService.get(URLS.getWallet),
    {
      enabled: isLoggedIn,
    },
  );
}
