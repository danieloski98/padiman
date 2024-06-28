import { z } from "zod";

let loginSchema = z.object({
  phone_number: z.string().min(11, "Invalid phone number"),
  password: z.string().min(8, "Invalid password"),
});

let signupSchema = z
  .object({
    phone_number: z.string().min(11, "Invalid phone number"),
    email: z
      .string()
      .email("Invalid email address")
      .min(3, "Email address must be at least 3 characters"),
    first_name: z.string().min(3, "Invalid first name"),
    last_name: z.string().min(3, "Invalid last name"),
    password: z.string().min(8, "Invalid password"),
    password2: z.string().min(8, "Invalid password2"),
  })
  .refine((val) => val.password2 === val.password, {
    message: "Passwords do not match",
    path: ["password2"],
  });

let verifyotp = z.object({
  otp: z.string().min(4, "Invalid otp code"),
});

let forgotPasswordSchema = z.object({
  phone_number: z.string().min(4, "Invalid otp code"),
});

let resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Invalid password"),
    password2: z.string().min(8, "Invalid password2"),
  })
  .refine((val) => val.password2 === val.password, {
    message: "Passwords do not match",
    path: ["password2"],
  });

let createDeliverySchema = z.object({
  destination: z.string().min(3, "Destination is required"),
  bus_stop: z.string().min(3, "Required"),
  min_price: z.string().min(1, "Required"),
  max_price: z.string().min(1, "Required"),
});

let deliverySchema = z.object({
  destination: z.string().min(3),
  city: z.string().min(3),
  bus_stop: z.string().min(3),
  max_price: z.string().min(1),
  min_price: z.string().min(1),
});

let parcelOrder = z.object({
  receiver_city: z.string().min(3),
  receiver_name: z.string().min(3),
  receiver_phone: z.string().min(11),
  receiver_email: z.string().email("invalid email"),
  sender_city: z.string().min(3),
});

let driverRequestSchema = z.object({
  destination: z.string().min(3, "Invalid destination"),
  current_city: z.string().min(3, "invalid city"),
  no_of_passengers: z.string().min(1, "Must be at least one passsenger"),
  drop_off: z.string().min(3, "Invalid drop off location"),
});

export {
  loginSchema,
  signupSchema,
  verifyotp,
  forgotPasswordSchema,
  resetPasswordSchema,
  createDeliverySchema,
  deliverySchema,
  parcelOrder,
  driverRequestSchema,
};
