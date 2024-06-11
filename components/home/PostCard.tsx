import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import {More} from "iconsax-react-native";
import {Image} from "expo-image";
import {useState} from "react";
import {IPost} from "@/models/Post";
import moment from "moment";

const text = 'lorem efioefb efweiofwioefiowef wefiweifiweof wefoiwefiowefiowef wefoiwefiwef efowefiwef wefoiwefwojff weofiweiof fweofweofihoeif wefoiwefiohwef weofiweof wefoifoweif wefowefiohweio weifioefwef';

export default function PostCard({post}:{ post: IPost}) {
    const [showMore, setShowMore] = useState(false);
    return (
        <Box width={'100%'} borderWidth={0.4} borderColor={'borderColor'} backgroundColor={'white'} borderRadius={10} paddingBottom={'m'} marginBottom={'m'}>
            {/*HEADER*/}
            <Box width={'100%'} height={'auto'} marginTop={'s'} flexDirection={'row'} justifyContent={'space-between'} paddingHorizontal={'s'}>
                <Box flexDirection={'row'} alignItems={'center'}>
                    <Box width={40} height={40} borderRadius={20} backgroundColor={'secondaryBackgroundColor'} />
                    <Box paddingLeft={'s'}>
                        <CustomText variant={'subHeader'} fontSize={18}>{post.name}</CustomText>
                        <CustomText variant={'body'} fontSize={14}>@{post?.name}</CustomText>
                    </Box>
                </Box>

                <Box flexDirection={'row'} alignItems={'center'}>
                    <CustomText variant={'body'} fontSize={14} marginRight={'s'}>{moment(post?.post_details.timestamp).fromNow()}</CustomText>
                    <More size={20} color={'grey'} variant={'Outline'} />
                </Box>
            </Box>

            {/*IMAGE*/}

            {post?.post_details?.images && (
                <Box width={'100%'} height={190} backgroundColor={'secondaryBackgroundColor'} borderRadius={0} marginTop={'m'} >
                    <Image source={{ uri: post?.post_details?.images}} contentFit={'cover'} style={{ width: '100%', height: '100%' }} />
                </Box>
            )}

            <Box paddingHorizontal={'s'} marginTop={'m'}>
                <CustomText variant={'body'} lineHeight={22}>
                    {post?.post_details?.post.length > 150 ?
                        showMore ? post?.post_details?.post: post?.post_details?.post.substring(0, 150) + '...'
                        :post?.post_details?.post}
                </CustomText>
                {post?.post_details?.post.length > 150 && <CustomText variant={'subHeader'} fontSize={16} color={'primaryColor'} onPress={() => setShowMore(prev => !prev)}>{ showMore ? 'Show Less' : 'Show More'}</CustomText>}
            </Box>

        </Box>
    )
}