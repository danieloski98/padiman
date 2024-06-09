import {useQuery} from "react-query";
import {Keys} from "@/hooks/queries/keys";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";
import {useUserDetails} from "@/states/user";
import {useRouter, usePathname } from "expo-router";

export default function useGetProfileQuery({ isEnabled }: { isEnabled: boolean }) {
    const { setAll, isLoggedIn } = useUserDetails((state) => state);
    const { navigate, replace } = useRouter();
    const pathName  = usePathname();
    return useQuery([Keys.getProfileDetails], () => httpService.get(URLS.getProfile), {
        onSuccess: (data) => {
            console.log(data?.data);
            console.log(isLoggedIn)
            if (!isLoggedIn) {
                setAll({ ...data?.data, isLoggedIn: true });
                replace('/dashboard/')
            } else {
                setAll({ ...data?.data });
                // replace('/dashboard/')
            }
        },
        onError: (error: any) => {
            alert(JSON.stringify(error));
        }
    });
}