import Box from "@/components/general/Box";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";

export default function Messages() {
    return (
        <LayoutWithHeader pageTitle={'Messages'} showBackButton={true} showNotification={false}>
            <Box flex={1}></Box>
        </LayoutWithHeader>
    )
}