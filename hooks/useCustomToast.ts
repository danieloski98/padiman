import { View, Text } from 'react-native'
import React from 'react'
import { useToast as useToastHook } from "react-native-toast-notifications";


const useCustomToast = () => {
    const toast = useToastHook();
    return toast;
}

export default useCustomToast