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
import { deliverySchema } from "@/services/validation";
import { CustomTextInput } from "@/components/form/CustomInput";
import { ScrollView } from "react-native-gesture-handler";
import CustomDateTimePicker from "@/components/general/CustomDateTimePicker";
import { NigeriaStates } from "@/utils/dropdowndata";
import { SubmitButton } from "@/components/form/SubmitButton";
import useCreateDeliveryMutation from "@/hooks/mutations/useCreateDeliveryMutation";
import useCustomToast from "@/hooks/useCustomToast";
import moment from "moment";
import { useUserDetails } from "@/states/user";

export default function DeliverParcel() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [travelDate, setTravelDate] = useState(new Date());
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const { isLoading, mutateAsync } = useCreateDeliveryMutation();

  const { renderForm } = useForm({
    defaultValues: {
      destination: "",
      country: "",
      state: "",
      city: "",
      bus_stop: "",
      max_price: "",
      min_price: "",
    },
    validationSchema: deliverySchema,
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
      travelDate,
      arrivalDate,
      state,
      country,
      can_carry_light: selectedIndex === 1,
      can_carry_heavy: selectedIndex === 2,
      phone_number,
    };

    mutateAsync(obj)
      .then((data) => {
        console.log(data?.data);
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
          <CustomText variant={"subHeader"}>Deliver a parcel</CustomText>
          <CustomText variant={"body"}>Please fill out the form</CustomText>

          <Box marginTop={"l"}>
            <CustomText variant={"subHeader"} fontSize={16}>
              Which of these types of parcels can you delivery?
            </CustomText>
            <CustomText variant={"subHeader"} fontSize={16}>
              Options are:
            </CustomText>

            <CustomDateTimePicker
              onChange={(date) => setArrivalDate(date)}
              value={arrivalDate}
              type="date"
              label="Arrival Date"
              minimiumDate={travelDate}
            />
            <Box height={20} />

            <CustomDateTimePicker
              onChange={(date) => setTravelDate(date)}
              value={travelDate}
              type="date"
              label="Travel Date"
              minimiumDate={new Date()}
              maximiumDate={moment(arrivalDate).toDate()}
            />
            <Box height={20} />

            <CustomDropDown
              label="Country"
              onSelected={(data) => setCountry(data)}
              options={[{ label: "Nigeria", value: "Nigeria" }]}
              placeHolder="Country"
              value={country}
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
            <CustomTextInput
              name="city"
              label="city"
              placeholder="Enter your designated city"
            />
            <Box height={20} />
            <CustomTextInput
              name="destination"
              label="Destination"
              placeholder="Enter your destination"
              multiline
              numberOfLines={3}
              style={{
                height: 100,
              }}
            />
            <Box height={20} />

            <CustomTextInput
              name="bus_stop"
              label="Bus Stop"
              placeholder="Enter your designated Bustop"
            />
            <Box height={20} />
            <CustomTextInput
              name="max_price"
              label="Max price"
              placeholder="Enter your max price"
              keyboardType="number-pad"
            />
            <Box height={20} />
            <CustomTextInput
              name="min_price"
              label="Min Price"
              placeholder="Enter your min price"
              keyboardType="number-pad"
            />
            <Box height={20} />

            <Box flexDirection={"row"} alignItems={"center"} marginTop={"s"}>
              <CheckBox
                checked={selectedIndex === 1}
                onPress={() => setSelectedIndex(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
              <CustomText variant={"body"}>
                Light parcels i can easily carry
              </CustomText>
            </Box>

            <Box flexDirection={"row"} alignItems={"center"} marginBottom={"m"}>
              <CheckBox
                checked={selectedIndex === 2}
                onPress={() => setSelectedIndex(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
              <CustomText variant={"body"}>
                Heavy parcels that can fit into my car boot.
              </CustomText>
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
