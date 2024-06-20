import { useQuery } from "react-query";
import { Keys } from "@/hooks/queries/keys";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";
import { useUserDetails } from "@/states/user";

export default function useGetDeliveries() {
  const { isLoggedIn } = useUserDetails((state) => state);
  return useQuery(
    [Keys.getAllDeliveries, isLoggedIn],
    () => httpService.get(URLS.listDeliveries),
    {
      enabled: isLoggedIn,
    },
  );
}
