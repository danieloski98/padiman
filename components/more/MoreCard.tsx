import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";

interface IProps {
    icon: JSX.Element;
    title: string
}

export default function MoreCard ({ icon, title }: IProps) {
    return (
        <Box width={'100%'} height={50} marginBottom={'m'} flexDirection={'row'} alignItems={'center'} paddingLeft={'s'}>
            {icon}
            <CustomText variant={'subHeader'} fontSize={16} marginLeft={'m'} >{title}</CustomText>
        </Box>
    )
}