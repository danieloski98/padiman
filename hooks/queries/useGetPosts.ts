import {useQuery} from "react-query";
import {Keys} from "@/hooks/queries/keys";
import httpService from "@/services/httpService";
import URLS from "@/hooks/urls";
import {useUserDetails} from "@/states/user";
import {usePathname } from "expo-router";

export default function useGetPosts() {
    const { isLoggedIn } = useUserDetails((state) => state);
    return useQuery([Keys.getProfileDetails], () => httpService.get(URLS.getAllPosts), {
        enabled: isLoggedIn,
    });
}