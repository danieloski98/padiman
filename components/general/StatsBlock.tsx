import Box from "@/components/general/Box";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import CustomText from "@/components/general/CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

interface StatBlockProps {
  title: string;
  subTitle: string;
  amount: number;
  icon: JSX.Element;
  link?: string;
}

export default function StatsBlock({
  icon,
  subTitle,
  title,
  amount = 9,
  link,
}: StatBlockProps) {
  const theme = useTheme<Theme>();
  return (
    <Box
      width={"49%"}
      height={190}
      borderRadius={10}
      backgroundColor={"background"}
      padding={"m"}
      marginBottom={"s"}
    >
      <TouchableOpacity
        onPress={() => {
          if (link) {
            router.push(link);
          }
        }}
      >
        <>
          <Box
            width={48}
            height={48}
            style={{ backgroundColor: "#515FDF1F" }}
            borderRadius={30}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {icon}
          </Box>
          <CustomText
            variant={"subHeader"}
            marginVertical={"m"}
            marginLeft={"s"}
          >
            {amount < 10 && amount !== 0 ? 0 : null}
            {amount}
          </CustomText>

          <CustomText variant={"subHeader"} fontSize={16}>
            {title}
          </CustomText>
          <CustomText variant={"body"} fontSize={13} style={{ color: "grey" }}>
            {subTitle}
          </CustomText>
        </>
      </TouchableOpacity>
    </Box>
  );
}
