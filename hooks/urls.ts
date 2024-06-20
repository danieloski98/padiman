const URLS = {
  login: "/account/login/",
  getProfile: "/user_profile/get-user-profile/",
  register: "/account/register/",
  verifyOtp: "/account/verify-otp/",
  resendOtp: "/account/resend-otp/",
  forgotPassword: "/account/forgot-password/",
  resetPassword: "/account/password-reset/",
  resendPasswordotp: "/account/password-resend-otp/",
  verifyPasswordOtp: "/account/password-verify-otp/",
  logout: "/account/logout/",
  verifyToken: "/account/verify-token/",
  refreshToken: "/account/token-refresh/",
  getAllPosts: "/post/list-all-post/",

  // users profile
  getNotifications: "/user_profile/notification/get",

  // deliveries
  deliveryParcel: "/delivery/deliver-parcel/",
  sendParcel: "/delivery/send-parcel/",
  getDeliveryHistory: "/delivery/user-delivery-history/",
  getSendParcelHistory: "/delivery/user-sendparcel-history/",
  listDeliveries: "/delivery/list-all-delivery/",
  listParcelSender: "/delivery/list-parcel-senders/",

  // passenger
  createRideRequest: "/ride/driver-request/",
  createPassengerRequest: "/ride/passenger-request/",
  getAvaliableDriver: "/ride/list-all-drivers/",
  getAvaliablePassenders: "/ride/list-all-passengers/",
  getDriveHistory: "/ride/single-driver-history/",
  getPassengerHistory: "/ride/single-passenger-history/",

  // wallets
  createWallet: "/wallet/create-wallet/",
  getWallet: "/wallet/get-wallet/",
};

export default URLS;
