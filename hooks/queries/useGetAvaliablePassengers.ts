import { useQuery } from "react-query";
import { Keys } from "@/hooks/queries/keys";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";
import { useUserDetails } from "@/states/user";

export default function useGetAvaliablePassengers() {
  const { isLoggedIn } = useUserDetails((state) => state);
  return useQuery(
    [Keys.getAvaliablePassengers, isLoggedIn],
    () => httpService.get(URLS.getAvaliablePassenders),
    {
      enabled: isLoggedIn,
    },
  );
}
