import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import {More} from "iconsax-react-native";
import {Image} from "expo-image";
import {useState} from "react";

const text = 'lorem efioefb efweiofwioefiowef wefiweifiweof wefoiwefiowefiowef wefoiwefiwef efowefiwef wefoiwefwojff weofiweiof fweofweofihoeif wefoiwefiohwef weofiweof wefoifoweif wefowefiohweio weifioefwef';

export default function PostCard() {
    const [showMore, setShowMore] = useState(false);
    return (
        <Box width={'100%'} borderWidth={0.4} borderColor={'borderColor'} backgroundColor={'white'} borderRadius={10} paddingBottom={'m'} marginBottom={'m'}>
            {/*HEADER*/}
            <Box width={'100%'} height={'auto'} marginTop={'s'} flexDirection={'row'} justifyContent={'space-between'} paddingHorizontal={'s'}>
                <Box flexDirection={'row'} alignItems={'center'}>
                    <Box width={40} height={40} borderRadius={20} backgroundColor={'secondaryBackgroundColor'} />
                    <Box paddingLeft={'s'}>
                        <CustomText variant={'subHeader'} fontSize={18}>Name</CustomText>
                        <CustomText variant={'body'} fontSize={14}>@danny_yeng</CustomText>
                    </Box>
                </Box>

                <Box flexDirection={'row'} alignItems={'center'}>
                    <CustomText variant={'body'} fontSize={14} marginRight={'s'}>06:23AM</CustomText>
                    <More size={20} color={'grey'} variant={'Outline'} />
                </Box>
            </Box>

            {/*IMAGE*/}

            <Box width={'100%'} height={190} backgroundColor={'secondaryBackgroundColor'} borderRadius={0} marginTop={'m'} >
                <Image source={require('../../assets/images/app-image/verify.png')} contentFit={'cover'} style={{ width: '100%', height: '100%' }} />
            </Box>

            <Box paddingHorizontal={'s'} marginTop={'m'}>
                <CustomText variant={'body'}>
                    {text.length > 30 ?
                        showMore ? text: text.substring(0, 30) + '...'
                        :text}

                    {text.length > 30 && <CustomText variant={'subHeader'} fontSize={16} marginLeft={'s'} color={'primaryColor'} onPress={() => setShowMore(prev => !prev)}>{ showMore ? 'Show Less' : 'Show More'}</CustomText>}
                </CustomText>
            </Box>

        </Box>
    )
}