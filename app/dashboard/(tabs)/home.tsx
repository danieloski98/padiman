import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import PostCard from "@/components/home/PostCard";
import {FlatList} from "react-native-gesture-handler";

export default function HomePage() {
    const items = [1,2,3,4,5,6,7,8];
    return (
        <LayoutWithHeader>
            <Box flex={1} marginTop={'m'}>
                <FlatList
                    contentContainerStyle={{
                        paddingBottom: 100
                    }}
                    data={items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <PostCard />}
                />
            </Box>
        </LayoutWithHeader>
    )
}