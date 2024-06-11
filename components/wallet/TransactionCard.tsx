import Box from "@/components/general/Box";
import {ArrowRight, DirectDown, Send2} from "iconsax-react-native";
import CustomText from "@/components/general/CustomText";

interface IProps {
    type: 'DEBIT'|'CREDIT',
    title: string;
    subTitle: string;
}

export default function TransactionCard({ type, title, subTitle }: IProps) {
    return (
        <Box width={'100%'} height={82} backgroundColor={'background'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} paddingHorizontal={'l'} marginBottom={'s'}>
            <Box flexDirection={'row'}>
                <Box width={48} height={48} style={{ backgroundColor: type === 'CREDIT' ? '#2ABE6E14':'#DF516B14' }} borderRadius={28} justifyContent={'center'}
                     alignItems={'center'}>
                    {type === 'CREDIT' && <Send2 color={'#2ABE6E'} variant={'Bold'} size={25} /> }
                    { type === 'DEBIT' && <DirectDown color={'#DF516B'} variant={'Bold'} size={25} />}
                </Box>

                <Box paddingLeft={'m'}>
                    <CustomText variant={'subHeader'} fontSize={18}>{title}</CustomText>
                    <CustomText variant={'body'}>{subTitle}</CustomText>
                </Box>
            </Box>

            <ArrowRight size={25} variant={'Outline'} color={'black'} />
        </Box>
    )
}