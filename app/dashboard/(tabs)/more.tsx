import Box from "@/components/general/Box";
import CustomText from "@/components/general/CustomText";
import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import {
  Messages,
  MessageText1,
  Profile2User,
  Setting2,
} from "iconsax-react-native";
import MoreCard from "@/components/more/MoreCard";

const items = [
  {
    icon: <Profile2User color={"black"} variant={"Bold"} size={25} />,
    title: "Profile",
  },
  {
    icon: <MessageText1 color={"black"} variant={"Bold"} size={25} />,
    title: "Messages",
  },
  {
    icon: <Setting2 color={"black"} variant={"Bold"} size={25} />,
    title: "Settings",
  },
  {
    icon: <Messages color={"black"} variant={"Bold"} size={25} />,
    title: "Contact Us",
    url: "ContactUs",
  },
];

export default function MorePage() {
  return (
    <LayoutWithHeader showNotification={false} pageTitle={"More"}>
      <Box flex={1}>
        {items.map((item, index) => (
          <MoreCard {...item} key={index.toString()} />
        ))}
      </Box>
    </LayoutWithHeader>
  );
}
