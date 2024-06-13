import Box from "@/components/general/Box";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";

export default function Settings() {
    return (
        <LayoutWithHeader pageTitle={'Settings'} showBackButton={true} showNotification={false}>
            <Box flex={1}></Box>
        </LayoutWithHeader>
    )
}