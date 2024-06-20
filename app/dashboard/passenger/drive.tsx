import LayoutWithHeader from "@/components/general/LayoutWithHeader";
import Box from "@/components/general/Box";
import NavbarWithBackArrow from "@/components/general/NavbarWithBackArrow";
import CustomText from "@/components/general/CustomText";
import { useCallback, useState } from "react";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import AlertCard from "@/components/general/AlertCard";
import { router } from "expo-router";
import useForm from "@/hooks/useForm";
import { driverRequestSchema } from "@/services/validation";
import { CustomTextInput } from "@/components/form/CustomInput";
import { ScrollView } from "react-native-gesture-handler";
import CustomDateTimePicker from "@/components/general/CustomDateTimePicker";
import { SubmitButton } from "@/components/form/SubmitButton";
import useCustomToast from "@/hooks/useCustomToast";
import { useUserDetails } from "@/states/user";
import useCreateDriverRequestMutation from "@/hooks/mutations/useCreateDriverRequest";
import moment from "moment";

export default function DriveParcel() {
  const [travelDate, setTravelDate] = useState(new Date());
  const [takeOffTime, setTakeOffTime] = useState(new Date());

  const { isLoading, mutateAsync } = useCreateDriverRequestMutation();

  const { renderForm } = useForm({
    defaultValues: {
      destination: "",
      current_city: "",
      no_of_passengers: "",
      drop_off: "",
    },
    validationSchema: driverRequestSchema,
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
      travelling_date: moment(travelDate).format("YYYY-MM-DD"),
      time_of_take_off: moment(takeOffTime).format("HH:MM"),
      preferred_take_off: moment(takeOffTime).format("HH:MM"),
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
          <CustomText variant={"subHeader"}>Carry a passenger</CustomText>
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

            <CustomDateTimePicker
              onChange={(date) => setTakeOffTime(date)}
              value={takeOffTime}
              type="time"
              label="Take off time"
            />
            <Box height={20} />

            <CustomTextInput
              name="destination"
              label="Destination"
              placeholder="Enter your desitination"
            />
            <Box height={20} />
            <CustomTextInput
              name="current_city"
              label="Current City"
              placeholder="Enter your city"
            />
            <Box height={20} />

            <CustomTextInput
              name="no_of_passengers"
              label="How many passengers can you carry?"
              placeholder="How many passengers can you carry?"
              keyboardType="number-pad"
            />
            <Box height={20} />

            <CustomTextInput
              name="drop_off"
              label="Dropoff Location"
              placeholder="Dropoff Location"
            />
            <Box height={20} />

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
