import Box from "@/components/general/Box";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";

export default function Profile() {
    return (
       <LayoutWithHeader pageTitle={'Profile Settings'} showBackButton={true} showNotification={false}>
           <Box flex={1}></Box>
       </LayoutWithHeader>
    )
}