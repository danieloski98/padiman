import {useQuery} from "react-query";
import {Keys} from "@/hooks/queries/keys";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";
import {useUserDetails} from "@/states/user";
import {usePathname } from "expo-router";

export default function useGetProfileQuery({ isEnabled }: { isEnabled: boolean }) {
    const { setAll, isLoggedIn } = useUserDetails((state) => state);
    const pathName  = usePathname();
    const  name = pathName.split("/")[1]
    return useQuery([Keys.getProfileDetails], () => httpService.get(URLS.getProfile), {
        enabled: isLoggedIn && name !== undefined && name === 'auth',
        onSuccess: (data) => {
            if (!isLoggedIn || name && name === 'auth') {
                setAll({ ...data?.data, isLoggedIn: true });
            } else {
                setAll({ ...data?.data });
            }
        },
        onError: (error: any) => {
            alert(JSON.stringify(error));
        }
    });
}