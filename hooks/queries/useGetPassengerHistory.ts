import { useQuery } from "react-query";
import { Keys } from "@/hooks/queries/keys";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";
import { useUserDetails } from "@/states/user";

export default function useGetPassengerHistory() {
  const { isLoggedIn } = useUserDetails((state) => state);
  return useQuery(
    [Keys.getPassengerHistory, isLoggedIn],
    () => httpService.get(URLS.getPassengerHistory),
    {
      enabled: isLoggedIn,
    },
  );
}
