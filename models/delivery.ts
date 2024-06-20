interface IDelivery {
  destination: string;
  country: string;
  state: string;
  city: string;
  travel_date: string;
  arrival_date: string;
  bus_stop: string;
  can_carry_light: boolean;
  can_carry_heavy: boolean;
  min_price: number;
  max_price: number;
}

interface IParcel {
  state: string;
  sender_city: string;
  receiver_city: string;
  delivery_date: string;
  is_perishable: boolean;
  is_fragile: boolean;
  receiver_name: string;
  receiver_phone: string;
  receiver_email: string;
  receiver_gender: string;
}

export { IDelivery, IParcel };
