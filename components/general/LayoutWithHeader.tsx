import { PropsWithChildren, ReactNode } from "react";
import Box from "@/components/general/Box";
import CustomPageHeader from "@/components/general/CustomPageHeader";

interface IProps {
  pageTitle?: string;
  showBackButton?: boolean;
  showNotification?: boolean;
  showHeader?: boolean;
}

export default function LayoutWithHeader({
  children,
  pageTitle,
  showBackButton = false,
  showNotification = true,
  showHeader = true,
}: PropsWithChildren & IProps) {
  return (
    <Box flex={1} paddingHorizontal={"s"} paddingTop={"s"}>
      {showHeader && (
        <CustomPageHeader
          pageTitle={pageTitle}
          showBackButton={showBackButton}
          showNotification={showNotification}
        />
      )}
      <Box flex={1}>{children}</Box>
    </Box>
  );
}
