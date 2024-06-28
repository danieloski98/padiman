import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

interface IProps {
  icon: JSX.Element;
  title: string;
  url?: string;
}

export default function MoreCard({ icon, title, url }: IProps) {
  return (
    <TouchableOpacity
      onPress={() => router.navigate(`/dashboard/settings/${url ?? title}`)}
    >
      <Box
        width={"100%"}
        height={50}
        marginBottom={"m"}
        flexDirection={"row"}
        alignItems={"center"}
        paddingLeft={"s"}
      >
        {icon}
        <CustomText variant={"subHeader"} fontSize={16} marginLeft={"m"}>
          {title}
        </CustomText>
      </Box>
    </TouchableOpacity>
  );
}
