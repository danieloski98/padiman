import React from "react";
import useGetDeliveriesHistory from "@/hooks/queries/useDeliveryHistory";
import useGetDeliveries from "@/hooks/queries/useGetDeliveries";
import { IDelivery, IParcel } from "@/models/delivery";
import { create } from "zustand";
import useGetSendParcelHistory from "@/hooks/queries/useGetSendParcelHistory";
import useGetSendParcel from "@/hooks/queries/useGetSendParcel";

interface State {
  deliveryHistory: IDelivery[];
  parcelHistory: IParcel[];
  deliveries: IDelivery[];
  parcels: IParcel[];
  setAll: (data: Partial<State>) => void;
}

const useState = create<State>((set) => ({
  deliveryHistory: [],
  parcelHistory: [],
  deliveries: [],
  parcels: [],
  setAll: (data) => set((state) => ({ ...state, ...data })),
}));

export default function useDeliveryController() {
  const { deliveryHistory, parcelHistory, parcels, deliveries, setAll } =
    useState((state) => state);

  // queries
  const getDeliveryHistory = useGetDeliveriesHistory();
  const getParcelHistory = useGetSendParcelHistory();
  const getDeliveries = useGetDeliveries();
  const getParcels = useGetSendParcel();

  console.log(getParcels?.data?.data);

  React.useEffect(() => {
    if (
      getDeliveryHistory.data?.data ||
      getParcelHistory.data?.data ||
      getDeliveries.data?.data
    ) {
      setAll({
        deliveryHistory: getDeliveryHistory.data?.data?.delivery_history,
        parcelHistory: getParcelHistory.data?.data,
        deliveries: getDeliveries.data?.data?.data,
      });
    }
  }, [
    getDeliveryHistory.data?.data,
    getParcelHistory.data?.data,
    getDeliveries.data?.data,
  ]);

  return {
    deliveryHistory,
    parcelHistory,
    parcels,
    deliveries,
  };
}
