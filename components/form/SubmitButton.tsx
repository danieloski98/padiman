import React from "react";
import { useFormContext } from "react-hook-form";
import { DimensionValue, TouchableOpacity } from "react-native";
import CustomText from "../general/CustomText";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";

interface IProps {
    onSubmit: (data: any) => void;
    label: string;
    isLoading?: boolean;
    width?: DimensionValue;
}

export const SubmitButton = ({
                                 onSubmit,
                                 label,
                                 isLoading,
                                 width = "100%",
                             }: IProps) => {
    const {
        handleSubmit,
        formState: { isDirty, isValid, isSubmitting },
    } = useFormContext();
    const theme = useTheme<Theme>();

    //disabled={!isDirty || !isValid  ? true: false}
    const handleClick = React.useCallback(() => {
        console.log('clicking....')
        console.log(isLoading)
        if (isLoading) return;
        handleSubmit((data) => console.log(data));
    }, [isLoading])

    return (
        <>
            <TouchableOpacity
                onPress={ isLoading ? () => {} : handleSubmit(onSubmit)}
                style={{
                    width,
                    height: 52,
                    backgroundColor: theme.colors.primaryColor,
                    opacity: !isDirty || !isValid ? 0.6 : 1,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CustomText
                    variant="header"
                    style={{
                        fontSize: 16,
                        color: "#FFFFFF",
                    }}
                >
                    {isLoading ? "submitting..." : label}
                </CustomText>
            </TouchableOpacity>
        </>
    );
};
