import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import Box from "@/components/general/Box";
import NavbarWithBackArrow from "@/components/general/NavbarWithBackArrow";
import CustomText from "@/components/general/CustomText";
import CustomInputWithoutForm from "@/components/general/CustomInputWithoutForm";
import { useCallback, useState } from "react";
import CustomDropDown from "@/components/general/CustomDropDown";
import CustomButton from "@/components/general/CustomButton";
import { Package } from "lucide-react-native";
import IconHolder from "@/components/general/IconHolder";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import { CheckBox } from "@rneui/themed";
import AlertCard from "@/components/general/AlertCard";
import { index } from "@zxing/text-encoding/es2015/encoding/indexes";
import { router } from "expo-router";
import useForm from "@/hooks/useForm";
import { deliverySchema, parcelOrder } from "@/services/validation";
import { CustomTextInput } from "@/components/form/CustomInput";
import { ScrollView } from "react-native-gesture-handler";
import CustomDateTimePicker from "@/components/general/CustomDateTimePicker";
import { NigeriaStates } from "@/utils/dropdowndata";
import { SubmitButton } from "@/components/form/SubmitButton";
import useCreateDeliveryMutation from "@/hooks/mutations/useCreateDeliveryMutation";
import useCustomToast from "@/hooks/useCustomToast";
import moment from "moment";
import { useUserDetails } from "@/states/user";
import useCreateSendParcelMutation from "@/hooks/mutations/useCreateSendParcelMutation";

const genders = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

export default function DeliverParcel() {
  const [perishable, setPerishable] = useState(false);
  const [fragile, setFragile] = useState(false);
  const [travelDate, setTravelDate] = useState(new Date());
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");

  const { isLoading, mutateAsync } = useCreateSendParcelMutation();

  const { renderForm } = useForm({
    defaultValues: {
      sender_city: "",
      receiver_city: "",
      receiver_name: "",
      receiver_phone: "",
      receiver_email: "",
    },
    validationSchema: parcelOrder,
  });

  const theme = useTheme<Theme>();
  const toast = useCustomToast();
  const { phone_number } = useUserDetails((state) => state);
  const handleBackPress = useCallback(async () => {
    router.back();
  }, []);

  const handleSubmit = async (data: any) => {
    const obj = {
      ...data,
      deliveryDate: travelDate,
      state,
      is_perishable: perishable,
      is_fragile: fragile,
      receiver_gender: gender,
      phone_number,
    };

    mutateAsync(obj)
      .then((data) => {
        console.log(data);
        toast.show(JSON.stringify(data?.data), { type: "success" });
        if (router.canGoBack()) {
          router.back();
        }
      })
      .catch((e) => {
        toast.show(JSON.stringify(e), { type: "error" });
      });
  };

  return renderForm(
    <LayoutWithHeader showHeader={false}>
      <Box flex={1} backgroundColor={"background"} paddingHorizontal={"m"}>
        <NavbarWithBackArrow onPress={handleBackPress} />

        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          <CustomText variant={"subHeader"}>Send parcel</CustomText>
          <CustomText variant={"body"}>Please fill out the form</CustomText>

          <Box marginTop={"l"}>
            <CustomDateTimePicker
              onChange={(date) => setTravelDate(date)}
              value={travelDate}
              type="date"
              label="Travel Date"
              minimiumDate={new Date()}
            />
            <Box height={20} />

            <CustomDropDown
              label="State"
              onSelected={(data) => setState(data)}
              options={NigeriaStates}
              placeHolder="State"
              value={state}
            />
            <Box height={20} />

            <CustomDropDown
              label="Receiver gender"
              onSelected={(data) => setGender(data)}
              options={genders}
              placeHolder="Receiver gender"
              value={gender}
            />
            <Box height={20} />

            <CustomTextInput
              name="receiver_city"
              label="Designated City"
              placeholder="Enter your designated city"
            />
            <Box height={20} />

            <CustomTextInput
              name="sender_city"
              label="Enter your current city"
              placeholder="Enter current city"
              multiline
              numberOfLines={3}
            />
            <Box height={20} />

            <CustomTextInput
              name="receiver_name"
              label="Name of the Receiver"
              placeholder="Name of the Receiver"
            />
            <Box height={20} />

            <CustomTextInput
              name="receiver_phone"
              label="Receivers phone number"
              placeholder=""
            />
            <Box height={20} />

            <CustomTextInput
              name="receiver_email"
              label="Receivers email address"
              placeholder=""
            />
            <Box height={20} />

            <Box flexDirection={"row"} alignItems={"center"} marginTop={"s"}>
              <CheckBox
                checked={perishable}
                onPress={() => setPerishable((prev) => !prev)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
              <CustomText variant={"body"}>
                Is the package perishable
              </CustomText>
            </Box>

            <Box flexDirection={"row"} alignItems={"center"} marginBottom={"m"}>
              <CheckBox
                checked={fragile}
                onPress={() => setFragile((prev) => !prev)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
              <CustomText variant={"body"}>Is package fragile</CustomText>
            </Box>

            <AlertCard
              text={"By submitting you agree to all our terms and conditions"}
            />
            <Box height={20} />

            <SubmitButton
              label="Submit"
              onSubmit={(data) => handleSubmit(data)}
              isLoading={isLoading}
              width={"100%"}
            />
          </Box>
        </ScrollView>
      </Box>
    </LayoutWithHeader>,
  );
}
