import {ReactNode} from "react";
import Box from "@/components/general/Box";
import CustomPageHeader from "@/components/general/CustomPageHeader";

export default function LayoutWithHeader({ children }: { children: ReactNode }) {
    return (
        <Box flex={1} paddingHorizontal={'s'} paddingTop={'s'}>
            <CustomPageHeader />
            <Box flex={1} >
                {children}
            </Box>
        </Box>
    )
}