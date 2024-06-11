import {useQuery} from "react-query";
import {Keys} from "@/hooks/queries/keys";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";
import {useUserDetails} from "@/states/user";
import {usePathname } from "expo-router";

export default function useGetProfileQuery() {
    const { setAll, isLoggedIn } = useUserDetails((state) => state);
    const pathName  = usePathname();
    const  name = pathName.split("/")[1]
    return useQuery([Keys.getProfileDetails, isLoggedIn], () => httpService.get(URLS.getProfile), {
        enabled: isLoggedIn,
        onSuccess: (data) => {
            setAll({ ...data?.data });
        },
        onError: (error: any) => {
            alert(JSON.stringify(error));
        }
    });
}