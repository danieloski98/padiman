import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import PostCard from "@/components/home/PostCard";
import {FlatList} from "react-native-gesture-handler";
import useGetPosts from "@/hooks/queries/useGetPosts";
import {ActivityIndicator} from "react-native";
import {useEffect, useState} from "react";
import {IPost} from "@/models/Post";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/theme";

export default function HomePage() {
    const [posts, setPosts] = useState<Array<IPost>>([])
    const { isLoading, data} = useGetPosts();
    const theme = useTheme<Theme>();

    useEffect(() => {
        if (data?.data?.data?.length > 0) {
            setPosts(data?.data?.data);
            console.log(data?.data?.data);
        }
    }, [data?.data]);
    return (
        <LayoutWithHeader>
            <Box flex={1} marginTop={'m'}>
                <FlatList
                    style={{
                        flex: 1
                    }}
                    contentContainerStyle={{
                        paddingBottom: 100
                    }}
                    data={posts}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <PostCard post={item} />}
                    ListFooterComponent={() => (
                        <>
                            { isLoading && (
                                <Box width={'100%'} height={50} justifyContent={'center'} alignItems={'center'}>
                                    <ActivityIndicator size="large" color={theme.colors.primaryColor}/>
                                </Box>
                            )}
                        </>
                    )}
                />
            </Box>
        </LayoutWithHeader>
    )
}