import {Stack} from "expo-router";
import useGetProfileQuery from "@/hooks/queries/useGetProfileQuery";
import {useQueryClient} from "react-query";
import {useEffect} from "react";
import {Keys} from "@/hooks/queries/keys";

export default function DashboardLayout() {
    const query = useGetProfileQuery();
    const queryClient = useQueryClient();
    //
    // useEffect(() => {
    //     queryClient.invalidateQueries([Keys.getProfileDetails]);
    // }, []);
    return (
        <>
            <Stack screenOptions={{ headerShown: false }} />
        </>
    )
}