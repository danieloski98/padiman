import Box from "@/components/general/Box";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";

export default function ContactUs() {
    return (
        <LayoutWithHeader pageTitle={'Contact Us'} showBackButton={true} showNotification={false}>
            <Box flex={1}></Box>
        </LayoutWithHeader>
    )
}