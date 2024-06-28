import { useQuery } from "react-query";
import { Keys } from "@/hooks/queries/keys";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";
import { useUserDetails } from "@/states/user";

export default function useGetAvaliableDriver() {
  const { isLoggedIn } = useUserDetails((state) => state);
  return useQuery(
    [Keys.getAvaliableDriver, isLoggedIn],
    () => httpService.get(URLS.getAvaliableDriver),
    {
      enabled: isLoggedIn,
    },
  );
}
